import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import ElementSettingsWrapper from "../../ElementTypes/ElementSettingsWrapper/ElementSettingsWrapper";
import { setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
import useLang from "../../../contexts/useLanguage/useLang";

const MobileText = ({element , parent , isLayoutEle}) => {
    const {setSelectedElement , selectedElement , updatePageElement , isView} = usePage()
    const {lang} = useLang()
    const handleChangeInner = (e) => {
        var value = e.target.textContent
        if(!value || value == element.text){
            return
        }
        updatePageElement({element: element , dataObject: {text: value} })
    }

    return(
        <div style={{
            display:'flex',
            ...setUpDefaultMobileBuilderStyle(element , selectedElement)
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

            <p
            suppressContentEditableWarning={true}  
            onBlur={(e) => handleChangeInner(e)}
            contentEditable={!isView && !isLayoutEle && true} 
            >
               {lang == 'en' ? (element.text || 'hi im Text') : (element?.[`text_${lang}`] || element?.text || 'hi im Text')}
            </p>
        </div>
    )
}

export default MobileText