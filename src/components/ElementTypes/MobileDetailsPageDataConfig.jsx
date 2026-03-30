import { Button, Form, Input, Radio, Tooltip } from "antd";
import React, { useState } from "react";
import usePage from "../../contexts/usePage/usePage";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { t } from "i18next";
import { useQueryClient } from "@tanstack/react-query";

const MobileDetailsPageDataConfig = ({models , isFetchingModels , element}) => {
    const {updatePageElement , pageId , itemModelId} = usePage()
    const [lod , setLod] = useState(false)
    const queryClient = useQueryClient()


    const handleApplyData = async (values) => {
        setLod(true)
        var sendData = {...values}
        sendData.displayed_fields = sendData.displayed_fields  ? sendData.displayed_fields.join(',') : ''
        sendData.image_field = sendData.image_field || ''
        await updatePageElement({element , dataObject: sendData})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        setLod(false)
    }

    return(
        <Form
        onFinish={handleApplyData}
        initialValues={{
            displayed_fields: element?.displayed_fields ? Array.from(element?.displayed_fields?.split(','), String) : [],
            image_field: element?.image_field ? `${element?.image_field}` : '',
        }}
        layout="vertical"
        style={{display:'flex' , flexWrap:'wrap' , rowGap:"20px", columnGap:'20px'}}

        >
            <Form.Item style={{margin:0}} name={'displayed_fields'} label={t('displayed fields')}>
                <GlobalSelect
                    mode={'multiple'}
                    style={{width: 250}}
                    options={models?.data?.find(i => i?.id == itemModelId )?.fields?.map((field) => {
                        return{
                            label: field?.name , value: field?.code,
                        }
                    })}
                />
            </Form.Item>

            <Form.Item style={{margin: 0}} name={'image_field'} label={t('image field')}>
                <GlobalSelect
                    style={{width: 250}}
                    options={models?.data?.find(i => i?.id == itemModelId )?.fields?.map((field) => {
                        return{
                            label: field?.name , value: `${field?.code}`,
                        }
                    })}
                />
            </Form.Item>

            <div style={{width:'100%'}}>
                <Button loading={lod} type="primary" htmlType="submit">{t('save')}</Button>
            </div>
        </Form>
    )
}

export default MobileDetailsPageDataConfig