import React from "react";
import ElementSettingsWrapper from "../../ElementTypes/ElementSettingsWrapper/ElementSettingsWrapper";
import usePage from "../../../contexts/usePage/usePage";
import { setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
import useLang from "../../../contexts/useLanguage/useLang";
import useTheme from "../../../contexts/useTheme/useTheme";
import { useNavigate } from "react-router-dom";

const MobileButton = ({parent , element , isLayoutEle}) => {

    const {selectedElement , setSelectedElement , isView , itemData , itemModelId} = usePage()
    const {siteTheme} = useTheme()
    const {lang} = useLang()
    const navigate = useNavigate()
    var ButtonDefaultStyle = {
        backgroundColor: siteTheme?.button_bg_color,
        color: siteTheme?.button_color,
        borderRadius: siteTheme?.button_border_radius
    }
    const ButtonProp = {...ButtonDefaultStyle}
    if(setUpDefaultMobileBuilderStyle(element , selectedElement)?.backgroundColor){
        ButtonProp.backgroundColor = setUpDefaultMobileBuilderStyle(element , selectedElement)?.backgroundColor
    }
    if(setUpDefaultMobileBuilderStyle(element , selectedElement)?.color){
        ButtonProp.color = setUpDefaultMobileBuilderStyle(element , selectedElement)?.color
    }


    const handleClick = () => {
        var isToDetailsPageAction = element?.related_events?.find(i => i?.event_action?.code == 'to_details')
        
        if(isToDetailsPageAction){
            var item = itemData?.data?.[0]
            if(item){
                navigate(`/admin/page-editor/${isToDetailsPageAction?.to_page?.id}?item_id=${item?.id || item?.item_id}&model_id=${itemModelId}`)
            }
        }
    }

    var ParentProp = {}
    ParentProp = {...setUpDefaultMobileBuilderStyle(element , selectedElement)}
    delete ParentProp.backgroundColor



    return(
        <div style={{
            display:'flex',
            ...ParentProp,
        }}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color:'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} />
            </div>
            <button 
            onClick={handleClick}
            style={{
                // border:'1px solid black', 
                minWidth:'200px',
                height:'32px',
                ...ButtonProp
                }}>
                {lang == 'en' ? (element.text || 'hi im Button') : (element?.[`text_${lang}`] || element?.text || 'hi im Button')}
            </button>
        </div>
    )
}

export default MobileButton