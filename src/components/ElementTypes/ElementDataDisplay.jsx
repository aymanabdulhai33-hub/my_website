import { Button, Form, Input, Switch } from "antd";
import React, { useState } from "react";
import usePage from "../../contexts/usePage/usePage";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { t } from "i18next";


const ElementDataDisplay = ({element}) => {
    const {getFieldCode , page , updatePageElement , isTemplateEditor} = usePage()
    
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
        <div style={{width:'500px'}}>
            <Form
            layout="vertical"
            onFinish={handleUpdateElementDisplay}
            initialValues={{
                data_code: element?.data_code || ''
            }}
            >
            {element?.element_type?.code == getFieldCode('text') || element?.element_type?.code == getFieldCode('image') || element?.element_type?.code == getFieldCode('table') ?
                <div>
                    <Form.Item style={{margin:0, marginTop: 5 , width:'250px'}} label={page?.content_type?.code == 'custom_dynamic_component' ? t('variable') : t('item field code')} name={'data_code'}>
                        {page?.content_type?.code == 'custom_dynamic_component' ? 
                        <GlobalSelect
                            style={{width:'250px'}}
                            options={page?.related_variables?.map((item) => {
                                return{
                                    label: item?.variable_name,
                                    value: item?.variable_code
                                }
                            }) || []}
                        />
                        :
                        <Input />
                        }
                    </Form.Item>
                </div> : null}
                <Button style={{marginTop:"10px"}} type="primary" htmlType="submit">{'save'}</Button>
            </Form>
        </div>
    )
}

export default ElementDataDisplay