import React from "react";
import { Form, TimePicker } from "antd";

const TimeField = ({field , globalProps , fieldInfo}) => {

    return(
        fieldInfo?.isVisible && 
        <Form.Item {...globalProps}>
            <TimePicker placeholder={fieldInfo?.placeholder} disabled={fieldInfo?.isReadOnly} className="default-input"/>
        </Form.Item>
    )
}

export default TimeField