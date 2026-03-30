import React, { useState } from "react";
import usePage from "../../contexts/usePage/usePage";
import { Collapse, Input,ColorPicker, Tag, Form, Button} from 'antd'
import { t } from "i18next";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import * as S from './styled'
import { DownOutlined } from "@ant-design/icons";
import { getDevMode } from "../../utility/globalFun";

const ElementProperties = ({selectedElement , properties}) => {
    
    const {updatePageElement , isMobilePage} = usePage()
    const handleAssignClassname = (values) => {
        updatePageElement({ element: selectedElement , dataObject: values })
    }

    return(
        <div key={selectedElement?.id}>
            {selectedElement &&
            <Tag style={{padding:"4px",marginBottom:"6px"}} color="var(--builder-main)">
                <p style={{fontWeight:"bold",fontSize:"16px"}}>{selectedElement?.element_type?.text} : {selectedElement?.id}</p>
            </Tag>
            }
            {selectedElement && getDevMode() == 1 && 
                <div>
                <Form
                onFinish={handleAssignClassname}
                initialValues={{
                    assign_classname: selectedElement?.assign_classname,
                }}
                layout="vertical"
                >
                        <Form.Item style={{marginBottom:'10px'}} label={t(`assign class name`)} name={'assign_classname'}>
                            <Input />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">{t('assign')}</Button>
                </Form>
                </div>
            }
            {selectedElement && 
                <div className="flex flex-col gap-2 h-[800px] overflow-auto">
                    {properties && 
                    <div className="flex flex-col gap-2 h-[700px] global-scroll-y">
                        <Collapse
                        expandIcon={({ isActive }) => <DownOutlined style={{position: 'absolute' , right:'20px' , top:'15px' , color: 'var(--builder-fontDark)'}} rotate={isActive ? 180 : 0} />}
                        className="collapse-custom-style"
                        items={
                            properties?.filter(i => isMobilePage ? !i?.noMobile : i)?.map((prop , index) => {
                                return {
                                    key: index + 1,
                                    label: prop?.name,
                                    children: <PropertySection prop={prop} key={index + 1} />,
                                  }
                            }) || []
                        }
                        defaultActiveKey={['1']} 
                        />
                    </div>
                    }
                </div>
            }
        </div>
    )
}

export default ElementProperties

export const PropertySection = ({prop}) => {
    const {selectedElement , setSelectedElement , updateElemntById , setPage , updateElementPropertyById , isMobilePage} = usePage()
    var ElePropertiesValues = selectedElement?.properties

    const loopinDeep = ({array , value , property}) => {
        var newArray = [...array]
        newArray?.map((ch) => {
            if(ch?.id == selectedElement?.id){
                if(ch.properties?.find(i => i.property_name == property?.name)){
                    var indeOf = ch.properties?.findIndex(i => i.property_name == property?.name)
                    if(value != ch.properties[indeOf]?.value){
                        ch.properties[indeOf] = {...ch.properties[indeOf] , value}
                        setSelectedElement(ch)
                        updateElementPropertyById({element: selectedElement , value , property: ch.properties[indeOf] })
                    }
                }else{
                    if(value || value == '0'){
                        var newProperty = {...property}
                        newProperty.property_name = newProperty.name
                        delete newProperty.name
                        ch.properties.push({...newProperty , value : value || ''})
                        
                        setSelectedElement(ch)
                        updateElementPropertyById({element: selectedElement , value , property: property })
                    }
                }
            }

            if(ch?.related_childrens && ch?.related_childrens?.length > 0){
                return loopinDeep({array: ch?.related_childrens , value , property})
            }

            return ch
        })
        return newArray
    }

    const handleUpdateProperty = (prop , value , child) => {
        // console.log(prop , value , child)
        setPage((prev) => {
            var newData = {...prev}
            newData.related_childrens = loopinDeep({array: newData?.related_childrens , value , property: child || prop})
            return newData
        })
    }

    const getElePropValue = ({propObj}) => {
        var value
        ElePropertiesValues?.map((prop) => {
            if(prop.property_name == (propObj.name || propObj.label)){
                value = prop.value
            }
        })
        return value || ''
    }
    // propObj.value_type == "Color_Picker" && !propObj.value ? '#FFFFFF'

    return(
        prop?.value_type == "rel" ?
        <S.ElementPropertiesWrapper style={{display:'flex' , flexDirection:'column' , gap:'10px'}}>
            {prop?.children?.filter(i => isMobilePage ? !i?.noMobile : i)?.map((child , index)=>{
                return(
                    <div key={index}>
                        <div>{child?.label || child?.name}</div>
                        {child?.value_type == 'List_Option' ? 
                        <GlobalSelect
                        className={'builder-theme'}
                        defaultValue={getElePropValue({propObj: child })}
                        onChange={(e) => handleUpdateProperty(prop , e || '' , child)}
                        options={child?.options?.map((op) => {
                            return{
                                label: op?.name,
                                value: op?.value
                            }
                        }) || []}
                        />
                        : child?.value_type == 'List_Option_And_String' ?
                        <List_Option_And_String 
                        getElePropValue={getElePropValue}
                        handleUpdateProperty={handleUpdateProperty}
                        child={child}
                        prop={prop}
                        />
                        : child?.value_type == 'List_Option_And_Color_Picker' ?
                        <List_Option_And_Color_Picker
                        getElePropValue={getElePropValue}
                        handleUpdateProperty={handleUpdateProperty}
                        child={child}
                        prop={prop}
                        />
                        : child?.value_type == 'Color_Picker' ?
                        <div style={{display:"flex", gap:"5px",alignItems:"center"}}>
                        <ColorPicker 
                           defaultValue={getElePropValue({propObj: child})?getElePropValue({propObj: child}):'#FFFFFF'}
                           format={'hex'} 
                           onChangeComplete={(e) => handleUpdateProperty(prop , e.toHexString() , child)}
                           allowClear
                        />
                        <p>{getElePropValue({propObj: child})?getElePropValue({propObj: child}):'#FFFFFF'}</p>
                        </div>
                        :
                        <Input 
                        style={{border:'1px solid #CED3E2' , borderRadius:"8px"}}
                        placeholder={child?.placeholder || ""}  
                        onBlur={(e) => handleUpdateProperty(prop , e.target.value , child)}
                        defaultValue={getElePropValue({propObj: child})}
                        />
                        }
                    </div>
                )
            })}
        </S.ElementPropertiesWrapper>
        :
        <S.ElementPropertiesWrapper className="flex flex-col gap-1">
            <p>{prop?.name}</p>
            {prop?.value_type == 'List_Option' ? 
                <GlobalSelect
                className={'builder-theme'}
                defaultValue={getElePropValue({propObj: prop })}
                onChange={(e) => handleUpdateProperty(prop , e || '' , prop)}
                options={prop?.options?.map((op) => {
                    return{
                        label: op?.name,
                        value: op?.value
                    }
                }) || []}
                />
                : prop?.value_type == 'List_Option_And_String' ?
                <List_Option_And_String 
                getElePropValue={getElePropValue}
                handleUpdateProperty={handleUpdateProperty}
                child={prop}
                prop={prop}
                />
                : prop?.value_type == 'Color_Picker' ?
                <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
                <ColorPicker 
                    defaultValue={getElePropValue({propObj: prop}) ? getElePropValue({propObj: prop}):'#FFFFFF'}
                    format={'hex'} 
                    onChangeComplete={(e) => handleUpdateProperty(prop , e.toHexString())}
                    allowClear
                />
                <p>{getElePropValue({propObj: child})?getElePropValue({propObj: child}):'#FFFFFF'}</p>
                </div>
                : 
                prop?.value_type == 'List_Option_And_Color_Picker' ?
                <List_Option_And_Color_Picker
                getElePropValue={getElePropValue}
                handleUpdateProperty={handleUpdateProperty}
                child={prop}
                prop={prop}
                />
                :
                <Input 
                style={{border:'1px solid #CED3E2' , borderRadius:"8px"}}
                placeholder={prop?.placeholder || ""} 
                onBlur={(e) => handleUpdateProperty(prop , e.target.value)} 
                defaultValue={getElePropValue({propObj: prop})}
                />    
            }
        </S.ElementPropertiesWrapper>
    )

}

const List_Option_And_String = ({child , handleUpdateProperty , getElePropValue , prop}) => {
    const getisSelectValue = () => {
        var defaultValue = child?.options?.find(i => i.value == getElePropValue({propObj: child }))?.value || ''
        return defaultValue
    }

    const [values , setValues] = useState({selectValue: getisSelectValue() ? getisSelectValue() : '' , stringValue: getisSelectValue() ? '' : getElePropValue({propObj: child })})

    const handleChange = (e , type) => {
        setValues((prev) => {
            var newObj = {...prev}
            if(type == 'select'){
                newObj.selectValue = e
                newObj.stringValue = ''
            }else{
                newObj.selectValue = ''
                newObj.stringValue = e
            }
            return newObj
        })
        if(type == 'select'){
           handleUpdateProperty(prop , e || '' , child)
        }
    }
    
    const handleonBlur = async (e) => {
        var value = e.target.value
        if(getisSelectValue() && !value){
            return
        }
         handleUpdateProperty(prop , value , child)
    }

    return(
    <div style={{display:'flex' , gap:'5px'}}>
        <GlobalSelect
            className={'builder-theme'}
            value={values.selectValue}
            onChange={(e) => handleChange(e , 'select')}
            options={child?.options?.map((op) => {
                return{
                    label: op?.name,
                    value: op?.value
                }
            }) || []}
        />
        <Input 
        style={{border:'1px solid #CED3E2' , borderRadius:"8px"}}
        placeholder={child?.placeholder || ""}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleonBlur}
        value={values.stringValue}
        />
    </div>
    )
}


const List_Option_And_Color_Picker = ({child , handleUpdateProperty , getElePropValue , prop}) => {
    const getisSelectValue = () => {
        var defaultValue = child?.options?.find(i => i.value == getElePropValue({propObj: child }))?.value || ''
        return defaultValue
    }

    const [values , setValues] = useState({selectValue: getisSelectValue() ? getisSelectValue() : '' , stringValue: getisSelectValue() ? '' : getElePropValue({propObj: child })})

    const handleChange = (e , type) => {
        setValues((prev) => {
            var newObj = {...prev}
            if(type == 'select'){
                newObj.selectValue = e
                newObj.stringValue = ''
            }else{
                newObj.selectValue = ''
                newObj.stringValue = e
            }
            return newObj
        })
        if(type == 'select'){
           handleUpdateProperty(prop , e || '' , child)
        }
    }
    
    const onChangeComplete = async (e) => {
        var value = e
        if(getisSelectValue() && !value){
            return
        }

        handleUpdateProperty(prop , value , child)
    }

    const onClear = async () => {
        if(!values.stringValue){
            return
        }

        setValues((prev) => {
            var newObj = {...prev}
            newObj.selectValue = ''
            newObj.stringValue = ''
            return newObj
        })

        handleUpdateProperty(prop , '' , child)
    }

    return(
    <div style={{display:'flex' , gap:'5px'}}>
        <GlobalSelect
            className={'builder-theme'}
            value={values.selectValue}
            onChange={(e) => handleChange(e , 'select')}
            options={child?.options?.map((op) => {
                return{
                    label: op?.name,
                    value: op?.value
                }
            }) || []}
        />
        <ColorPicker 
            value={values.stringValue}
            format={'hex'} 
            onChangeComplete={(e) => !e.cleared && onChangeComplete(e.toHexString())}
            allowClear
            onChange={(e) => handleChange(e.toHexString())}
            onClear={onClear}
            disabledAlpha
        />
    </div>
    )
}