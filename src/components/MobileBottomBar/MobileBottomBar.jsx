import React from "react";
import usePage from "../../contexts/usePage/usePage";
import { GlobalOutlined, HomeOutlined, LoginOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import * as S from './styled'
import { Link, useParams } from "react-router-dom";
import useBuilder from "../../contexts/useBuilder/useBuilder";
import useUser from "../../contexts/useUser/useUser";

const MobileBottomBar = () => {
    const {pagesModel} = useBuilder()
    const {user} = useUser()
    const {pageId} = useParams()
    var mobilePages = pagesModel?.data?.data?.data?.filter(i => i?.content_type?.code == 'mobile_page' && i?.show_in_mobile_bar) || []
    mobilePages = mobilePages?.filter(i => (i.user_permission == true && user) || (!i.user_permission) )
    mobilePages = user ? mobilePages?.filter(i => user && !i?.hide_if_user ) : mobilePages
    return(
        <div style={{
            background:'white',
            position:'sticky',
            bottom: '0px',
            width:'100%',
            minHeight: '50px',
            paddingBlock: '5px',
            paddingInline: '5px',
            paddingTop:0,
            display: 'flex',
            borderTop:'1px solid lightgray',
            justifyContent: 'space-evenly'
        }}>
            {mobilePages?.map((page , index) => {
                return(
                    index < 5 &&
                    <Link style={{borderTop: pageId == page?.id ? '4px solid var(--light_color)' : ''}} to={`/admin/page-editor/${page?.id}`} key={page?.id}>
                        <S.PageItem>
                            {page?.page_icon?.code == 'home_icon' ? 
                                <HomeOutlined style={{fontSize:'18px'}}/>
                            :
                            page?.page_icon?.code == 'settings_icon' ? 
                                <SettingOutlined style={{fontSize:'18px'}}/>
                            :
                            page?.page_icon?.code == 'profile_icon' ? 
                                <UserOutlined style={{fontSize:'18px'}}/>
                            :
                            page?.page_icon?.code == 'cart_icon' ? 
                                <ShoppingCartOutlined style={{fontSize:'18px'}}/>
                            :
                            page?.page_icon?.code == 'category_icon' ? 
                                <GlobalOutlined style={{fontSize:'18px'}}/>
                            :
                            page?.page_icon?.code == 'login_icon' ? 
                                <LoginOutlined style={{fontSize:'18px'}}/>
                            : null
                            }
                            <p className="dynamic-paragraph-clamp-one-line" style={{fontSize:'12px'}}>{page?.page_name}</p>
                        </S.PageItem>
                    </Link>
                )
            })}
        </div>
    )
}

export default MobileBottomBar