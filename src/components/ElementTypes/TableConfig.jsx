import { Button, Form, Input } from "antd";
import { t } from "i18next";
import React, { useState } from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import useBuilder from "../../contexts/useBuilder/useBuilder";
import { ReadFromDataModel } from "../DescriptionProperties/DescriptionProperties";
import usePage from "../../contexts/usePage/usePage";
import { useQueryClient } from "@tanstack/react-query";


const TableConfig = ({element , }) => {

    const {isFetchingModels , models , pageId} = useBuilder()
    const {updatePageElement} = usePage()
    const queryClient = useQueryClient()
    const [lod , setLod] = useState(false)

    const handleSubmit = async (values) => {
        setLod(true)
        var newValue = {...values}

        if(newValue.displayed_fields){
            newValue.displayed_fields = newValue.displayed_fields.join(',')
        }

        await updatePageElement({element , dataObject: newValue})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        setLod(false)
    }

    return(
        <div style={{width:'550px'}}>
            <Form
            onFinish={handleSubmit}
            layout="vertical"
            initialValues={{
                data_source_model: element?.data_source_model,
                displayed_fields: element?.displayed_fields ? Array.from(element?.displayed_fields?.split(','), String) : [],
            }}
            >
                <Form.Item rules={[{required: true}]} name={'data_source_model'} label={ReadFromDataModel}>
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
                shouldUpdate={(prev , current) => prev?.data_source_model != current?.data_source_model || prev?.displayed_fields != current?.displayed_fields}
                >
                    {({getFieldValue}) => {
                        return(
                            <Form.Item rules={[{required: true}]}  name={'displayed_fields'} label={t('displayed columns')}>
                                <GlobalSelect
                                    mode={'multiple'}
                                    style={{width: 250}}
                                    options={models?.data?.find(i => i?.id == getFieldValue('data_source_model'))?.fields?.map((field) => {
                                        return{
                                            label: field?.name , value: field?.code,
                                        }
                                    })}
                                    />
                            </Form.Item> 
                        )
                    }}
                </Form.Item>

                <Button loading={lod} htmlType="submit" type="primary">{t('submit')}</Button>
            </Form>
        </div>
    )
}

export default TableConfig