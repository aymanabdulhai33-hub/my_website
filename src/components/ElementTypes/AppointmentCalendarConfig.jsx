import React, { useState } from 'react'
import { Button, Form } from 'antd'
import GlobalSelect from '../GlobalSelect/GlobalSelect'
import { t } from 'i18next'
import usePage from '../../contexts/usePage/usePage'
import { useQueryClient } from '@tanstack/react-query'

const AppointmentCalendarConfig = ({element , models , isFetchingModels}) => {

    const {updatePageElement , pageId , customComponents , isFetchingCustomComponents} = usePage()
    const [form] = Form.useForm()
    const [lod , setLod] = useState(false)
    const queryClient = useQueryClient()

    const handleApplyData = async (values) => {
        setLod(true)
        var newJson = JSON.stringify(values)
        await updatePageElement({element , dataObject: {assigned_fields: newJson}})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        setLod(false)
    }

    const assigned_fields = element?.assigned_fields ? JSON.parse(element?.assigned_fields) : {}

    const defaultConfig = {
        available_appointment: "available_appointment_model",
        appointment_is_active_field: "is_active",
        employees_available_appointment: "appointment_employee",
        date_available_appointment: "appointment_date",
        appointment_time: "appointment_start_time",
        appointments_model: "customer_appointments_model",
        appointment_employees: "employee_appointment",
        appointment_customer: "customer_appointment",
        related_appointment_field: "customer_available_appointment",
    }

    var components = customComponents.data.data?.data.map((component) => {
        return {label: component?.page_name , value: `${component?.id}` , type: component?.content_type?.code}
    })

  return (
    <div>
        <Form
        form={form}
        onFinish={handleApplyData}
        initialValues={{
            available_appointment: assigned_fields?.available_appointment || '',
            appointment_is_active_field: assigned_fields?.appointment_is_active_field || '',
            employees_available_appointment: assigned_fields?.employees_available_appointment || '',
            date_available_appointment: assigned_fields?.date_available_appointment || '',
            appointment_time: assigned_fields?.appointment_time || '',
            employees: assigned_fields?.employees || '',
            employee_name_field: assigned_fields?.employee_name_field || '',
            appointments_model: assigned_fields?.appointments_model || '',
            appointment_employees: assigned_fields?.appointment_employees || '',
            appointment_customer: assigned_fields?.appointment_customer || '',
            related_appointment_field : assigned_fields?.related_appointment_field || '',
            available_component: assigned_fields?.available_component || '',
            emp_component: assigned_fields?.emp_component || ''
        }}
        layout="vertical"
        style={{display:'flex' , flexWrap:'wrap' , rowGap:"20px", columnGap:'20px'}}
        >
            <Form.Item rules={[{required: true}]} style={{margin:0}} name={'available_appointment'} 
                label={'Available Appointment'}>
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

            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.available_appointment != current?.available_appointment}
            >
                {({getFieldValue , setFieldValue}) => {
                    return(
                    <Form.Item rules={[{required: true}]} style={{margin:0}} name={'appointment_is_active_field'} 
                        label={'Is Active Field'}>
                        <GlobalSelect 
                        loading={isFetchingModels}
                        style={{width: 250}}
                        options={
                            models?.data?.find(i => i?.id == getFieldValue('available_appointment'))?.fields?.map((field) => {
                                return{
                                    label: field?.name , value: `${field?.code}`,
                                }
                            })
                        }
                        />
                </Form.Item>
                    )
                }}
            </Form.Item>

            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.available_appointment != current?.available_appointment}
            >
                {({getFieldValue , setFieldValue}) => {
                    return(
                    <Form.Item rules={[{required: true}]} style={{margin:0}} name={'employees_available_appointment'} 
                        label={'Appointment By Employees Field'}>
                        <GlobalSelect 
                        loading={isFetchingModels}
                        style={{width: 250}}
                        options={
                            models?.data?.find(i => i?.id == getFieldValue('available_appointment'))?.fields?.map((field) => {
                                return{
                                    label: field?.name , value: `${field?.code}`,
                                }
                            })
                        }
                        />
                </Form.Item>
                    )
                }}
            </Form.Item>

            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.available_appointment != current?.available_appointment}
            >
                {({getFieldValue , setFieldValue}) => {
                    return(
                    <Form.Item rules={[{required: true}]} style={{margin:0}} name={'date_available_appointment'} 
                        label={'Appointment By Date Field'}>
                        <GlobalSelect 
                        loading={isFetchingModels}
                        style={{width: 250}}
                        options={
                            models?.data?.find(i => i?.id == getFieldValue('available_appointment'))?.fields?.map((field) => {
                                return{
                                    label: field?.name , value: `${field?.code}`,
                                }
                            })
                        }
                        />
                </Form.Item>
                    )
                }}
            </Form.Item>

            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.available_appointment != current?.available_appointment}
            >
                {({getFieldValue , setFieldValue}) => {
                    return(
                    <Form.Item rules={[{required: true}]} style={{margin:0}} name={'appointment_time'} 
                        label={'Appointment Time Field'}>
                        <GlobalSelect 
                        loading={isFetchingModels}
                        style={{width: 250}}
                        options={
                            models?.data?.find(i => i?.id == getFieldValue('available_appointment'))?.fields?.map((field) => {
                                return{
                                    label: field?.name , value: `${field?.code}`,
                                }
                            })
                        }
                        />
                </Form.Item>
                    )
                }}
            </Form.Item>


            <Form.Item style={{margin:0}} name={'available_component'} 
                label={'Available Appointment View Component'}>
                <GlobalSelect
                    loading={isFetchingCustomComponents}
                    style={{width: 250}}
                    options={components}
                />
            </Form.Item>



            <div style={{width:'100%'}}>
                <hr />
            </div>

            <Form.Item rules={[{required: true}]} style={{margin:0}} name={'employees'} 
                    label={'Employees Model'}>
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

            
            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.employees != current?.employees}
            >
                {({getFieldValue , setFieldValue}) => {
                    return(
                    <Form.Item rules={[{required: true}]} style={{margin:0}} name={'employee_name_field'} 
                        label={'Employees Name Field'}>
                        <GlobalSelect 
                        loading={isFetchingModels}
                        style={{width: 250}}
                        options={
                            models?.data?.find(i => i?.id == getFieldValue('employees'))?.fields?.map((field) => {
                                return{
                                    label: field?.name , value: `${field?.code}`,
                                }
                            })
                        }
                        />
                </Form.Item>
                    )
                }}
            </Form.Item>


            <Form.Item style={{margin:0}} name={'emp_component'} 
                label={'Employees Component'}>
                <GlobalSelect
                    loading={isFetchingCustomComponents}
                    style={{width: 250}}
                    options={components}
                />
            </Form.Item>

           <div style={{width:'100%'}}>
                <hr />
            </div>

            <Form.Item rules={[{required: true}]} style={{margin:0}} name={'appointments_model'} 
                label={'Appointments Model'}>
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


            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.appointments_model != current?.appointments_model}
            >
                {({getFieldValue , setFieldValue}) => {
                    return(
                    <Form.Item rules={[{required: true}]} style={{margin:0}} name={'appointment_employees'} 
                        label={'Appointment Employees Field'}>
                        <GlobalSelect 
                        loading={isFetchingModels}
                        style={{width: 250}}
                        options={
                            models?.data?.find(i => i?.id == getFieldValue('appointments_model'))?.fields?.map((field) => {
                                return{
                                    label: field?.name , value: `${field?.code}`,
                                }
                            })
                        }
                        />
                </Form.Item>
                    )
                }}
            </Form.Item>

            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.appointments_model != current?.appointments_model}
            >
                {({getFieldValue , setFieldValue}) => {
                    return(
                    <Form.Item rules={[{required: true}]} style={{margin:0}} name={'appointment_customer'} 
                        label={'Appointment Customer Field'}>
                        <GlobalSelect 
                        loading={isFetchingModels}
                        style={{width: 250}}
                        options={
                            models?.data?.find(i => i?.id == getFieldValue('appointments_model'))?.fields?.map((field) => {
                                return{
                                    label: field?.name , value: `${field?.code}`,
                                }
                            })
                        }
                        />
                </Form.Item>
                    )
                }}
            </Form.Item>


            <Form.Item
            noStyle
            shouldUpdate={(prev , current) => prev?.appointments_model != current?.appointments_model}
            >
                {({getFieldValue , setFieldValue}) => {
                    return(
                    <Form.Item rules={[{required: true}]} style={{margin:0}} name={'related_appointment_field'} 
                        label={'Related Appointment Field'}>
                        <GlobalSelect 
                        loading={isFetchingModels}
                        style={{width: 250}}
                        options={
                            models?.data?.find(i => i?.id == getFieldValue('appointments_model'))?.fields?.map((field) => {
                                return{
                                    label: field?.name , value: `${field?.code}`,
                                }
                            })
                        }
                        />
                </Form.Item>
                    )
                }}
            </Form.Item>
            

            <div style={{width:'100%' , gap: '20px' , display: 'flex'}}>
                <Button loading={lod} type="primary" htmlType="submit">{t('save')}</Button>
                <Button loading={lod} type='primary' onClick={() => {
                    form.setFieldsValue(defaultConfig)
                }}>
                    {t('Set Default Config')}
                </Button>
            </div>
        </Form>
    </div>
  )
}

export default AppointmentCalendarConfig