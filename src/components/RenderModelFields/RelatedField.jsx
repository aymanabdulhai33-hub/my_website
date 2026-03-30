import React from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSearchItemData } from "../../apiCall/get";
import { getValueFromSearchItemData } from "../../utility/typeAndStructure";
import { Form } from "antd";
import useTheme from "../../contexts/useTheme/useTheme";

const RelatedField = ({field , globalProps , fieldInfo , noForm , onChange , defaultValue}) => {
    const {siteTheme} = useTheme()
    const {data , isLoading , isFetching} = useQuery({
        queryKey: [{model_id: field?.related_relation?.[0]?.model , field: field?.id}],
        queryFn: async () => {
            return await getSearchItemData({modelId: field?.related_relation?.[0]?.model })
        },
        enabled: field?.related_relation?.[0]?.model ? true : false,
        // staleTime: Infinity,
        placeholderData: keepPreviousData
    })

    return(
        noForm ? 
        <GlobalSelect
        defaultValue={defaultValue}
        onChange={(e) => onChange(e)}
        placeholder={fieldInfo?.placeholder}
        disabled={fieldInfo?.isReadOnly}
        options={data?.data?.data?.map((item) => {
            return{
                label: getValueFromSearchItemData(item),
                value: Object.keys(item)[0]
            }
        }) || []}
        loading={isFetching}
        />
        :
        fieldInfo?.isVisible && 
        <Form.Item {...globalProps}>
            <GlobalSelect
            placeholder={fieldInfo?.placeholder}
            disabled={fieldInfo?.isReadOnly}
            options={data?.data?.data?.map((item) => {
                return{
                    label: getValueFromSearchItemData(item),
                    value: Object.keys(item)[0]
                }
            }) || []}
            loading={isFetching} 
            style={{
                backgroundColor: siteTheme?.input_bg_color,
            }}
            className="site-theme"
            />
        </Form.Item>
    )
}

export default RelatedField