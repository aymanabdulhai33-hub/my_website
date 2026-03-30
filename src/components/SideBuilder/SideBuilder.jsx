import React, { useEffect, useState } from "react";
import { t } from "i18next";
import DragParent from "../DragParent/DragParent";
import { CodeSandboxOutlined , DownOutlined, GlobalOutlined, GroupOutlined, SmileOutlined, TableOutlined} from '@ant-design/icons'
import { types } from "../../utility/eleTypes";
import usePage from "../../contexts/usePage/usePage";
import LoadingSection from "../LoadingSection/LoadingSection";
import { Collapse, Dropdown, Empty, List, Space } from "antd";
import { useParams } from "react-router-dom";
import useBuilder from "../../contexts/useBuilder/useBuilder";
import RootElementSvg from "../PropertiesSvg/RootElementSvg";
import ComponentsSvg from "../PropertiesSvg/ComponentsSvg";
import TemplatesSvg from "../PropertiesSvg/TemplatesSvg";
import TemplatesCategorySelect from "../TemplatesCategorySelect/TemplatesCategorySelect";

const SideBuilder = () => {
    const {pageId} = useParams()
    const {templates} = useBuilder()
    const {isLayout , elemnetTypes , isFetchingElemnetTypes , page , customComponents , isMobilePage , isTemplateEditor} = usePage()
    
    var pageBodyAlreadyExist = isLayout ? page?.related_childrens?.find(i => i.element_type?.code == 'page_body') : false

    const templateItems = templates?.data?.data?.data ?? [];
    const [selectedCategory, setSelectedCategory] = useState(null);
    const filteredTemplates = selectedCategory
    ? templateItems?.filter(t => t?.category?.code === selectedCategory)
    : [];

    const items = [
        {
          key: '1',
          label: <div className="flex gap-2 text-sm" style={{color: 'var(--builder-fontDark)'}}>
            <RootElementSvg/>
          </div>,
          children: 
          <>
          {isFetchingElemnetTypes && !elemnetTypes?.data ? 
                <LoadingSection /> :
                elemnetTypes?.data ?
                <div style={{display:'flex' , justifyContent: 'center' , flexWrap:'wrap' , gap:'10px'}}>
                    {types.map((type , index) => {
                        if((!isLayout && type.type == 'page_body') || (pageBodyAlreadyExist && isLayout && type.type == 'page_body') || (type.type == 'item_details' && !isMobilePage)){
                            return
                        }
                        return(
                            <DragParent 
                                name={type.name} 
                                icon={type.icon} 
                                type={type.type} 
                                key={index}                         
                            />
                        )
                    })}
                </div> :
                <Empty />
            }
          </>,
        },
        ...(!isTemplateEditor ? [{
            key: '2',
            label: <div className="flex gap-2" style={{color: 'var(--builder-fontDark)'}}>
            <ComponentsSvg/>
          </div>,
            children: <>
            <div style={{display:'flex' , justifyContent: 'center' , flexWrap:'wrap' , gap:'10px'}}>
                {customComponents?.data?.data?.data.map((type , index) => {
                    return(
                        type?.id != pageId &&
                        <DragParent 
                            name={type.page_name} 
                            icon={<CodeSandboxOutlined />}
                            componnet={type}
                            type={type.content_type?.code}
                            key={index}                         
                        />
                    )
                })}
            </div>
            </>
        }] : []),
        ...(!isTemplateEditor ? [{
            key: '3',
            label: <div className="flex gap-2" style={{color: 'var(--builder-fontDark)'}}>
                <TemplatesSvg/>
            </div>,
            children: <>
            <div style={{display:'flex' , justifyContent: 'center' , flexWrap:'wrap' , gap:'10px'}}>
            <TemplatesCategorySelect 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}
                templateItems={templateItems}
            />
            {filteredTemplates?.map((type , index) => {
                return(
                    type?.id != pageId &&
                    <DragParent 
                        name={type.page_name} 
                        icon={<CodeSandboxOutlined />}
                        componnet={type}
                        type={type.content_type?.code}
                        key={index}              
                        isTemplate
                    />
                )
            })}
            </div>
            </>
        }] : [])
      ];
      
    return(
        <div className="col-span-2 h-[750px] global-scroll-y" style={{maxHeight: '100%'}}>
            <Collapse 
            expandIcon={({ isActive }) => <DownOutlined style={{position: 'absolute' , right:'20px' , top:'15px' , color: 'var(--builder-fontDark)'}} rotate={isActive ? 180 : 0} />}
            className="component-wrapper collapse-custom-style"
            items={items}
            defaultActiveKey={['1']}
            />
        </div>
    )
}

export default SideBuilder