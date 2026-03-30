import { Pagination } from "antd";
import React from "react";


const PaginationCompnent = ({onChange , page , total , onChangePageSize , size , defaultSizeValue}) => {
    return(
        <Pagination onChange={onChange} current={page} total={total} onShowSizeChange={onChangePageSize} pageSize={defaultSizeValue || 10} showSizeChanger={onChangePageSize ? true : false } size={size ? size : "small"}/>
    )
}

export default PaginationCompnent