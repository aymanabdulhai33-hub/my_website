import { Button, Form, Input, Radio, Tooltip } from "antd";
import React, { useState } from "react";
import usePage from "../../contexts/usePage/usePage";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { t } from "i18next";
import { ReadDataDisplay, ReadFromDataModel, VariableName } from "../DescriptionProperties/DescriptionProperties";
import useBuilder from "../../contexts/useBuilder/useBuilder";
import { getLocalStorageData } from "../../utility/globalFun";
import { useQueryClient } from "@tanstack/react-query";

const BoxContainerDataConfig  = ({models , isFetchingModels , element}) => {

    const {isMobilePage , customComponents , isFetchingCustomComponents , updatePageElement , pageId} = usePage()
    const {dataDisplayTypes} = useBuilder()
    const [isLocalData , setIsLocalData] = useState(element?.local_storage_code ? true : false)
    const [lod , setLod] = useState(false)
    const queryClient = useQueryClient()

    const handleApplyData = async (values) => {
        setLod(true)
        var sendData = {...values}
        if(sendData.data_display_type && components?.find(i => i.value == sendData.data_display_type)){
            sendData.data_display_component = parseInt(sendData.data_display_type)
            sendData.data_display_type = dataDisplayTypes?.data?.field_options?.find(i => i?.code == 'custom_component')?.id
            sendData.assigned_fields = sendData?.assigned_fields ? JSON.stringify(sendData?.assigned_fields) : ''
            sendData.displayed_fields = ''
        }else{
            sendData.displayed_fields = sendData.displayed_fields  ? sendData.displayed_fields.join(',') : ''
            sendData.assigned_fields = ''
        }
        await updatePageElement({element , dataObject: sendData})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        setLod(false)
    }


    var mobileDataDisplayTypes = ['mobile_grid_list_items' , 'mobile_slider']
    var components = customComponents.data.data?.data.map((component) => {
        return {label: component?.page_name , value: `${component?.id}` , type: component?.content_type?.code}
    })

    var localSorageFields = getLocalStorageData(element?.local_storage_code)
    var assignedVariables = element?.assigned_fields ? JSON.parse(element?.assigned_fields) : {}

    return(
        <Form
        onFinish={handleApplyData}
        initialValues={{
            data_source_model: element?.data_source_model ? `${element?.data_source_model}` : '',
            data_display_type: element?.data_display_type?.id ? element?.data_display_type?.id == '34' ? element?.data_display_component?.id : element?.data_display_type?.id : '',
            displayed_fields: element?.displayed_fields ? Array.from(element?.displayed_fields?.split(','), String) : [],
            image_field: element?.image_field ? `${element?.image_field}` : '',
            local_storage_code: element?.local_storage_code,
            assigned_fields: assignedVariables,
        }}
        layout="vertical"
        style={{display:'flex' , flexWrap:'wrap' , rowGap:"20px", columnGap:'20px'}}

        >
            {!isMobilePage && <div style={{width:'100%'}}>
                <Radio.Group onChange={e => setIsLocalData(e.target.value)} value={isLocalData}>
                    <Radio value={false}>{t('model data')}</Radio>
                    <Radio value={true}>{t('local storage data')}</Radio>
                </Radio.Group>
            </div>}


            {isLocalData ?
            <Form.Item rules={[{required: true}]} style={{margin:0}} name={'local_storage_code'} 
                label={t('local storage key')}>
                    <Input 
                    style={{width: 250}}
                    />
            </Form.Item> 
            :
            <Form.Item rules={[{required: true}]} style={{margin:0}} name={'data_source_model'} 
                    label={ReadFromDataModel}>
                    <GlobalSelect 
                    loading={isFetchingModels}
                    style={{width: 250}}
                    options={
                        models?.data?.filter(i => i.action != 1)?.map((model) => {
                            return{
                                label: `${model?.name}`,
                                value: `${model?.id}`
                            }
                        }) || []
                    }
                    />
            </Form.Item>
            }

            <Form.Item style={{margin:0}} name={'data_display_type'}
                label={ReadDataDisplay}>
                <GlobalSelect
                    loading={isFetchingCustomComponents}
                    style={{width: 250}}
                    options={
                        [...dataDisplayTypes?.data?.field_options?.filter(i => i?.code != 'custom_component' && (element?.element_type?.code != 'banner_slider' && element?.element_type?.code != 'auto_slider') && (isMobilePage ? mobileDataDisplayTypes.includes(i?.code) : !mobileDataDisplayTypes.includes(i?.code)) )?.map((option) => {
                            return{
                                label: option?.text,
                                value: option?.id
                            }
                        }), ...(components ? [...components] : []),] || [...(components ? [...components] : [])]
                        }
                />
            </Form.Item>

            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.data_source_model != current?.data_source_model || prev?.displayed_fields != current?.displayed_fields || prev?.data_display_type != current?.data_display_type}
            >
                {({getFieldValue}) => {
                    return(
                        getFieldValue('data_source_model') && !components?.find(i => i.value == getFieldValue('data_display_type')) && getFieldValue('data_display_type') ?
                        <Form.Item style={{margin:0}} name={'displayed_fields'} label={t('displayed fields')}>
                            <GlobalSelect
                                mode={'multiple'}
                                style={{width: 250}}
                                options={models?.data?.find(i => i?.id == getFieldValue('data_source_model'))?.fields?.map((field) => {
                                    return{
                                        label: field?.name , value: field?.code,
                                    }
                                })}
                            />
                        </Form.Item> : null
                    )
                }}
            </Form.Item>

            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.data_display_type != current?.data_display_type || prev?.image_field != current?.image_field}
            >
                {({getFieldValue}) => {
                    return(
                        getFieldValue('data_display_type') == dataDisplayTypes?.data?.field_options?.find(i => i?.code == 'card_image')?.id || 
                        getFieldValue('data_display_type') == dataDisplayTypes?.data?.field_options?.find(i => i?.code == 'mobile_slider')?.id || 
                        getFieldValue('data_display_type') == dataDisplayTypes?.data?.field_options?.find(i => i?.code == 'mobile_grid_list_items')?.id ?
                        <Form.Item style={{margin: 0}} name={'image_field'} label={t('image field')}>
                            <GlobalSelect
                                style={{width: 250}}
                                options={models?.data?.find(i => i?.id == getFieldValue('data_source_model'))?.fields?.map((field) => {
                                    return{
                                        label: field?.name , value: `${field?.code}`,
                                    }
                                })}
                                />
                        </Form.Item> : null
                    )
                }}
            </Form.Item>

            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.data_display_type != current?.data_display_type || prev?.assigned_fields != current?.assigned_fields || prev?.data_source_model != current?.data_source_model}
            >
                {({getFieldValue , setFieldValue}) => {
                    var currentcomponent = element?.element_type?.code == 'component' ? 
                    customComponents.data.data?.data?.find(i => i.id == element?.related_component?.id)
                    : customComponents.data.data?.data?.find(i => i.id == getFieldValue('data_display_type'))

                    return(
                        (currentcomponent || element?.element_type?.code == 'component') &&
                        <>
                        <Form.Item noStyle style={{margin: 0}} name={'assigned_fields'} label={t('assigned fields')}>
                        </Form.Item>
                        <div style={{display:'flex' , flexDirection:'column' , gap:'10px'}}>
                            <p>{currentcomponent?.page_name} {t('assigned fields')}</p>
                            {currentcomponent?.related_variables?.map((variable , index) => {
                                return(
                                    <div style={{display:'flex' , gap:'10px' , alignItems:'center'}} key={variable?.id}>
                                        <Tooltip destroyTooltipOnHide={true} title={`${variable?.variable_name}`}>
                                        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                                            <p  style={{width:'80px' ,}}>{`${variable?.variable_name}`}:</p>
                                            {VariableName({variable:variable})}
                                        </div>
                                        </Tooltip>
                                        {element?.element_type?.code == 'component' ?
                                        <div>
                                        <Input 
                                        defaultValue={getFieldValue('assigned_fields')?.[variable?.id] || ''}
                                        onChange={(e) => {
                                            setFieldValue('assigned_fields', 
                                            {...getFieldValue('assigned_fields'),
                                                [variable.id]: e.target.value
                                            })
                                            
                                        }}/>
                                        </div>
                                        :
                                        <GlobalSelect
                                            onChange={(e) => setFieldValue('assigned_fields', 
                                                {...getFieldValue('assigned_fields'),
                                                    [variable.id]: e
                                                }
                                            )}
                                            defaultValue={getFieldValue('assigned_fields')?.[variable?.id] || ''}
                                            style={{width: 250}}
                                            options={isLocalData || element?.local_storage_code ? 
                                                Array.isArray(localSorageFields) && localSorageFields?.length > 0  ? 
                                                Object.keys(localSorageFields[0])?.map((field) => {
                                                    return{
                                                        label: field , value: field,
                                                    }
                                                })
                                                : []
                                                : 
                                                models?.data?.find(i => i?.id == getFieldValue('data_source_model'))?.fields?.map((field) => {
                                                return{
                                                    label: field?.name , value: `${field?.code}`,
                                                }
                                            })}
                                        />}
                                    </div>
                                )
                            })}
                        </div>
                        </>
                    )
                }}
            </Form.Item>
            <div style={{width:'100%'}}>
                <Button loading={lod} type="primary" htmlType="submit">{t('save')}</Button>
            </div>
        </Form>
    )
}

export default BoxContainerDataConfig