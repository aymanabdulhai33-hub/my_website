import { t } from "i18next";
import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import PageBody from "../../PageBody/PageBody";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { Watermark } from "antd";

const PageBodyEle = ({element , isLayoutEle , parent}) => {
    const {isLayout , isView , selectedElement , setSelectedElement} = usePage()

    
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    return(
        !isLayout ? 
        <div 
        style={{ 
            position:'relative',
            zIndex:"0",
            display:'flex',
            flexDirection:'column',
            width:'100%',
            minHeight: element?.properties?.find(i => i?.property_name == 'minHeight')?.value,
            ...allStyle,
            overflow: 'unset',
            ...(isView ? {
                overflow: allStyle?.overflow || 'unset',
            } : {}),
            ...(!isView ? {
                padding: 0
            } : {}),
        }}
        >
            
            <PageBody pageContent/>
        </div>
        : <div style={{ 
            position:'relative' ,
            padding:'20px' , 
            ...(!isView ? {
                border: '1px solid black'
            } : {}),
            ...(selectedElement?.id == element?.id ? {
                border: '2px solid red'
            } : {}),
            minHeight: '800px',
            ...allStyle,
            overflow: 'unset',
            ...(isView ? {
                overflow: allStyle?.overflow || 'unset'
            } : {}),
            }}
            onClick={(e)=>{
                if(!isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
            }}
            >


            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            {t('page body will render here')}
        </div>
    )
}

export default PageBodyEle