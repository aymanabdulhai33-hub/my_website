import { SyncOutlined } from "@ant-design/icons";
import React from "react";

const LoadingSection = ({size}) => {

    return(
        <div style={{width:'100%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <SyncOutlined style={{color:"black" , fontSize: size ? size : '18px'}} spin />
        </div>
    )
}

export default LoadingSection