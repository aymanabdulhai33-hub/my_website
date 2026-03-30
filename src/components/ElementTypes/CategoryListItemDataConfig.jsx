import React, { useState } from "react";
import usePage from "../../contexts/usePage/usePage";
import useBuilder from "../../contexts/useBuilder/useBuilder";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Form, Tooltip } from "antd";
import { ReadFromDataModel, VariableName } from "../DescriptionProperties/DescriptionProperties";
import { getFieldPropertyForRelatedGridFieldModel, getFieldWidget, isWidgetRelatedGrid } from "../../utility/typeAndStructure";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { t } from "i18next";

const CategoryListItemDataConfig = ({models , isFetchingModels , element}) => {

    const {isMobilePage , customComponents , isFetchingCustomComponents , updatePageElement , pageId} = usePage()
    const {dataDisplayTypes} = useBuilder()
    const [lod , setLod] = useState(false)
    const queryClient = useQueryClient()

    const handleApplyData = async (values) => {
        setLod(true)
        var sendData = {...values}
        if(sendData?.data_display_component){
            sendData.assigned_fields = sendData?.assigned_fields ? JSON.stringify(sendData?.assigned_fields) : ''
            sendData.displayed_fields = ''
            sendData.image_field = ''
        }else{
            sendData.displayed_fields = sendData.displayed_fields  ? sendData.displayed_fields.join(',') : ''
            sendData.assigned_fields = ''
            sendData.data_display_component = ''
        }

        if(sendData.data_display_type && components?.find(i => i.value == sendData.data_display_type)){
            sendData.item_display_component = parseInt(sendData.data_display_type)
            sendData.data_display_type = dataDisplayTypes?.data?.field_options?.find(i => i?.code == 'custom_component')?.id
            sendData.item_assigned_fields = sendData?.item_assigned_fields ? JSON.stringify(sendData?.item_assigned_fields) : ''
            sendData.items_displayed_fields = ''
        }else{
            sendData.items_displayed_fields = sendData.items_displayed_fields  ? sendData.items_displayed_fields.join(',') : ''
            sendData.item_assigned_fields = ''
            sendData.item_display_component = ''
        }
        
        await updatePageElement({element , dataObject: sendData})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        setLod(false)
    }

    var assignedVariables = element?.assigned_fields ? JSON.parse(element?.assigned_fields) : {}
    var itemAssignedVariables = element?.item_assigned_fields ? JSON.parse(element?.item_assigned_fields) : {}
    var components = customComponents.data.data?.data.map((component) => {
        return {label: component?.page_name , value: `${component?.id}` , type: component?.content_type?.code}
    })
    
    var mobileDataDisplayTypes = ['mobile_grid_list_items' , 'mobile_slider']

    return(
        <Form
        onFinish={handleApplyData}
        initialValues={{
            data_source_model: element?.data_source_model ? `${element?.data_source_model}` : '',
            grid_field: element?.grid_field,
            data_display_component: element?.data_display_component?.id,
            data_display_type: element?.data_display_type?.id ? element?.data_display_type?.id == '34' ? element?.item_display_component?.id : element?.data_display_type?.id : '',
            displayed_fields: element?.displayed_fields ? Array.from(element?.displayed_fields?.split(','), String) : [],
            image_field: element?.image_field ? `${element?.image_field}` : '',
            assigned_fields: assignedVariables,
            items_displayed_fields: element?.items_displayed_fields ? Array.from(element?.items_displayed_fields?.split(','), String) : [],
            item_image_field: element?.item_image_field,
            item_assigned_fields: itemAssignedVariables
        }}
        layout="vertical"
        style={{display:'flex' , flexWrap:'wrap' , rowGap:"20px", columnGap:'20px'}}
        >

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

            <div style={{width:'100%'}}>
                <hr />
            </div>

            <Form.Item style={{margin:0}} name={'data_display_component'}
            label={'category display type'}>
                <GlobalSelect
                    loading={isFetchingCustomComponents}
                    style={{width: 250}}
                    options={[...components]}
                />
            </Form.Item>

            <Form.Item
                noStyle
                shouldUpdate={(prev , current) => prev?.data_source_model != current?.data_source_model || prev?.grid_field != current?.grid_field}
                >
                    {({getFieldValue}) => {
                        var fields = models?.data?.find(i => i?.id == getFieldValue('data_source_model'))?.fields?.filter(i => isWidgetRelatedGrid(getFieldWidget(i)))
                        return(
                            <Form.Item rules={[{required: true}]} style={{margin:0}} name={'grid_field'}
                            label={t('grid field')}>
                                <GlobalSelect
                                    loading={isFetchingCustomComponents}
                                    style={{width: 250}}
                                    options={fields?.map((field) => {
                                        return{
                                            label: field?.name,
                                            value: `${field?.id}`
                                        }
                                    })}
                                />
                            </Form.Item>
                    )}}
            </Form.Item>

            <Form.Item
                noStyle
                shouldUpdate={(prev , current) => prev?.data_source_model != current?.data_source_model || prev?.displayed_fields != current?.displayed_fields || prev?.data_display_component != current?.data_display_component}
                >
                    {({getFieldValue}) => {
                        return(
                            getFieldValue('data_source_model') && !getFieldValue('data_display_component') ?
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
                shouldUpdate={(prev , current) => prev?.data_source_model != current?.data_source_model || prev?.image_field != current?.image_field || prev?.data_display_component != current?.data_display_component}
                >
                    {({getFieldValue}) => {
                        return(
                            getFieldValue('data_source_model') && !getFieldValue('data_display_component') ?
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
                shouldUpdate={(prev , current) => prev?.data_display_component != current?.data_display_component || prev?.assigned_fields != current?.assigned_fields || prev?.data_source_model != current?.data_source_model}
                >
                    {({getFieldValue , setFieldValue}) => {     
                        var currentcomponent =  customComponents.data.data?.data?.find(i => i.id == element?.data_display_component?.id) ||
                        customComponents.data.data?.data?.find(i => i.id == getFieldValue('data_display_component'))
                        return(
                            currentcomponent && getFieldValue('data_display_component') &&
                            <>
                            <Form.Item noStyle style={{margin: 0}} name={'assigned_fields'} label={t('items assigned fields')}>
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
                                                options={
                                                    models?.data?.find(i => i?.id == getFieldValue('data_source_model'))?.fields?.map((field) => {
                                                        return{
                                                            label: field?.name , value: `${field?.code}`,
                                                        }
                                                    })
                                                }
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
                    <hr />
                </div>
                
                <Form.Item style={{margin:0}} name={'data_display_type'}
                label={'items display type'}>
                <GlobalSelect
                    loading={isFetchingCustomComponents}
                    style={{width: 250}}
                    options={
                        [...dataDisplayTypes?.data?.field_options?.filter(i => i?.code !== 'custom_component' && (isMobilePage ? mobileDataDisplayTypes.includes(i?.code) : !mobileDataDisplayTypes.includes(i?.code)) )?.map((option) => {
                            return{
                                label: option?.text,
                                value: option?.id
                            }
                        }), ...(components ? [...components] : [])]
                        }
                />
                </Form.Item>

                <Form.Item
                 noStyle
                 shouldUpdate={(prev , current) => prev?.data_source_model != current?.data_source_model || prev?.items_displayed_fields != current?.items_displayed_fields || prev?.data_display_type != current?.data_display_type || prev?.grid_field != current?.grid_field}
                >
                     {({getFieldValue}) => {
                         return(
                            getFieldValue('data_display_type') && !components?.find(i => i.value == getFieldValue('data_display_type')) && getFieldValue('grid_field') ?
                            <Form.Item style={{margin:0}} name={'items_displayed_fields'}
                            label={'items displayed fields'}>
                                <GlobalSelect
                                    mode={'multiple'}
                                    style={{width: 250}}
                                    options={models?.data?.find(i => 
                                        i?.id == getFieldPropertyForRelatedGridFieldModel(models?.data?.find(i => i?.id == getFieldValue('data_source_model') )?.fields?.find(i => i?.id == getFieldValue('grid_field')))?.value
                                    )?.fields?.map((field) => {
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
                shouldUpdate={(prev , current) => prev?.data_display_type != current?.data_display_type || prev?.item_image_field != current?.item_image_field}
                >
                    {({getFieldValue}) => {
                        return(
                            getFieldValue('data_display_type') == '14' || getFieldValue('data_display_type') == '37' || getFieldValue('data_display_type') == '91'?
                            <Form.Item style={{margin:0}} name={'item_image_field'}
                            label={'item image field'}>
                                <GlobalSelect
                                style={{width: 250}}
                                options={models?.data?.find(i => 
                                    i?.id == getFieldPropertyForRelatedGridFieldModel(models?.data?.find(i => i?.id == getFieldValue('data_source_model') )?.fields?.find(i => i?.id == getFieldValue('grid_field')))?.value
                                )?.fields?.map((field) => {
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
                shouldUpdate={(prev , current) => prev?.data_display_type != current?.data_display_type || prev?.assigned_fields != current?.assigned_fields || prev?.data_source_model != current?.data_source_model}
                >
                    {({getFieldValue , setFieldValue}) => {     
                        var currentcomponent =  customComponents.data.data?.data?.find(i => i.id == element?.data_display_type?.id) ||
                        customComponents.data.data?.data?.find(i => i.id == getFieldValue('data_display_type'))
                        return(
                            currentcomponent &&
                            <>
                            <Form.Item noStyle style={{margin: 0}} name={'item_assigned_fields'} label={t('items assigned fields')}>
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
                                            defaultValue={getFieldValue('item_assigned_fields')?.[variable?.id] || ''}
                                            onChange={(e) => {
                                                setFieldValue('item_assigned_fields', 
                                                {...getFieldValue('item_assigned_fields'),
                                                    [variable.id]: e.target.value
                                                })
                                                
                                            }}/>
                                            </div>
                                            :
                                            <GlobalSelect
                                                onChange={(e) => setFieldValue('item_assigned_fields', 
                                                    {...getFieldValue('item_assigned_fields'),
                                                        [variable.id]: e
                                                    }
                                                )}
                                                defaultValue={getFieldValue('item_assigned_fields')?.[variable?.id] || ''}
                                                style={{width: 250}}
                                                options={models?.data?.find(i => 
                                                        i?.id == getFieldPropertyForRelatedGridFieldModel(models?.data?.find(i => i?.id == getFieldValue('data_source_model') )?.fields?.find(i => i?.id == getFieldValue('grid_field')))?.value
                                                        )?.fields?.map((field) => {
                                                        return{
                                                            label: field?.name , value: field?.code,
                                                        }
                                                    })
                                                }
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

export default CategoryListItemDataConfig