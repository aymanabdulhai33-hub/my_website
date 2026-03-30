import { DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input,Popover } from "antd";
import { t } from "i18next";
import React from "react";
import usePage from "../../contexts/usePage/usePage";
import useTheme from "../../contexts/useTheme/useTheme";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import {getItemEventTypes } from "../../apiCall/get";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const OptionsItems = ({element}) => {
    const {addElementItems , deleteItemById , getFieldCode , isTemplateEditor , isView} = usePage()
    const [form] = Form.useForm()
    const {themeColor} = useTheme()

    const {data: itemEventTypes , isFetching: isFetchingItemEventTypes} = useQuery({
        queryKey: ['item_event'],
        queryFn: async () => {
            return await getItemEventTypes()
        },
        enabled: !isView ? true : false,
        staleTime: Infinity,
        placeholderData: keepPreviousData
    })

    const handleAddElementItem = async (values , id) => {
        var sendData = {...values}
        sendData.related_parent = element?.id
        Object.keys(sendData)?.map((key) => {
            sendData[getFieldCode(key)] = sendData[key]
            if(isTemplateEditor){
                delete sendData[key]
            }
        })
        addElementItems(sendData , id , element)
        form.resetFields()
    }

    const deleteItem = async (item) => {
        deleteItemById(item , element)
        // modal.confirm({
        //     icon: <DeleteOutlined style={{color: themeColor?.red}}/>,
        //     maskClosable: true,
        //     type: 'error',
        //     title: (<>{t('are you sure you want to delete this item')}: {item?.item_name}</>),
        //     onOk: async () => {
                
        //     }
        // })
    }

    var eventTypes = itemEventTypes?.data?.field_options

    return(
        <div style={{width:'550px'}}>
            <p>{t('dropdown items')}</p>
            <Form
            form={form}
            layout="vertical"
            onFinish={handleAddElementItem}
            style={{display:'flex' , gap:'10px' , flexWrap:'wrap'}}
            >
                <Form.Item style={{margin:0}} label={t('name')} name={'item_name'} rules={[{required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item style={{margin:0}} label={`${t('name')} AR`} name={'item_name_ar'}>
                    <Input />
                </Form.Item>
                <Form.Item style={{margin:0}} label={t('path')} name={'item_value'}>
                    <Input placeholder="/path"/>
                </Form.Item>
                <Form.Item style={{margin:0}} label={t('code')} name={'item_code'}>
                    <Input />
                </Form.Item>
                <Form.Item style={{margin:0}} label={t('action')} name={'item_event'}>
                    <GlobalSelect
                    loading={isFetchingItemEventTypes}
                    style={{width:'182px'}}
                    options={eventTypes?.map((item) => {
                        return{
                            label: item?.text,
                            value: item?.id
                        }
                    }) || []} />
                </Form.Item>
                <div className="w-full">
                    <Button htmlType="submit" type="primary">{t('submit')}</Button>
                </div>
            </Form>
            <div style={{maxHeight:'300px'}} className="global-scroll-y">
                {element?.items?.map((item) => {
                    return(
                    <React.Fragment key={item.id}>
                        <hr style={{margin:'10px 0px'}}/>
                        <Form
                        layout="vertical"
                        onFinish={(values) => handleAddElementItem(values , item?.id)}
                        style={{display:'flex' , gap:'10px' , flexWrap:'wrap'}}
                        initialValues={{
                            item_name: item?.[getFieldCode('item_name')],
                            item_name: item?.[getFieldCode('item_name_ar')],
                            item_value: item?.[getFieldCode('item_value')],
                            item_code: item?.[getFieldCode('item_code')],
                            item_event: item?.item_event?.id || null
                        }}
                        >
                            <Form.Item style={{margin:0}} label={t('name')} name={'item_name'} rules={[{required: true}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item style={{margin:0}} label={`${t('name')} AR`} name={'item_name_ar'}>
                                <Input />
                            </Form.Item>
                            <Form.Item style={{margin:0}} label={t('code')} name={'item_code'}>
                                <Input />
                            </Form.Item>
                            <div style={{display:'flex' , gap:'10px' , alignItems:'center'}} >
                                <Form.Item style={{margin:0}} label={t('path')} name={'item_value'}>
                                    <Input placeholder="/path"/>
                                </Form.Item>
                                <Form.Item style={{margin:0}} label={t('action')} name={'item_event'}>
                                    <GlobalSelect
                                    loading={isFetchingItemEventTypes}
                                    style={{width:'182px'}}
                                    options={eventTypes?.map((item) => {
                                        return{
                                            label: item?.text,
                                            value: item?.id
                                        }
                                    }) || []} />
                                </Form.Item>
                                <Popover 
                                trigger={'click'}
                                title={t('are you sure you want to delete this item')}
                                content={
                                <div>
                                    <Button onClick={() => deleteItem(item)} style={{background: themeColor?.red}}>{t('delete')}</Button>
                                </div>
                                }
                                >
                                    <DeleteOutlined style={{marginTop:'auto', marginBottom:'8px' , color: themeColor?.red , fontSize:'20px'}}/>
                                </Popover>
                            </div>
                            <div className="w-full">
                                <Button htmlType="submit" type="primary">{t('save')}</Button>
                            </div>
                        </Form>
                    </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default OptionsItems