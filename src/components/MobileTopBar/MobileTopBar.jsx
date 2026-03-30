import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";
import React from "react";
import useLang from "../../contexts/useLanguage/useLang";
import usePage from "../../contexts/usePage/usePage";
import { useNavigate } from "react-router-dom";

const MobileTopBar = () => {
    const { lang } = useLang()
    const {page , setOpenMobileSideBar} = usePage()
    const navigate = useNavigate()

    return(
        <div 
        style={{
            width: '100%',
            background: 'var(--light_color)',
            padding: '12px',
            display:'flex',
            justifyContent: 'space-between',
            borderBottom:'1px solid lightgray',
            position:'relative',
            color:'white',
            paddingTop: '20px',
            paddingInline: '15px',
            gap: '15px',
        }}
        >
            <div style={{display:'flex' , gap: '15px'}}>
                <ArrowLeftOutlined onClick={() => navigate(-1)} style={{fontSize:'18px' }} rotate={lang == 'ar' ? '180' : ''}/>
                <h3 style={{
                    fontWeight:'bold',
                }}>{page?.page_name}</h3>
            </div>

            <div>
                <MenuOutlined onClick={() => setOpenMobileSideBar(true)} style={{fontSize:'20px' , cursor:'pointer' }}/>
            </div>
        </div>
    )
}

export default MobileTopBar