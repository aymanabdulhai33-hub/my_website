import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import useLang from "../../../contexts/useLanguage/useLang";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'
import { getValueFromRelatedItemData } from "../../../utility/typeAndStructure";
import { isHtmlString } from "../../../utility/globalFun";

const TextEle = ({element , drag , parent , custom_data , component , isLayoutEle , item , assignedVariables}) => {

    const {updatePageElement , isView , setSelectedElement , selectedElement , getFieldCode , itemData , isLoadingItemData , page} = usePage()
    const {visible} = useGetElementHideSize({element})
    const {lang} = useLang()
    const handleChangeInner = (e) => {
        var value = e.target.textContent
        if(!value || value == element?.[`text${lang != 'en' ? `_${lang}` : ''}`] || value == 'hi im Text' || isView){
            return
        }
        updatePageElement({element: element , dataObject: {
            [`${getFieldCode('text')}${lang != 'en' ? `_${lang}` : ''}`]: value
        } })
    }


    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    var assignedVariable = item && assignedVariables ? 
    component?.related_variables?.find(i => i.variable_code == element?.data_code)?.id
    : custom_data ? component?.related_variables?.find(i => i.variable_code == element?.data_code)?.id : null

    var currentData = custom_data ? JSON.parse(custom_data) : null

    return(
        visible && 
        <S.Wrapper 
        an={element?.animation_name}
        style={{
            position:'relative' , 
            display:'inline-block',
            width:'fit-content',
            margin: allStyle.margin || "",
            marginTop: allStyle.marginTop || '',
            marginLeft: allStyle.marginLeft || '',
            marginBottom: allStyle.marginBottom || '',
            marginRight: allStyle.marginRight || '',
            ...(allStyle.width ? {
                width:allStyle.width
            } : {}),
        }}
        ref={!isView ? drag : null}
        >
            {!isView &&
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color:'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>}
            <p
            id={`text-${element?.id}`}
            style={{
                outline:'nine',
                // display:'inline',
                width:'fit-content',
                ...allStyle,
                ...(selectedElement?.id == element?.id ? {
                    border: '2px solid red'
                } : {}),
                margin: 0,
            }}
            className={`${element?.assign_classname || ''}${component ? ' dynamic-paragraph-clamp' : ''}`}
            suppressContentEditableWarning={true}  
            // onBlur={(e) => handleChangeInner(e)}
            // contentEditable={!isView && !isLayoutEle && !element?.data_code && true}
            onClick={(e)=>{
                if(!isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
            }}
            >
                {custom_data && currentData[assignedVariable] ? 
                `${currentData[assignedVariable] || ''}`
                : 
                !component?.related_variables?.find(i => i.variable_code == element?.data_code) && element?.data_code && page?.content_type?.code !== 'custom_dynamic_component' ? 
                isLoadingItemData ? '' :
                (itemData?.data?.[0]?.[element?.data_code] ? typeof itemData?.data?.[0]?.[element?.data_code] == 'object' ? getValueFromRelatedItemData(itemData?.data?.[0]?.[element?.data_code]) : itemData?.data?.[0]?.[element?.data_code] : '')
                :
                assignedVariables && item && assignedVariables?.[assignedVariable] ?
                 `${item[assignedVariables?.[assignedVariable]] ? typeof item[assignedVariables?.[assignedVariable]] == 'object' ? getValueFromRelatedItemData(item[assignedVariables?.[assignedVariable]]) : item[assignedVariables?.[assignedVariable]]  : ''}`
                : item?.[element?.data_code] ? typeof item?.[element?.data_code] == 'object' ? getValueFromRelatedItemData(item?.[element?.data_code]) : `${item?.[element?.data_code]}`
                : (lang == 'en' ? (element?.text ? ( isHtmlString(element?.text) ?  <span dangerouslySetInnerHTML={{ __html: element?.text }} /> : element?.text) : 'hi im Text') 
                : ( element?.[`text_${lang}`] ? ( isHtmlString(element?.[`text_${lang}`]) ? <span dangerouslySetInnerHTML={{ __html: element?.[`text_${lang}`] }} /> : element?.[`text_${lang}`] ) 
                : (isHtmlString(element?.text) ? <span dangerouslySetInnerHTML={{ __html: element?.text }} /> : element?.text || 'hi im Text') ) )}
            </p>
        </S.Wrapper>
    )
}

export default TextEle