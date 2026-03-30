import React from "react";
import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import usePage from "../../../contexts/usePage/usePage";
import { DeleteOutlined, DollarOutlined, GlobalOutlined, MenuOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import ElementSettingsWrapper from "../../ElementTypes/ElementSettingsWrapper/ElementSettingsWrapper";
import { setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
import useLang from "../../../contexts/useLanguage/useLang";

const MobileDropdown = ({element , isLayoutEle , parent}) => {
    const {isView , selectedElement , setSelectedElement , updatePageElement} = usePage()
    const {lang} = useLang()
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    const handleChangeInner = (e) => {
        var value = e.target.textContent
        if(!value || value == element.text){
            return
        }
        updatePageElement({element: element , dataObject: {text: value} })
    }

    const items = element?.items?.map((item , index) => {
        return{
            key: item?.id,
            label: (
              <Link to={isView && item?.item_value ? item?.item_value : ''}>
                {item?.item_name}
              </Link>
            ),
        }
    }) || [
        {
            key: '1',
            label: (
              <Link to={isView ? 'about' : ''}>
                about
              </Link>
            ),
        },
    ]

    return(
        <div
        style={{
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
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>

            <Dropdown
                menu={{items}}
                arrow={true}
            >
                <a 
                style={{
                    ...allStyle
                }}
                onClick={(e) => e.preventDefault()}>
                    {element?.dropdown_display_types?.code == 'drop_button' ? 
                    <Button
                    style={{
                        padding:'0px 10px',
                    }}
                    icon={
                        element?.icon ? 
                        element?.icon?.code == 'settings' ? 
                            <SettingOutlined />
                        : element?.icon?.code == 'global' ? 
                            <GlobalOutlined />
                        : element?.icon?.code == 'currency' ? 
                            <DollarOutlined />
                        : element?.icon?.code == 'menu' ? 
                            <MenuOutlined />
                        : element?.icon?.code ==  'user' ? 
                            <UserOutlined />
                        : element?.icon?.code ==  'cart' ? 
                            <ShoppingCartOutlined />
                        : element?.icon?.code ==  'delete' ? 
                            <DeleteOutlined />
                        : null : null
                    }
                    >
                        {!element?.icon && (element?.text || 'hi im Dropdown')}
                    </Button>
                    : (element?.dropdown_display_types?.code == 'text' || !element?.dropdown_display_types) ?
                    <p
                    style={{
                        cursor:"pointer",
                    }}
                    suppressContentEditableWarning={true}  
                    onBlur={(e) => handleChangeInner(e)}
                    contentEditable={!isView && !isLayoutEle && true}
                    >
                        {lang == 'en' ? (element.text || 'hi im Dropdown') : (element?.[`text_${lang}`] || element?.text || 'hi im Dropdown')}
                    </p> : <></>}
                </a>
            </Dropdown>

        </div>
    )
}

export default MobileDropdown