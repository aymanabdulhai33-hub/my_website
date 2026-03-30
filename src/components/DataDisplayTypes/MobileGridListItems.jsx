import React from "react";
import PrintFields from "./PrintFields";
import { Button } from "antd";
import useTheme from "../../contexts/useTheme/useTheme";
import { t } from "i18next";

const MobileGridListItems = ({element , data , handleClick}) => {
    const {siteTheme} = useTheme()
    var ButtonDefaultStyle = {
        backgroundColor: siteTheme?.button_bg_color,
        color: siteTheme?.button_color,
        borderRadius: siteTheme?.button_border_radius
    }

    return(
        <div style={{display:'flex' , gap:'10px' , flexWrap:'wrap' , padding:'5px' , justifyContent:'center'}}>
            {data?.map((item) => {
                return(
                    <div
                    onClick={(e) => handleClick(e , item)}
                    key={item?.id}
                    style={{
                        boxShadow:'0 3px 6px rgba(0, 0, 0, 0.15)',
                        borderRadius:'8px',
                        overflow:'hidden',
                        width:'135px',
                        minHeight:'160px',
                        cursor:'pointer',
                        display:'flex',
                        flexDirection:'column',
                        gap:'10px'
                    }}
                    >
                        {element?.image_field && 
                            <img style={{height:'90px' , objectFit:"cover" , width:'100%'}} src={item?.[element?.item_image_field]?.file_url || item?.[element?.image_field]?.file_url} />
                        }
                        <div style={{padding:'10px'}}>
                            <PrintFields element={element} item={item} />
                            <Button
                                style={{
                                    ...ButtonDefaultStyle,
                                    width:'100px',
                                    height:'30px',
                                    fontSize:'12px'
                                }}
                                >
                                {t('see more')}
                            </Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MobileGridListItems