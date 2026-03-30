import { Button, Form, Input, Switch } from "antd";
import { t } from "i18next";
import React, { useState } from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { useQuery } from "@tanstack/react-query";
import { getElementDisplayTypes, getElementIconTypes } from "../../apiCall/get";
import usePage from "../../contexts/usePage/usePage";
import { IconDes } from "../DescriptionProperties/DescriptionProperties";
import { isNumber } from "lodash";

const Display = ({element}) => {

    const {updatePageElement , getFieldCode , page , isTemplateEditor} = usePage()

    const {data: elemnetDisplayTypes , isFetching: isFetchingElemnetDisplayTypes} = useQuery({
        queryKey: ['elemnet_display_types'],
        queryFn: async () => {
            return await getElementDisplayTypes({fieldCode: getFieldCode('dropdown_display_types')})
        },
        staleTime: Infinity
    })

    const {data: elemnetIconTypes , isFetching: isFetchingElemnetIconTypes} = useQuery({
        queryKey: ['elemnet_icons_types'],
        queryFn: async () => {
            return await getElementIconTypes({fieldCode: getFieldCode('icon')})
        },
        staleTime: Infinity
    })

    const handleUpdateElementDisplay = (values) => {
        var newValue = {...values}
        
        Object.keys(newValue)?.map((key) => {
            newValue[getFieldCode(key)] = values[key] || ''
            if(isTemplateEditor){
                delete newValue[key]
            }
        })

        updatePageElement({element , dataObject: newValue})
    }

    return(
        <div style={{width:'550px'}}>
            <Form
            layout="vertical"
            style={{display:'flex' , gap:'20px' , flexWrap:'wrap'}}
            onFinish={handleUpdateElementDisplay}
            initialValues={{
                dropdown_display_types: element?.dropdown_display_types?.id || '',
                icon: element?.icon?.id,
                text: element?.text || '',
            }}
            >
                {element?.element_type?.code == getFieldCode('button') || element?.ele_mobile_type_code == 'mobile_button' ?
                    <Form.Item style={{margin:0}} label={IconDes} name={'icon'}>
                        <GlobalSelect
                        loading={isFetchingElemnetIconTypes}
                        style={{width:'250px'}}
                        options={elemnetIconTypes?.data?.field_options?.map((item , index) => {
                            return{
                                label: item?.text,
                                value: item?.id
                            }
                        }) || []}
                        />
                    </Form.Item>
                :
                <>
                <Form.Item style={{margin:0}} label={t('Drop Down Display Types')} name={'dropdown_display_types'}>
                    <GlobalSelect
                    loading={isFetchingElemnetDisplayTypes}
                    style={{width:'250px'}}
                    options={elemnetDisplayTypes?.data?.field_options?.map((item , index) => {
                        return{
                            label: item?.text,
                            value: item?.id
                        }
                    }) || []}
                    />
                </Form.Item>
                <Form.Item style={{margin:0}} label={t('Icon')} name={'icon'}>
                    <GlobalSelect
                    loading={isFetchingElemnetIconTypes}
                    style={{width:'250px'}}
                    options={elemnetIconTypes?.data?.field_options?.map((item , index) => {
                        return{
                            label: item?.text,
                            value: item?.id
                        }
                    }) || []}
                    />
                </Form.Item>
                <Form.Item style={{margin:0 , width:'250px'}} label={t('title')} name={'text'}>
                    <Input />
                </Form.Item>
                </>
                }

                <div style={{width:'100%'}}>
                    <Button htmlType="submit" type="primary">{t('submit')}</Button>
                </div>
            </Form>
        </div>
    )
}

export default Display