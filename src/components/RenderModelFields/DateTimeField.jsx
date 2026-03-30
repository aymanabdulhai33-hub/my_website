import React from "react";
import { DatePicker, Form } from "antd";

const DateTimeField = ({field , globalProps , fieldInfo}) => {

    return(
        fieldInfo?.isVisible && 
            <Form.Item {...globalProps}>
            <DatePicker placeholder={fieldInfo?.placeholder} disabled={fieldInfo?.isReadOnly} showTime className="default-input"/>
        </Form.Item>
    )
}

export default DateTimeField