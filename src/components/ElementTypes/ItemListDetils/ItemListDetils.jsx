import React, { useState } from "react";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import usePage from "../../../contexts/usePage/usePage";
import * as S from '../styled'
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import { buildTree, setUpDefaultBuilderStyle } from "../../../utility/globalFun";
import LoadingSection from "../../LoadingSection/LoadingSection";
import DataDisplay from "../DataDisplay";
import { Empty } from "antd";
import CustomComponent from "../../DataDisplayTypes/CustomComponent";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPageData } from "../../../apiCall/get";

const ItemListDetils = ({element , isLayoutEle , parent , drag , isOver , canDrop , isMobile}) => {

    const {isView , selectedElement , setSelectedElement , pageData} = usePage()
    const {visible} = useGetElementHideSize({element})
    const [selectedItem , setSelectedItem] = useState()


    const {data: componentData , isFetching , isLoading} = useQuery({
        queryKey: ['component' , element?.item_display_component?.id],
        queryFn: async () => {
            const res = await getPageData({modelCode: 'wsb_pages' , pageId: element?.item_display_component?.id})
            if(res?.data?.data?.[0]){
                var newData = {...res?.data?.data?.[0]}
                newData.related_childrens = buildTree(newData?.related_childrens)
                return newData
            }
            return null
        },
        enabled: element?.item_display_component?.id ? true : false,
        placeholderData: keepPreviousData,
        ...(isView ?
            {staleTime: Infinity}
        : {})

    })


    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    var sectionData = pageData?.[element?.id]

    return(
        visible &&
        <S.Wrapper
        an={element?.animation_name}
        style={{
            padding:0,
            margin:0,
            background:'',
            backgroundColor:'',
            backgroundImage:'',
            boxShadow: '',
            border: 'none'
        }} 
        // ref={!isView ? drag : null}
        >
            <div
            style={{
                ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement),
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
            
            <div style={{
                ...allStyle,
                }}>
                <div>
                    {element?.data_source_model && sectionData ? 
                        sectionData?.status == "pending" ? 
                            <LoadingSection />
                        :
                        sectionData?.data?.data ? 
                            <DataDisplay is_item_list_detils={true} setSelectedItem={setSelectedItem} data={sectionData?.data?.data?.data} element={element}/>
                        :
                            <Empty />
                        : null
                    }
                </div>

                {element?.item_display_component && selectedItem?.id ?
                    <CustomComponent component={componentData} element={element} item={selectedItem}/>
                : selectedItem?.id
                }

            </div>
        </div>

        </S.Wrapper>
    )
}

export default ItemListDetils