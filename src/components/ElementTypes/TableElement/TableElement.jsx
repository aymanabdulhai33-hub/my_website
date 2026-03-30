import React , {useCallback, useEffect, useRef, useState} from "react";
import * as S from '../styled'
import usePage from "../../../contexts/usePage/usePage";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import { getRelatedFieldValue, setUpDefaultBuilderStyle } from "../../../utility/globalFun";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { Button, DatePicker, Form, Input, InputNumber, Popconfirm, Popover, Select, Switch, Table, TimePicker } from "antd";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { TableWrapper } from "./styled";
import { getItemData, getSearchItemData, getTableData } from "../../../apiCall/get";
import useLang from "../../../contexts/useLanguage/useLang";
import useBuilder from "../../../contexts/useBuilder/useBuilder";
import { renderResizableTitle } from "./renderResizableTitle";
import LoadingSection from "../../LoadingSection/LoadingSection";
import { SearchOutlined } from "@ant-design/icons";
import { t } from "i18next";
import { getGridDataByFieldId, getSearchData } from "../../../apiCall/post";
import { useForm } from "antd/es/form/Form";
import { getFieldPropertyForRelatedGridFieldForFarFieldId, getFieldPropertyForRelatedGridFieldModel, getValueFromSearchItemData, isBooleanField, isDateField, isFileField, isListOfOptionsField, isNumberField, isRelatedField, isStringField, isTimeField } from "../../../utility/typeAndStructure";
import GlobalSelect from "../../GlobalSelect/GlobalSelect";
import dayjs from "dayjs";
import PaginationCompnent from "../../PaginationCompnent/PaginationCompnent";


const { RangePicker } = DatePicker;

const TableElement = ({element , isLayoutEle , isOver , canDrop , item , assignedVariables , component , componentParent}) => {

    const {selectedElement , isView , setSelectedElement } = usePage()
    const [params , setParams] = useState({filters: {} , page: 1})
    const [meta , setMeta] = useState(0)
    const {visible} = useGetElementHideSize({element})
    const {models} = useBuilder()
    const {lang} = useLang()
    var parentModel = models?.data?.find(i => i?.id == componentParent?.data_source_model)
    var model = models?.data?.find(i => i?.id == element?.data_source_model)

    var assignedVariable = item && component?.related_variables?.find(i => i.variable_code == element?.data_code)
    var assigned_field = componentParent?.assigned_fields ? JSON.parse(componentParent?.assigned_fields) : null
    

    const {data: itemDataInfo , isLoading: isLoadingItemData , isFetching: isFetchingItemData} = useQuery({
        queryKey: ['item-data' , {element: element?.id} , `${item?.id}` , {page: params?.page}],
        queryFn: async () => {
            var gridField = parentModel?.fields?.find(i =>  i?.code == assigned_field?.[assignedVariable?.id])
            var modelOfGridField = getFieldPropertyForRelatedGridFieldModel(gridField)
            var FarRelatedField = getFieldPropertyForRelatedGridFieldForFarFieldId(gridField)
            var body = {
                [FarRelatedField.value] : item?.id
            }
            
            const res = await getGridDataByFieldId({body , modelId: modelOfGridField?.value , page: params?.page || 1})
            setMeta(res?.data?.meta)
            return res?.data?.data?.data || []
        },
        enabled: item && assignedVariable ? true : false
    })

    // if(componentParent?.id == 26972){
    //     console.log(itemDataInfo)
    // }

    const {data , isFetching , isLoading , isPlaceholderData} = useQuery({
        queryKey: ['table-data' , {element: element?.id} , 
            {model_id: `${element?.data_source_model}` , lang},
            {filters: params?.filters},
            {page: params?.page}
        ],
        queryFn: async () => {
            var res
            if(Object.keys(params?.filters)?.length > 0){
                res = await getSearchData({modelId: element?.data_source_model , body : params?.filters , page: params?.page || 1})
                setMeta(res?.data?.meta)
                return res?.data?.data?.data || []
            }else{
                res = await getTableData({itemModelId: element?.data_source_model , lang , page: params?.page || 1})
                
                setMeta(res?.meta)
                return res?.data?.data || []
            }
        },
        placeholderData: keepPreviousData,
        // refetchInterval: 5000,
        enabled: !item && !assignedVariable ? true : false
    })

    const handleChangePage = (e) => {
        setParams((prev) => {
            return {...prev , page: e}
        })
    }

   
    const setUpColumns = useCallback(() => {
        if(!model){
            return []
        }
        var colsData = []
        var fields = Array.from(element?.displayed_fields?.split(','), String) || []
        colsData = fields?.map((field , index) => {
            var title = model?.fields?.find(i => i?.code == field)?.name
            var modelField = model?.fields?.find(i => i?.code == field)
            var ele = document.getElementById(`col-${element?.id}-${field}`)
            return{
                title: title,
                dataIndex: field,
                key: field,
                // width: isRelatedField(modelField) ? 300 : 200,
                defaultWidth: isRelatedField(modelField) ? 300 : 200,
                element: element,
                FilterRender: !isFileField(modelField) && !item ? () => <FilterRender params={params} setParams={setParams} field={modelField}/> : null,
                render: (value , row) => {
                    return(
                        <div 
                        id={`col-${element?.id}-${field}`} 
                        className="default-data-div"
                        style={{width: ele?.style?.width ? `${ele?.style?.width}` : (isRelatedField(modelField) ? `300px` : `200px`)}}
                        >
                            <p style={{maxWidth:'max-content'}}>
                                {isFileField(modelField) ? 
                                <img 
                                style={{
                                    width:'30px',
                                    height:'30px'
                                }}
                                src={value?.file_url || ''}
                                />
                                : isRelatedField(modelField) ?
                                    `${getRelatedFieldValue(value) || ''}`
                                : isListOfOptionsField(modelField) ?
                                    `${value?.text || ''}`
                                : isBooleanField(modelField) ?
                                    <Switch size="small" checked={value}/>
                                : `${value || ''}`}
                            </p>
                        </div>
                    )
                }
            }
        })
        colsData = colsData.map((col) => {
            return{
                ...col,
                title: renderResizableTitle(col , col.dataIndex , lang , colsData , element)
            }
        })
        return colsData

    },[element?.displayed_fields , model])

    const [columns , setColumns] = useState([])

    useEffect(() => {
        if(element?.displayed_fields){
            setColumns(setUpColumns())
        }
    },[element?.displayed_fields , model])


    useEffect(() => {
        if(data?.length == 0){
            setColumns(setUpColumns())
        }
    },[data])


    
    const onRow = (row) => {
        console.log(row)
    }

    // if(componentParent?.id == 26972){
    //     console.log(data , assignedVariable)
    // }

    return(
        visible &&
        <S.Wrapper 
        an={element?.animation_name}
        style={{
            ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement),
            overflow: 'unset',
        }}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        className={element?.assign_classname || ''}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper element={element} isLayoutEle={isLayoutEle} />
            </div>
            {!model ? <LoadingSection /> :
            <>
                <div style={{marginBlock: 10 , width:'100%' , display:'flex' , justifyContent:'flex-end'}}>
                    <PaginationCompnent total={meta?.total_items_count} page={params?.page} onChange={handleChangePage} />
                </div>
                <TableWrapper>
                    <Table
                    key={`table-${element?.id}`}
                    columns={columns}
                    rowKey={'id'}
                    style={{width: '100px'}}
                    dataSource={item ? itemDataInfo : data}
                    loading={(isLoading && !data) || (!columns) || (isFetching && isPlaceholderData) || (isLoadingItemData && !itemDataInfo)}
                    pagination={false}
                    rowClassName={'table-row'}
                    rootClassName={"main-table"}
                    size="small"
                    onRow={
                    (record, rowIndex) => {
                        return {
                        onClick: (event) => {onRow ? onRow(record , rowIndex , event) : null},
                        };
                    }}
                    />
                </TableWrapper>
                <div style={{marginBlock: 10 , width:'100%' , display:'flex' , justifyContent:'flex-end'}}>
                    <PaginationCompnent total={meta?.total_items_count} page={params?.page} onChange={handleChangePage} />
                </div>
            </>
            }
        </S.Wrapper>
    )
}

export default TableElement


const FilterRender = ({field , setParams , params}) => {
    const [form] = useForm()
    const handleSearch = (values) => {
        var value = values[field.id]
        if(isDateField(field)){
            value = {
                value: value ? `${value?.[0]?.format("YYYY-MM-DD")},${value?.[1]?.format("YYYY-MM-DD")}` : '',
                operator: 'between'
            }
        }
        if(isTimeField(field)){
            value = value?.format("HH:mm:ss") || ''
        }
        setParams((prev) => {
            var newFilter = {...prev}
            newFilter.filters[field.id] = value
            return newFilter
        })
    }

    const handleResetFilter = () => {
        form.setFieldValue(field.id , '')
        setParams((prev) => {
            var newFilter = {...prev}
            delete newFilter.filters[field.id]
            return newFilter
        })
    }
    return(
        <div style={{display:'flex' , alignItems:'center'}}>
            <Popover 
            trigger={'click'}
            placement="bottom"
            content={() => {
                return(
                    <div style={{width:'200px' , display:'flex' , flexDirection:'column' , gap:'10px'}}>
                        <Form
                        key={`${field?.name}-${field?.id}`}
                        form={form}
                        initialValues={{
                            [field.id]: isDateField(field) ? 
                            params.filters?.[field.id]?.value?.split(',')?.length == 2 ? [dayjs(value?.value?.split(',')[0] , 'YYYY-MM-DD') , dayjs(value?.value?.split(',')[1] , 'YYYY-MM-DD')] : ''
                            : isTimeField(field) ? 
                            params.filters?.[field.id] ? dayjs(params.filters?.[field.id] , 'HH:mm:ss') : ''
                            : params.filters?.[field.id] || ''
                        }}
                        onFinish={handleSearch}
                        layout="vertical"
                        >
                            {isNumberField(field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <InputNumber onWheel={(e) => e.preventDefault()} />
                                </Form.Item>
                            : isStringField(field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <Input />
                                </Form.Item>
                            : isBooleanField(field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <Switch />
                                </Form.Item>
                            : isDateField(field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <RangePicker />
                                </Form.Item>
                            : isTimeField(field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <TimePicker style={{width:'100%'}}/>
                                </Form.Item>
                            : isRelatedField(field) ?
                                <RelatedFieldFilter field={field}/>
                            : isListOfOptionsField(field) ?
                            <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                <GlobalSelect 
                                allowClear={false}
                                options={field?.field_options?.map((option) => {
                                    return{
                                        label: option?.text,
                                        value: option?.id
                                    }
                                }) || []}
                                />
                            </Form.Item>
                            : null}
                            
                            <div style={{display:'flex' , gap:'10px'}}>
                                <Button htmlType="submit" type="primary">{t('search')}</Button>
                                <Button onClick={handleResetFilter} type="primary">{t('reset')}</Button>
                            </div>
                        </Form>
                    </div>
                )
            }}
            >
                <SearchOutlined />
            </Popover>
        </div>
    )
}


const RelatedFieldFilter = ({field}) => {

    const [search , setSearch] = useState('')
    const delayTimer = useRef()
    const {data , isLoading , isFetching} = useQuery({
        queryKey: [{type: 'item_brief' , modelId: field.related_relation[0].model , search}],
        queryFn: async () => {
            const res = await getSearchItemData({modelId: field.related_relation[0].model , search})
            const {data} = res || {}
            return data
        },
        // staleTime: Infinity,
        placeholderData: keepPreviousData,
        enabled: field?.related_relation[0]?.model ? true : false
    })

    const onSearch = (value) => {
        clearTimeout(delayTimer.current);
        delayTimer.current = setTimeout(() => {
            setSearch(value)
        }, 500);
    }

    const onSelect = (e) => {
        setSearch('')
    }

    return(
        <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
            <Select
            style={{maxWidth:'295px'}}
            filterOption={false}
            showSearch
            onSearch={onSearch}
            onSelect={onSelect}
            loading={isLoading || isFetching}
            options={data && data.data ? data.data.map((item , index) => {
                return{
                    label: getValueFromSearchItemData(item),
                    value: Object.keys(item)[0]
                }
            }): []}
            />
        </Form.Item>
    )
}