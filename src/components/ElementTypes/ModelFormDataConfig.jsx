import { Button, Form } from "antd";
import React, { useState } from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { ReadFromDataModel } from "../DescriptionProperties/DescriptionProperties";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFormDefaultItemType } from "../../apiCall/get";
import usePage from "../../contexts/usePage/usePage";
import { t } from "i18next";

const ModelFormDataConfig = ({models , isFetchingModels , element}) => {
    const {updatePageElement , pageId} = usePage()
    const [isLocalData , setIsLocalData] = useState(element?.local_storage_code ? true : false)
    const [lod , setLod] = useState(false)
    const queryClient = useQueryClient()

    const {data: formDefaultItemType , isFetching: isFetchingformDefaultItemType} = useQuery({
        queryKey: ['form-default-item-type'],
        queryFn: async () => {
            return await getFormDefaultItemType()
        },
    })

    const handleApplyData = async (values) => {
        setLod(true)
        var sendData = {...values}
        if(sendData.form_update_item == undefined){
            sendData.form_update_item = null
        }
        await updatePageElement({element , dataObject: sendData})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        setLod(false)
    }

    return(
        <Form
        onFinish={handleApplyData}
        initialValues={{
            data_source_model: element?.data_source_model ? `${element?.data_source_model}` : '',
            form_update_item: element?.form_update_item?.id || ''
        }}
        layout="vertical"
        style={{display:'flex' , flexWrap:'wrap' , rowGap:"20px", columnGap:'20px'}}
        >
            <Form.Item rules={[{required: element?.element_type?.code == 'component' ? false : true}]} style={{margin:0}} name={'data_source_model'} 
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

            <Form.Item style={{margin:0}} name={'form_update_item'} 
                label={t('defaul item value')}>
                    <GlobalSelect 
                    loading={isFetchingformDefaultItemType}
                    style={{width: 250}}
                    options={
                        formDefaultItemType?.data?.field_options?.map((option) => {
                            return{
                                label: `${option?.text}`,
                                value: option?.id
                            }
                        }) || []
                    }
                    />
            </Form.Item>

            <div style={{width:'100%'}}>
                <Button loading={lod} type="primary" htmlType="submit">{t('save')}</Button>
            </div>

        </Form>
    )
}

export default ModelFormDataConfig