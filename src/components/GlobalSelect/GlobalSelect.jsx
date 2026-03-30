import React from "react";
import { Select } from "antd";

const GlobalSelect = (props) => {

    const filterOption = (input, option) => {
        return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }

    return(
        <Select
        showSearch
        allowClear
        filterOption={filterOption}
        {...props}
        style={{
            width:'100%',
            ...props?.style,
        }}
        />
    )
}

export default GlobalSelect