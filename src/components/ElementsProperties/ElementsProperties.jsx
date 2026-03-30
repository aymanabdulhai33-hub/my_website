import React, { useState } from "react";
import usePage from "../../contexts/usePage/usePage";
import { types } from "../../utility/eleTypes";
import { Collapse, Input, Tabs , ColorPicker} from 'antd'
import { t } from "i18next";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import SideBuilder from "../SideBuilder/SideBuilder";
import useLang from "../../contexts/useLanguage/useLang";
import VariablesForm from "./VariablesForm";
import SiteSettings from "./SiteSettings";
import { getFieldByTemplateCode } from "../../utility/fieldsConfig";
import Variables from "./Variables";
import ElementProperties from "./ElementProperties";

const ElementsProperties = () => {
    const { selectedElement , isMobilePage , isTemplateEditor } = usePage()
    const {lang} = useLang()
    var properties = []
   
    types?.map((tool)=>{
        if(tool?.type == (isTemplateEditor ? getFieldByTemplateCode(selectedElement?.element_type?.code) : selectedElement?.element_type?.code)){
            properties = tool?.properties
        }
    })

    const items = [
        {
            key:'3',
            label: <h3 style={{fontWeight: 'bold',fontSize:"16px"}}>{t('components')}</h3>,
            children: <SideBuilder />
        },
        {
            key: '1',
            label: <h3 style={{fontWeight: 'bold',fontSize:"16px"}}>{t('properties')}</h3>,
            children: <ElementProperties selectedElement={selectedElement} properties={properties} />,
        },
        ...(!isMobilePage && !isTemplateEditor ? 
            [{
                key: '2',
                label: <h3 style={{fontWeight: 'bold',fontSize:"16px"}}>{t('variables')}</h3>,
                children: <Variables />,
            }]
        : []),
        ...(!isTemplateEditor ? 
            [{
                key: '4',
            label: <h3 style={{fontWeight: 'bold',fontSize:"16px"}}>{t('site settings')}</h3>,
            children: <SiteSettings />,
            }]
        : [])
    ]

    return(
        <div 
        style={{
        minWidth:'300px',
        width:'300px',
        position:'relative',
        padding:'4px'
        }}>
            <div
            style={{
                top:0,
                position:'sticky',
            }}
            >
                <Tabs
                    direction={lang == 'ar' ? "rtl" : 'ltr' }
                    defaultActiveKey="3"
                    items={items}
                />
            </div>
        </div>
        
    )
}

export default ElementsProperties


