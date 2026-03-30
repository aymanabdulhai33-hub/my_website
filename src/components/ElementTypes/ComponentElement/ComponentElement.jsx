import React, { useState } from "react";
import usePage from "../../../contexts/usePage/usePage";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPageData } from "../../../apiCall/get";
import { buildTree, getAppCashDataFromLocalStorage, saveAppCashInLocalStorage } from "../../../utility/globalFun";
import ElementWrapper from "../ElementWrapper";
import LoadingSection from "../../LoadingSection/LoadingSection";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";

const ComponentElement = ({element , isLayoutEle , parent , drag , item , setStorageState}) => {
    const { isView , selectedElement , setSelectedElement} = usePage()
    const {visible} = useGetElementHideSize({element})
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    const {data = getAppCashDataFromLocalStorage({keyName: `component_${element?.related_component?.id}`}) , isFetching , isLoading} = useQuery({
        queryKey: ['component' , element?.related_component?.id],
        queryFn: async () => {
            const res = await getPageData({modelCode: 'wsb_pages' , pageId: element?.related_component?.id})
            if(res?.data?.data?.[0]){
                var newData = {...res?.data?.data?.[0]}
                newData.related_childrens = buildTree(newData?.related_childrens)
                saveAppCashInLocalStorage({keyName: `component_${element?.related_component?.id}` , data: newData})
                return newData
            }
            return null
        },
        enabled: element?.related_component?.id ? true : false,
        placeholderData: keepPreviousData,
        ...(isView ?
            {staleTime: Infinity}
        : {})
    })

    return(
        visible && <div
        style={{
            position:'relative',
            width:"max-content",
            maxHeight:'100%',
            ...(selectedElement?.id == element?.id ? {
                border: '2px solid red'
            } : {}),
        }}
        ref={!isView ? drag : null}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        >
            <div style={{position: 'absolute' , top:'0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper isComponent parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            {/* {element?.related_component?.page_name} */}
            {isLoading && !data ? <LoadingSection /> : 
            data && data?.related_childrens?.map((ele , index) => {
                return(
                    <ElementWrapper 
                    component={data}
                    custom_data={element?.assigned_fields} 
                    isLayoutEle={true} 
                    parent={element} 
                    element={ele}
                    item={item}
                    key={`${ele?.id}-${index}`}
                    />
                )
            })}
        </div>
    )
}

export default ComponentElement