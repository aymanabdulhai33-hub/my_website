import {Popconfirm} from "antd";
import React from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { t } from "i18next";
import useLang from "../../contexts/useLanguage/useLang";

const PopconfirmElyTypes = ({titleName,descriptionEnTitle,descriptionArTitle}) => {
    const {lang} = useLang()

    return(
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <p style={{color:"var(--builder-fontDark)"}}>{titleName}</p>
        <Popconfirm
            description={
            lang == 'en'? 
            <div style={{display:"flex",flexDirection:"column",gap:"5px",flexWrap:"wrap",width:"300px"}}>
                {descriptionEnTitle}
            </div>  
            :
            <div style={{display:"flex",flexDirection:"column",gap:"5px",flexWrap:"wrap",width:"300px"}}>
                {descriptionArTitle} 
            </div>
            }
            okText={lang == 'en'?"Ok":'حسنا'}
            showCancel={false}
            icon={false}
        >
            <QuestionCircleOutlined style={{ cursor: "pointer",color:"var(--builder-fontDark)" }} />
        </Popconfirm>
    </div>
    )
}

export default PopconfirmElyTypes