import React from "react";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { Button, Dropdown } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import usePage from "../../../contexts/usePage/usePage";
import { DeleteOutlined, DollarOutlined, GlobalOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import useLang from "../../../contexts/useLanguage/useLang";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'
import useUser from "../../../contexts/useUser/useUser";
import { isInternalLink } from "../../../utility/globalFun";
import useTheme from "../../../contexts/useTheme/useTheme";

const DropdownElement = ({element , isLayoutEle , parent , drag}) => {
    const {isView , selectedElement , setSelectedElement , updatePageElement , getFieldCode} = usePage()
    const {visible} = useGetElementHideSize({element})
    const {lang , setLang} = useLang()
    const {user , setUser} = useUser()
    const {siteTheme} = useTheme()
    const navigate = useNavigate()
    const location = useLocation()
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

   const handleChangeInner = (e) => {
        var value = e.target.textContent
        if(!value || value == element?.[`text${lang != 'en' ? `_${lang}` : ''}`] || value == 'hi im Dropdown' || isView){
            return
        }
        updatePageElement({element: element , dataObject: {
            [`${getFieldCode('text')}${lang != 'en' ? `_${lang}` : ''}`]: value
        } })
    }

    const items = element?.items?.map((item , index) => {
        return{
            key: item?.id,
            onClick: () => {
                if(!item?.item_value && item?.item_code && element?.related_events?.find(i => i?.event_action?.code == 'change_language')){
                    setLang(item?.item_code)
                    window.localStorage.setItem('lang' , item?.item_code)
                }else if(item?.item_event?.code == 'logout_action'){
                    setUser(null)
                    window.localStorage.removeItem('user')
                    if(isView){
                        navigate('/')
                    }
                }
            },
            label: (
              <Link target={item?.item_value ? !isInternalLink(item?.item_value) ? '_blank' : '_self' : '_self'} to={`${isView && item?.item_value ? item?.item_value : `${location.pathname}${location.search}`}`}>
                <p style={{color: siteTheme.font_light}}>{`${lang != 'en' ? (item?.[`item_name_${lang}`] || item?.item_name) : item?.item_name}`}</p>
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
        visible && 
        <S.Wrapper 
        an={element?.animation_name}
        style={{
            position:'relative' , width:'max-content',
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
        ref={!isView ? drag : null}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color:'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>

            <Dropdown
                menu={{items}}
                arrow={true}
                overlayStyle={{
                    // top:'50px'
                }}
                className={element?.assign_classname || ''}
            >
                <a 
                style={{
                    ...(element?.dropdown_display_types?.code == getFieldCode('drop_button') ? {} : 
                    {...allStyle})
                }}
                onClick={(e) => e.preventDefault()}
                >
                    {element?.dropdown_display_types?.code == getFieldCode('drop_button') ? 
                    <Button
                    style={{
                        padding:'0px 10px',
                        ...allStyle
                    }}
                    icon={
                        element?.icon ? 
                        element?.icon?.code == getFieldCode('settings') ? 
                            <SettingOutlined />
                        : element?.icon?.code ==  getFieldCode('global') ? 
                            <GlobalOutlined />
                        : element?.icon?.code ==  getFieldCode('currency') ? 
                            <DollarOutlined />
                        : element?.icon?.code ==  getFieldCode('user') ? 
                            <UserOutlined />
                        : element?.icon?.code ==  getFieldCode('cart') ? 
                            <ShoppingCartOutlined />
                        : element?.icon?.code ==  getFieldCode('delete') ? 
                            <DeleteOutlined />
                            : null : null
                    }
                    >
                        {!element?.icon && element?.text}
                    </Button>
                    : (element?.dropdown_display_types?.code == getFieldCode('drop_text') || !element?.dropdown_display_types) ?
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

        </S.Wrapper>
    )
}

export default DropdownElement