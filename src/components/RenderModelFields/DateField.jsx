import React from "react";
import { DatePicker, Form } from "antd";

const DateField = ({field , globalProps , fieldInfo}) => {

    return(
        fieldInfo?.isVisible && 
        <Form.Item {...globalProps}>
            <DatePicker placeholder={fieldInfo?.placeholder} disabled={fieldInfo?.isReadOnly} className="default-input"/>
        </Form.Item>
    )
}

export default DateField