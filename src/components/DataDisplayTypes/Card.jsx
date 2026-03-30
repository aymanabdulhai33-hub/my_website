import { Card } from "antd";
import React from "react";
import PrintFields from "./PrintFields";

const CardView = ({item , element}) => {
    return(
    <Card
        hoverable
        style={{
        width: 240,
        cursor:'pointer',
        height:'100%'
        }}
    >
       {item &&
       <PrintFields element={element} item={item}/>
       }
    </Card>
    )
}

export default CardView