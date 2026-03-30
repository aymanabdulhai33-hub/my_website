import React from "react";
import { Form, Switch } from "antd";

const BooleanFiled = ({field , globalProps , fieldInfo}) => {

    return(
        fieldInfo?.isVisible && 
        <Form.Item {...globalProps}>
            <Switch disabled={fieldInfo?.isReadOnly}/>
        </Form.Item>
    )
}

export default BooleanFiled