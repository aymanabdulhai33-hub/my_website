import React from "react";
import {Input} from "antd";
import { t } from "i18next";
import usePage from "../../contexts/usePage/usePage";
import { LangAr, LangEn } from "../DescriptionProperties/DescriptionProperties";
import useLang from "../../contexts/useLanguage/useLang";

const DataTranslate = ({element , isDevComponent}) => {
    const {updatePageElement , getFieldCode , TextField , isTemplateEditor} = usePage()
    const {lang} = useLang()
    const handleUpdateTranslate = async (e , code) => {
        var value = e.target.value
        if(element?.[code] == value || (!element?.[code] && !value)){
            return
        }
        updatePageElement({element , dataObject: {
            [getFieldCode(code)]: value
        }})
    }

    return(
        <div style={{width:'550px'}}>
            <div>
                {isDevComponent ? 'Dev Component Name' : LangEn}
                {isDevComponent ? 
                <Input 
                onBlur={(e) => handleUpdateTranslate(e , 'text')}
                defaultValue={element?.text}
                />
                : 
                <Input.TextArea 
                onBlur={(e) => handleUpdateTranslate(e , 'text')}
                defaultValue={element?.text}
                />}
            </div>
            {!isDevComponent && TextField?.translated_fields?.map((field) => {
                return(
                    <div 
                    key={field?.id} 
                    style={{marginTop: '10px'}}
                    >
                        
                    <div style={{display:"flex",alignItems:"center",gap:"0px"}}>
                    <p>{t(field?.language == 6 ? 'ar' : field?.language == 122 ? 'tr' : 'en')}</p>
                    {LangAr}
                    </div>
                        <Input.TextArea
                        onBlur={(e) => handleUpdateTranslate(e , 'text_ar')}
                        defaultValue={element?.['text_ar']}
                        />
                    </div> 
                )
            })}
        </div>
    )
}

export default DataTranslate