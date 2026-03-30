import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { Link } from "react-router-dom";
import no_image from '../../../assets/images/no_image.jpg'
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'

const ImageElement = ({element , isLayoutEle , parent , custom_data , drag , assignedVariables , component , item}) => {
    const {isView , selectedElement , setSelectedElement , itemData , isLoadingItemData} = usePage()
    const {visible} = useGetElementHideSize({element})
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    var assignedVariable = item && assignedVariables ? 
    component?.related_variables?.find(i => i.variable_code == element?.data_code)?.id
    : custom_data ? component?.related_variables?.find(i => i.variable_code == element?.data_code)?.id :  null

    var currentData = custom_data ? JSON.parse(custom_data) : null
    
    return(
        visible ? 
        <S.Wrapper 
        an={element?.animation_name}
        style={{
            position:'relative',
            width:'fit-content',
            ...allStyle
        }}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        ref={!isView ? drag : null}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            {element?.href ? <Link 
            to={isView && element?.href ? element?.href: ''} 
            target={isView && element?.is_blank ? '_blank' : ''}
            style={{...allStyle}}
            >
            <img 
            style={{
                maxWidth: 'none',
                width:'100px',
                ...(selectedElement?.id == element?.id ? {
                    border: '2px solid red'
                } : {}),
                ...allStyle,
                ...(!isView &&
                (!allStyle?.padding ||
                allStyle?.padding.includes("0px") ||
                allStyle?.padding == "0" ||
                allStyle?.padding == "0px") ?
                {padding: "2px"}: {}),
                ...(element?.href ?  
                {cursor:'pointer'}
                : {})
            }}
                src={
                    custom_data && currentData[assignedVariable] ? `${custom_data && currentData[assignedVariable]}` : 
                    !component?.related_variables?.find(i => i.variable_code == element?.data_code) && element?.data_code ? 
                    !isLoadingItemData && !itemData ? 
                    no_image
                    :
                    isLoadingItemData ? '' :
                    itemData?.data?.[0]?.[element?.data_code]?.file_url
                    :
                    assignedVariables && item && assignedVariables?.[assignedVariable] ? `${item[assignedVariables?.[assignedVariable]]?.file_url}` 
                    : item?.[element?.data_code]?.file_url ? item?.[element?.data_code]?.file_url
                    : (element?.image_url || no_image)
                }
                className={element?.assign_classname || ''}
            />
            </Link>
            : 
            <img 
            style={{
                maxWidth: 'none',
                width:'100px',
                ...(selectedElement?.id == element?.id ? {
                    border: '2px solid red'
                } : {}),
                ...allStyle,
                ...(!isView &&
                (!allStyle?.padding ||
                allStyle?.padding.includes("0px") ||
                allStyle?.padding == "0" ||
                allStyle?.padding == "0px") ?
                {padding: "2px"}: {}),
                ...(element?.href ?  
                {cursor:'pointer'}
                : {})
            }}
                src={
                    custom_data && currentData[assignedVariable] ? `${custom_data && currentData[assignedVariable]}` :
                    !component?.related_variables?.find(i => i.variable_code == element?.data_code) && element?.data_code ? 
                    !isLoadingItemData && !itemData ? 
                    no_image
                    :
                    isLoadingItemData ? '' :
                    itemData?.data?.[0]?.[element?.data_code]?.file_url
                    :
                    assignedVariables && item && assignedVariables?.[assignedVariable] ? `${item[assignedVariables?.[assignedVariable]]?.file_url}` 
                    : (element?.image_url || no_image)
                }
                className={element?.assign_classname || ''}
            />
            }
        </S.Wrapper> : null
    )
}

export default ImageElement