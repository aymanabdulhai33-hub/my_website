import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Button, Form } from "antd";
import React, { useState } from "react";
import { getAppReports } from "../../apiCall/get";
import { t } from "i18next";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import usePage from "../../contexts/usePage/usePage";

const ReportDataConfig = ({element}) => {

    const [lod , setLod] = useState(false)
    const {updatePageElement} = usePage()

    const {data: reports , isFetching} = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            return await getAppReports()
        },
        staleTime: Infinity,
        placeholderData: keepPreviousData
    })

    const handleApplyData = async (values) => {
        setLod(true)
        var sendData = {...values}
        await updatePageElement({element , dataObject: sendData})
        setLod(false)
    }

    return(
        <Form
        onFinish={handleApplyData}
        initialValues={{
            data_source_model: element?.data_source_model,
        }}
        layout="vertical"
        style={{display:'flex' , flexWrap:'wrap'}}
        >
             <Form.Item rules={[{required: true}]} style={{marginBottom:5}} name={'data_source_model'} label={t('source report')}>
                    <GlobalSelect 
                    loading={isFetching}
                    style={{width: 250}}
                    options={
                        reports?.data?.map((report) => {
                            return{
                                label: `${report?.name}`,
                                value: `${report?.id}`
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

export default ReportDataConfig