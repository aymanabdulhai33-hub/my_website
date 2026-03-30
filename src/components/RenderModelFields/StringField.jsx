import { Form, Input } from "antd";
import React from "react";
import PhoneInput from "react-phone-number-input";
import { countries } from "../../utility/countries";
import { getFieldWidget, isWidgetMobile, isWidgetMultiLine } from "../../utility/typeAndStructure";
import useTheme from "../../contexts/useTheme/useTheme";

const StringField = ({field , globalProps , fieldInfo}) => {
    const {siteTheme} = useTheme()
    return(
        fieldInfo?.isVisible && 
        <Form.Item {...globalProps}>
            {isWidgetMobile(getFieldWidget(field)) ?
            <PhoneInput
            className="signUp-mobile"
            international
            placeholder={fieldInfo?.placeholder}
            countries={countries}
            />
            :
            isWidgetMultiLine(getFieldWidget(field)) ?
                <Input.TextArea 
                placeholder={fieldInfo?.placeholder} 
                disabled={fieldInfo?.isReadOnly}
                style={{
                    backgroundColor: siteTheme?.input_bg_color,
                    border: `${siteTheme?.input_border_size || '1px'} solid ${siteTheme?.input_border_color}`,
                    borderRadius: siteTheme?.input_border_radius,
                    fieldSizing: 'content',
                    minHeight: '100px'
                }}
                />
            :
            <Input placeholder={fieldInfo?.placeholder} disabled={fieldInfo?.isReadOnly} className="default-input"/>
            }
        </Form.Item>
    )
}

export default StringField