import React from "react";
import { Link } from "react-router-dom";
import useLang from "../../contexts/useLanguage/useLang";
import { t } from "i18next";
import logo from '../../assets/svgs/lightLogo.svg'
import darkLogo from '../../assets/images/logo.png'
import useTheme from "../../contexts/useTheme/useTheme";
import PagesMenu from "../AdminComponents/PagesMenu";
import { DownloadOutlined, FundProjectionScreenOutlined, MobileOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import useUser from "../../contexts/useUser/useUser";
import { Segmented, Switch, Tooltip } from "antd";
import useBuilder from "../../contexts/useBuilder/useBuilder";

const Header = () => {
    const {lang , changeLanguage} = useLang()
    const {changeTheme , theme , setBuilderMode , builderMode , setShowComponents , showComponents} = useTheme()
    const {userAdmin} = useUser()
    const {pagesModel , isFetchingPagesModel} = useBuilder()

    var data = builderMode == 'web' ? 
    pagesModel?.data?.data?.data?.filter(i => i?.content_type?.code == 'page' || i?.content_type?.code == 'layout')
    : pagesModel?.data?.data?.data?.filter(i => i?.content_type?.code == 'mobile_page')

    return(
        <div style={{background: `var(--builder-bg-color)` , borderBottom:'1px solid var(--builder-light-gray)'}} className={'flex justify-between items-center px-2 py-0.5 gap-2.5'}>
            <div className="cursor-pointer" style={{width:'90px' , height:'30px'}}>
                <Link to={'/'}>
                    <img style={{height:'100%'}} src={theme == 'dark' ? logo : darkLogo}/>
                </Link>
            </div>
            
            {userAdmin && 
                <PagesMenu isPages data={data} isLoading={isFetchingPagesModel}/>
            }


            <div className="flex gap-4 items-center">
                <Segmented
                    defaultValue={builderMode}
                    onChange={(e) => {
                        setBuilderMode(e)
                        window.localStorage.setItem('builderMode' , e)
                    }}
                    options={[
                    {
                        label: t('Website'),
                        value: 'web',
                        icon: <FundProjectionScreenOutlined />
                    },
                    {
                        label: t('Mobile App'),
                        value: 'mobile',
                        icon: <MobileOutlined />
                    },
                    ]}
                />
                <div>
                    {/* {builderMode == 'mobile' ? 
                    <a href="/apk/one_day_dev_v1.0.0 (1).smer" download> 
                        <Tooltip title={t('download apk file')}>
                            <DownloadOutlined style={{fontSize:'18px'}}/> 
                        </Tooltip>
                    </a>
                    : ''} */}
                </div>
                <div className="cursor-pointer flex items-center gap-3">
                    {/* <Tooltip destroyTooltipOnHide={true} title={t('show components')}> */}
                        <p style={{width: 'max-content'}}>{t('Show Components')}: </p>
                        <Switch 
                        onChange={(e) => {
                            setShowComponents(e ? 1 : 0)
                            window.localStorage.setItem('showComponents' , e ? 1 : 0)
                        }}
                        defaultChecked={showComponents == 1 ? true : false}
                        // checkedChildren={t('hide components')}
                        // unCheckedChildren={t('show components')}
                        />
                    {/* </Tooltip> */}
                </div>
                <div className="cursor-pointer flex items-center" onClick={() => changeLanguage(lang == 'ar' ? 'en' : 'ar')}>
                    <p style={{color:'var(--builder-fontDark)' , fontWeight:'bold'}}>
                        {lang == 'ar' ? 'EN' : 'AR'}
                    </p>
                </div>

                {/* <div className="cursor-pointer flex items-center" style={{border: '2px solid var(--main)' , padding:'2px' , borderRadius:'5px'}} onClick={changeTheme}>
                    {theme == 'dark' ? <SunOutlined style={{fontSize:'20px'}}/> :<MoonOutlined style={{fontSize:'20px'}}/>}
                </div> */}
            </div>
        </div>
    )
}

export default Header