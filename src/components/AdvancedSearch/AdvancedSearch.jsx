import React, { useState } from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { t } from "i18next";
import FieldTypes from "../FieldTypes/FieldTypes";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { isBooleanField } from "../../utility/typeAndStructure";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAdvSearchOperators } from "../../apiCall/get";
import { Button, Radio } from "antd";
import usePage from "../../contexts/usePage/usePage";
import { useSearchParams } from "react-router-dom";

const AdvancedSearch = ({models , element}) => {

    const setUpDefaultFilters = (isModel) => {
        try{
            if(element?.applied_filters){
                var filters = JSON.parse(element?.applied_filters)
                return isModel ? filters ? filters?.model : null : filters ? filters?.filters : [{field: null , operator: '' , unId: Date.now() , value_type: 'default'}]
            }else{
                return isModel ? null : [{field: null , operator: '' , unId: Date.now() , value_type: 'default'}]
            }
        }catch(e){
            return isModel ? null : [{field: null , operator: '' , unId: Date.now() , value_type: 'default'}]
        }
    }

    const [filters , setFilters] = useState(setUpDefaultFilters())
    const [selectedModel , setSelectedModel] = useState(setUpDefaultFilters(true))
    const {updatePageElement} = usePage()

    
    const {data: searchOperators , isFetching} = useQuery({
        queryKey: ['adv_search_operators'],
        queryFn: async () => {
            const res = await getAdvSearchOperators()
            return res?.data
        },
        placeholderData: keepPreviousData,
        staleTime: Infinity
    })

    const handleChangeFilter = (value , object , key) => {
        setFilters((prev) => {
            var newFilters = [...prev]
            newFilters = newFilters?.map(i => {
                if(i?.unId == object?.unId){
                    i[key] = value
                    if(isBooleanField(object?.field)){
                        i.value = false
                    }
                }
                return i
            })

            return newFilters
        })
    }

    const handleChangeValue = (value , object) => {
        setFilters((prev) => {
            var newFilters = [...prev]
            newFilters = newFilters?.map(i => {
                if(i?.unId == object?.unId){
                    i.value = value
                }
                return i
            })

            return newFilters
        })

    }

    const handleAddNewFilters = () => {
        setFilters((prev) => {
            var newFilters = [...prev]
            
            newFilters.push({field: null , operator: '' , unId: Date.now() , value_type: 'default'})

            return newFilters
        })
    }

    const handleRemoveFilter = (id) => {
        setFilters((prev) => {
            var newFilters = [...prev]
            
            newFilters = newFilters.filter(i => i?.unId != id)

            return newFilters
        })
    }

    const handleAddFilters = async () => {

        var sendData = {
            applied_filters: filters ? JSON.stringify({
                filters : filters,
                model: selectedModel
            }) : ''
        }

        updatePageElement({element , dataObject: sendData})
    }

    return(
        <div style={{width:'600px' , display:'flex' , flexDirection:'column' , gap:'10px'}}>
            <div style={{width:'225px'}}>
                <p>{t('select model')}</p>
                <GlobalSelect 
                    defaultValue={selectedModel?.id}
                    onChange={(e , b) => setSelectedModel(b?.model)}
                    options={models?.data?.map((model) => {
                        return{
                            label: model?.name,
                            value: model?.id,
                            model: model
                        }
                    })}
                />
            </div>

            {selectedModel && 
            <div style={{display:'flex' , flexDirection:'column' , gap:'10px'}}>
                <h3>{t('filters')}</h3>
                {selectedModel && 
                    filters?.map((filter , index) => {
                        return <FilterContent
                        index={index}
                        filters={filters}
                        filter={filter}
                        key={filter?.unId}
                        selectedModel={selectedModel}
                        handleChangeFilter={handleChangeFilter}
                        searchOperators={searchOperators}
                        isFetching={isFetching}
                        handleChangeValue={handleChangeValue}
                        handleAddNewFilters={handleAddNewFilters}
                        handleRemoveFilter={handleRemoveFilter}
                        />
                    })
                }
                <div>
                    <Button onClick={handleAddFilters} type="primary">{t('add filters')}</Button>
                </div>
            </div>}

        </div>
    )
}

export default AdvancedSearch

const FilterContent = ({filter , handleRemoveFilter , index , filters , selectedModel , handleChangeFilter , searchOperators , isFetching , handleChangeValue , handleAddNewFilters}) => {

    const [searchParams] = useSearchParams()
    const params = Object.fromEntries([...searchParams]);

    return(
        <div style={{display: 'flex' , gap:'9px' , flexWrap:'wrap'}}>
            <div style={{width: '170px' , display:'flex' , flexDirection:'column' , marginTop:'auto'}}>
                <h3>{t('field')}</h3>
                <GlobalSelect
                    style={{width: '100%'}}
                    onChange={(value , object) => handleChangeFilter(object?.field , filter , 'field')}
                    defaultValue={filter?.field?.id || ''}
                    options={selectedModel?.fields?.map((field) => {
                        return{
                            label: field?.name,
                            value: field?.id,
                            field: field
                        }
                    })}
                />
            </div>

            <div style={{width: '170px' , display:'flex' , flexDirection:'column' , marginTop:'auto' ,}}>
                <h3>{t('operator')}</h3>
                <GlobalSelect
                    style={{width: '100%'}}
                    onChange={(value , object) => handleChangeFilter(value , filter , 'operator')}
                    defaultValue={filter?.operator || ''}
                    loading={isFetching}
                    options={searchOperators?.map((operator) => {
                        return{
                            label: operator?.label,
                            value: operator?.value
                        }
                    })}
                />
            </div>

            <div>
                <div>
                    <Radio.Group
                    style={{display:'flex', alignItems:'center'}}
                    size="small"
                    onChange={(value) => {
                        handleChangeFilter(value.target.value , filter , 'value_type')
                    }}
                    value={filter?.value_type}
                    >
                        <Radio value={'default'}>{t('data value')}</Radio>
                        <Radio value={'url_value'}>{t('url value')}</Radio>
                    </Radio.Group>
                </div>
                <h3>{t('value')}</h3>
                <div style={{display:'flex' , gap:"10px"}}>
                    {filter?.value_type == 'default' ?
                    <FieldTypes 
                    defaultValue={filter?.value}
                    field={filter?.field}
                    onChange={(value) => handleChangeValue(value , filter)}
                    />
                    : 
                    <GlobalSelect
                    defaultValue={filter?.value}
                    onChange={(value) => handleChangeValue(value , filter)}
                    options={params && typeof params == 'object' ? Object.keys(params)?.map((key) => {
                        return{
                            label: key,
                            value: key
                        }
                    }) : []}
                    />
                    }
                    <DeleteOutlined
                    style={{cursor:'pointer' , fontSize:'18px' , color:'red'}} 
                    onClick={() => handleRemoveFilter(filter?.unId)}
                    />
                </div>
            </div>


            {filters?.length - 1 == index && 
            <div style={{alignItems:'center' , width:'100%' , display:'flex'}}>
                <PlusCircleOutlined
                style={{cursor:'pointer' , fontSize: "18px"}} 
                onClick={handleAddNewFilters}
                /> 
            </div>}

        </div>    
    )
}