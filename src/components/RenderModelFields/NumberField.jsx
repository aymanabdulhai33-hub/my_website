import React from "react";
import { Form, InputNumber } from "antd";

const NumberField = ({field , globalProps , fieldInfo}) => {

    return(
        fieldInfo?.isVisible && 
        <Form.Item {...globalProps}>
            <InputNumber placeholder={fieldInfo?.placeholder} disabled={fieldInfo?.isReadOnly} className="default-input"/>
        </Form.Item>
    )
}

export default NumberField