import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import { types } from "../../../utility/eleTypes";
import { Link, useLocation } from "react-router-dom";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import useLang from "../../../contexts/useLanguage/useLang";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'

const LinkEle = ({element , drag , parent , isLayoutEle}) => {

    const {updatePageElement , isView , setSelectedElement , selectedElement , getFieldCode} = usePage()
    const {lang} = useLang()
    const location = useLocation()
    const {visible} = useGetElementHideSize({element})
    const handleChangeInner = (e) => {
        var value = e.target.textContent
        if(!value || value == element?.[`text${lang != 'en' ? `_${lang}` : ''}`] || value == 'hi im Link' || isView){
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

    
    return(
        visible && 
        <S.Wrapper 
        an={element?.animation_name}
        ref={!isView ? drag : null}
        style={{
            position:'relative' , 
            width:'fit-content',
            }}>
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            <Link
            target={element?.is_blank ? '_blank' : '' } 
            to={isView ? (element?.href ? element?.href : element?.link_to_page?.path ? `/${element?.link_to_page?.path}` : element?.link_to_page?.is_home_page ? '/' : '') : `${location.pathname}${location.search}`}
            style={{
                ...allStyle,
                ...(selectedElement?.id == element?.id ? {
                    border: '2px solid red'
                } : {}),
            }}
            onClick={(e)=>{
                if(!isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
            }}
            suppressContentEditableWarning={true}  
            onBlur={(e) => handleChangeInner(e)}
            contentEditable={!isView && !isLayoutEle && true}
            className={element?.assign_classname || ''}
            >
                {lang == 'en' ? (element.text || 'hi im Link') : (element?.[`text_${lang}`] || element?.text || 'hi im Link')}
            </Link>
        </S.Wrapper>
    )
}

export default LinkEle