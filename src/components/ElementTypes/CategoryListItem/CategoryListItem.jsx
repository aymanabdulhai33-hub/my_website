import React, { useEffect, useState } from "react";
import usePage from "../../../contexts/usePage/usePage";
import * as S from '../styled'
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import { setUpDefaultBuilderStyle } from "../../../utility/globalFun";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { useQuery } from "@tanstack/react-query";
import { getFieldPropertyForRelatedGridFieldForFarFieldId, getFieldPropertyForRelatedGridFieldModel } from "../../../utility/typeAndStructure";
import useBuilder from "../../../contexts/useBuilder/useBuilder";
import { getGridDataByFieldId } from "../../../apiCall/post";
import LoadingSection from "../../LoadingSection/LoadingSection";
import { Empty } from "antd";
import DataDisplay from "../DataDisplay";

const CategoryListItem = ({isLayoutEle , element , parent , drag , canDrop , isOver }) => {
    const {isView , selectedElement , setSelectedElement , pageData , isMobilePage} = usePage()
    const {models , isFetchingModels} = useBuilder()
    const [selectedItem , setSelectedItem] = useState()
    const {visible} = useGetElementHideSize({element})
    var sectionData = pageData?.[element?.id]?.data?.data?.data

    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    var model = models?.data?.find(i => i.id == element?.data_source_model)
    var GridField = model?.fields?.find(i => i?.id == element?.grid_field)
    var ModelOFRelatedGridField = getFieldPropertyForRelatedGridFieldModel(GridField)
    var FarRelatedField = getFieldPropertyForRelatedGridFieldForFarFieldId(GridField)

    const {data: items , isLoading: isLoadingItems} = useQuery({
        queryKey: [selectedItem?.id , model?.id , GridField?.id],
        queryFn: async () => {
            
            
            
            var body = {
                [FarRelatedField.value] : selectedItem?.id
            }
            
            
            return await getGridDataByFieldId({body , modelId: ModelOFRelatedGridField?.value})
        },
        enabled: selectedItem?.id && model && GridField ? true : false,
    })

    const handleClickCategory = (item) => {
        setSelectedItem(item)
    }

    useEffect(() => {
        if(!selectedItem && sectionData){
            setSelectedItem(sectionData?.[0])
        }
    },[sectionData])

    var fields = Array.from(element?.displayed_fields?.split(','), String)
    var itemsFields = Array.from(element?.items_displayed_fields?.split(','), String)

    return(
        visible &&
        <S.Wrapper
        an={element?.data_source_model && sectionData ? null : element?.animation_name}
        style={{
            ...allStyle,
            padding:0,
            margin:0,
            background:'',
            backgroundColor:'',
            backgroundImage:'',
            boxShadow: '',
            border: 'none',
            ...(!isView
                ? {
                    overflow: "visible",
                  }
            : {}),
        }} 
        ref={!isView ? drag : null}
        >
            <div
            style={{
                ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement),
                ...(isMobilePage ?
                    {padding: '5px'}
                : {})
            }} 
            onClick={(e)=>{
                if(!isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
            }}
            className={element?.assign_classname || ''}
                >
                <div style={{position: 'absolute' , top:'0px' , right:'0' , color: 'var(--builder-main)'}}>
                    <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
                </div>

                <div className="flex flex-col">
                    <div className="gap-8 global-scroll-x">
                        <div
                        style={{width:'max-content' , display:'flex' , gap:'10px'}}
                        >
                            {sectionData && element?.data_display_component?.id ?
                            <div style={{display:'flex' , gap:'10px' , justifyContent:'center' , marginTop: !isMobilePage ? '40px' : ''}}>
                                <DataDisplay handleClickOverwrite={handleClickCategory} is_category data={sectionData} element={element} />
                            </div> :
                            sectionData?.map((item) => {
                                return(
                                    <div key={item?.id}
                                    style={{
                                        padding: isMobilePage ? '0px 5px 0px 5px' : "5px" ,
                                        width: isMobilePage ? 'max-content' : '150px' , 
                                        alignItems:'center' , 
                                        borderRadius:"80px" , 
                                        background: 'var(--light_color)' , 
                                        color: 'white' , 
                                        display:'flex' , 
                                        gap:'10px',
                                        cursor:'pointer',
                                        border: selectedItem?.id == item?.id ? '2px solid var(--dark_color)' : ''
                                    }}
                                    onClick={() => handleClickCategory(item)}
                                    >
                                        <div>
                                            <img style={{
                                            width: isMobilePage ? '30px' : '35px',
                                            height: isMobilePage ? '30px' : '35px',
                                            borderRadius:'50%'
                                            }} 
                                            src={item[element?.image_field]?.file_url} />
                                        </div>
                                        <p style={{fontSize: isMobilePage ? '12px' : ''}}>{item?.[fields[0]]}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {isLoadingItems ? <div style={{marginTop: !isMobilePage ? '40px' : ''}}> <LoadingSection /> </div>:
                    items?.data?.data?.data?.length > 0 ?
                    <div key={selectedItem?.id} style={{display:'flex' , gap:'10px' , justifyContent:'center' , marginTop: !isMobilePage ? '40px' : ''}}>
                        <DataDisplay ModelIdOFRelatedGridField={ModelOFRelatedGridField?.value} is_list_item an={element?.animation_name} is_item_display_component data={items?.data?.data?.data} element={element} />
                    </div>
                    : 
                    !isLoadingItems && items?.data?.data?.data.length == 0 ? <Empty /> : null
                    }
                </div>
                
            </div>
        </S.Wrapper>
    )
}

export default CategoryListItem