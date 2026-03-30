import { Button, Form, Input, Tooltip } from "antd";
import React, { useState } from "react";
import { VariableName } from "../DescriptionProperties/DescriptionProperties";
import usePage from "../../contexts/usePage/usePage";
import { useQueryClient } from "@tanstack/react-query";
import { t } from "i18next";

const ComponentDataConfig = ({models , isFetchingModels , element}) => {

    const {customComponents , updatePageElement , pageId} = usePage()
    var currentcomponent = customComponents.data.data?.data?.find(i => i.id == element?.related_component?.id)
    const [lod , setLod] = useState(false)
    const queryClient = useQueryClient()

    const handleApplyData = async (values) => {
        setLod(true)
        var sendData = {...values}
        sendData.assigned_fields = sendData?.assigned_fields ? JSON.stringify(sendData?.assigned_fields) : ''
        await updatePageElement({element , dataObject: sendData})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        setLod(false)
    }


    var assignedVariables = element?.assigned_fields ? JSON.parse(element?.assigned_fields) : {}

    return(
        <Form
        onFinish={handleApplyData}
        initialValues={{
            assigned_fields: assignedVariables,
        }}
        layout="vertical"
        style={{display:'flex' , flexWrap:'wrap' , rowGap:"20px", columnGap:'20px'}}
        >
            <Form.Item
                noStyle
                shouldUpdate={(prev , current) => prev?.assigned_fields != current?.assigned_fields || prev?.data_source_model != current?.data_source_model}
                >
                    {({getFieldValue , setFieldValue}) => {
                        return(
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

export default ComponentDataConfig