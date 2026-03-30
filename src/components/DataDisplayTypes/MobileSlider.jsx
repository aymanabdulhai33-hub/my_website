import React from "react";
import { getFirstKey } from "../../utility/globalFun";
import PrintFields from "./PrintFields";
import usePage from "../../contexts/usePage/usePage";

const MobileSlider = ({element , data , handleClick}) => {
    //className="flex items-center gap-3 w-max global-scroll-x"
    return(
        <div className="global-scroll-x" style={{display:'flex' , padding:'5px' , gap:'10px'}}>
            {data?.map((item , index) => {
                return(
                    <div 
                    onClick={(e) => {
                        handleClick(e , item)
                    }}
                    style={{width:'120px', 
                        display:'flex', 
                        flexDirection:'column', 
                        gap:'5px', 
                        borderRadius:'10px', 
                        overflow:'hidden', 
                        cursor:'pointer', 
                        flexShrink: 0,
                        boxShadow:'0 3px 6px rgba(0, 0, 0, 0.15)',
                        }} 
                        key={index}
                        >
                        <img style={{height:'90px' , objectFit:"cover" , width:'100%'}} src={item?.[element?.item_image_field]?.file_url || item?.[element?.image_field]?.file_url} />
                        {item && 
                        <div style={{padding:'8px'}}>
                            <PrintFields element={element} item={item} />
                        </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default MobileSlider