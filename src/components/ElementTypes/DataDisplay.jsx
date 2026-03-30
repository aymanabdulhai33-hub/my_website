import React, { useState } from "react";
import Card from "../DataDisplayTypes/Card";
import CardImage from "../DataDisplayTypes/CardImage";
import usePage from "../../contexts/usePage/usePage";
import CustomComponent from "../DataDisplayTypes/CustomComponent";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPageData } from "../../apiCall/get";
import { buildTree, getAppCashDataFromLocalStorage, saveAppCashInLocalStorage } from "../../utility/globalFun";
import MobileSlider from "../DataDisplayTypes/MobileSlider";
import LoadingSection from "../LoadingSection/LoadingSection";
import { useNavigate } from "react-router-dom";
import MobileGridListItems from "../DataDisplayTypes/MobileGridListItems";
import { Empty } from "antd";
import * as S from './styled'

const DataDisplay = ({element , data , is_list_item , ModelIdOFRelatedGridField , is_item_list_detils , setParentsModel , setSelectedItem , is_item_display_component , is_category , handleClickOverwrite , an}) => {
    const {isView} = usePage()
    const navigate = useNavigate()

    const {data: componentData = getAppCashDataFromLocalStorage({keyName: `componentData_${is_item_display_component ? element?.item_display_component?.id : element?.data_display_component?.id}`}) , isFetching , isLoading} = useQuery({
        queryKey: ['component' , is_item_display_component ? element?.item_display_component?.id : element?.data_display_component?.id],
        queryFn: async () => {
            const res = await getPageData({modelCode: 'wsb_pages' , pageId: is_item_display_component ? element?.item_display_component?.id : element?.data_display_component?.id})
            if(res?.data?.data?.[0]){
                var newData = {...res?.data?.data?.[0]}
                newData.related_childrens = buildTree(newData?.related_childrens)
                saveAppCashInLocalStorage({keyName: `componentData_${is_item_display_component ? element?.item_display_component?.id : element?.data_display_component?.id}` , data: newData})
                return newData
            }
            return null
        },
        enabled: (!is_item_display_component && element?.data_display_component?.id ) || (is_item_display_component && element?.item_display_component?.id) ? true : false,
        placeholderData: keepPreviousData,
        ...(isView ?
            {staleTime: Infinity}
        : {})

    })

    const handleClick = (e , item) => {

        if(handleClickOverwrite){
            handleClickOverwrite(item)
            return 
        }


        var isToDetailsPageAction = element?.related_events?.find(i => i?.event_action?.code == 'to_details')
        
        if(isToDetailsPageAction){
            if(isView){
                navigate(`/${isToDetailsPageAction?.to_page?.path}?item_id=${item?.id || item?.item_id}&model_id=${is_list_item ? ModelIdOFRelatedGridField : element?.data_source_model}`)
            }else{
                navigate(`/admin/page-editor/${isToDetailsPageAction?.to_page?.id}?item_id=${item?.id || item?.item_id}&model_id=${is_list_item ? ModelIdOFRelatedGridField : element?.data_source_model}`)
            }
        }
        if(setSelectedItem){
            setSelectedItem(item)
        }
        e.stopPropagation()
    }

    var dataArray = data?.data || data

    return(
        element?.data_display_type?.code == 'mobile_slider' && !is_category ?
        <MobileSlider handleClick={handleClick} element={element} data={dataArray}/> :
        element?.data_display_type?.code == 'mobile_grid_list_items' && !is_category ?
        <MobileGridListItems handleClick={handleClick} element={element} data={dataArray}/>
        :
        element?.data_display_type?.code == 'card' || 
        element?.data_display_type?.code == 'card_image' || 
        element?.data_display_type?.code == 'custom_component' ||
        element?.data_display_component?.id
        ?
        isLoading && !componentData ? 
        <LoadingSection /> :
        dataArray?.length > 0 ? dataArray?.map((item , index) => {
            return(
                <S.Wrapper an={an} onClick={(e) => handleClick(e , item)} key={index}>
                    {element?.data_display_type?.code == 'custom_component' || is_category ?
                    <CustomComponent is_item_list_detils={is_item_list_detils} is_item_display_component={is_item_display_component} setParentsModel={setParentsModel} component={componentData} element={element} item={item}/>
                    : element?.data_display_type?.code == 'card' ? 
                    <Card element={element} item={item}/>
                    : element?.data_display_type?.code == 'card_image' ? 
                    <CardImage element={element} item={item} />
                    :
                    <></>}
                </S.Wrapper>
            )
        }) : <Empty />
        : 'not supported'
    )
}

export default DataDisplay