import React from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { Form } from "antd";
import useTheme from "../../contexts/useTheme/useTheme";

const ListOfOptionsField = ({field , globalProps , fieldInfo}) => {
    const {siteTheme} = useTheme()
    return(
        fieldInfo?.isVisible && 
        <Form.Item {...globalProps}>
            <GlobalSelect
            placeholder={fieldInfo?.placeholder}
            disabled={fieldInfo?.isReadOnly}
            options={field?.field_options?.map((option) => {
                return{
                    label: option?.text,
                    value: `${option?.id}`
                }
            }) || []}
            style={{
                backgroundColor: siteTheme?.input_bg_color,
            }}
            className="site-theme"
            />
        </Form.Item>
    )
}

export default ListOfOptionsField