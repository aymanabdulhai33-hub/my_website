import { App, Button, Form, Input } from "antd";
import React, { useState } from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import usePage from "../../contexts/usePage/usePage";
import { t } from "i18next";
import useTheme from "../../contexts/useTheme/useTheme";
import { DeleteOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import useBuilder from "../../contexts/useBuilder/useBuilder";

const VariablesForm = ({variable}) => {
    const {modal} = App.useApp()
    const {addNewPageVariable , deleteElementById , page} = usePage()
    const {themeColor} = useTheme()
    const [lod , setLod] = useState(false)
    const [addLod , setAddLod] = useState(false)
    const {variableTypes , isFetchingVariableTypes} = useBuilder()
    const queryClient = useQueryClient()
    const handleAddVariable = async (values) => {
        setAddLod(true)
        if(variable){
            var newObj = {...values}
            Object.keys(newObj).map((key) => {
                if(typeof variable[key] == 'object'){
                    if(newObj[key] == variable[key]?.id){
                        delete newObj[key]
                    }
                }else{
                    if(newObj[key] == variable[key]){
                        delete newObj[key]
                    }
                }
                
            })
            await addNewPageVariable({variable: newObj , id: variable?.id})
        }else{
            await addNewPageVariable({variable: values })
        }
        setAddLod(false)
        
    }


    const handleDeleteVariable = () => {
        modal.confirm({
            icon: <DeleteOutlined style={{color: themeColor?.red}}/>,
            maskClosable: true,
            type: 'error',
            title: (<>{t('are you sure you want to delete this variable')}: {variable?.variable_name}</>),
            onOk: async () => {
                setLod(true)
                await deleteElementById(variable)
                queryClient.invalidateQueries({queryKey: ['page' , `${page?.id}`]})
            }
        })
    }

    return(
        <Form 
            layout="vertical"
            style={{display:'flex' , flexDirection:'column' , flexWrap:'wrap'}}
            onFinish={handleAddVariable}
            initialValues={{
                ...variable,
                variable_type: variable?.variable_type?.id || ''
            }}
        >
            <Form.Item style={{marginBottom:5}} rules={[{required: true}]} name={'variable_name'} label={t('name')}>
                <Input />
            </Form.Item>
            <Form.Item style={{marginBottom:5}} rules={[{required: true}]} name={'variable_code'} label={t('code')}>
                <Input />
            </Form.Item>
            <Form.Item style={{marginBottom:5}} rules={[{required: true}]} name={'variable_type'} label={t('type')}>
            <GlobalSelect
                allowClear={false}
                style={{width:'100%'}}
                loading={isFetchingVariableTypes}
                options={variableTypes?.data?.field_options?.map(option => {
                    return {
                        label: option?.text,
                        value: option?.id,
                    }
                })}
            />
            </Form.Item>
            <div style={{width:'100%' , display:'flex' , flexWrap:'wrap' , gap:'10px' , marginTop:'5px'}}>
                <Button loading={addLod} type="primary" htmlType="submit">{variable ? t('save') : t('create')}</Button>
                {variable && <Button loading={lod} type="primary" style={{background: themeColor?.red}} onClick={handleDeleteVariable}>{t('delete')}</Button>}
            </div>
                
        </Form>
    )
}

export default VariablesForm