import { Card } from "antd";
import React from "react";
import PrintFields from "./PrintFields";
import { getFirstKey } from "../../utility/globalFun";

const CardImage = ({item , element}) => {

    return(
        <Card
            hoverable
            style={{ width: '240px' }}
            cover={element?.image_field || element?.item_image_field ? <img style={{height:'200px'}} src={item?.[element?.item_image_field]?.file_url || item?.[element?.image_field]?.file_url} /> : null}
        >
            {item && 
            <div style={{height:'100px' , overflow:'hidden'}}>
                <PrintFields element={element} item={item} />
            </div>
            }
        </Card>
    )
}

export default CardImage