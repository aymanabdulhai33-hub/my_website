
import React, { useState } from "react"
import usePage from "../../contexts/usePage/usePage"
import { DndProvider } from "react-dnd"
import { Button, InputNumber } from "antd"
import PageBody from "../PageBody/PageBody"
import ElementsProperties from "../ElementsProperties/ElementsProperties"
import { HTML5Backend } from "react-dnd-html5-backend"
import { t } from "i18next"
import { AndroidOutlined, CloudUploadOutlined, FundProjectionScreenOutlined, MobileOutlined } from "@ant-design/icons"
import { Link, useLocation } from "react-router-dom"
import image_1 from '../../assets/images/7.png'
import useLang from "../../contexts/useLanguage/useLang"
import MobileBottomBar from "../MobileBottomBar/MobileBottomBar"
import MobileTopBar from "../MobileTopBar/MobileTopBar"
import useTheme from "../../contexts/useTheme/useTheme"
import LoadingSection from "../LoadingSection/LoadingSection"
import { publishTemplate } from "../../apiCall/post"


const PageBuilder = () => {
    const {page , currentLayout , isMobileView , setIsMobileView , isView , isMobilePage , publishSite , setMainDivWidth , mainDivWidth , setIsView , setSelectedElement} = usePage()
    const {lang} = useLang()
    const [lod , setLod] = useState(false)
    const {siteTheme} = useTheme()
    const location = useLocation()

    var handlePublishSite = async () => {
        setLod(true)
            await publishSite()
        setLod(false) 
    }

    const handlePublishTemplate = async () => {
        setLod(true)
            await publishTemplate({source_page_id: page?.id})
        setLod(false)
    }

    return(
        <div style={{padding: 0 , display:'flex' , flexDirection:'column'}} className="main-container">
            {!isView || (isView && location.pathname.includes('/admin/page-editor/')) ?
                <div style={{display:'flex', width:'100%' , background:'var(--builder-bg-light-color)', padding: '5px 20px' , borderBottom:'1px solid var(--builder-light-gray)' , gap: '20px' , alignItems:'center'}}>
                    {<h1 className="font-bold">
                    {page?.content_type?.code == 'layout' ? 
                    `${t('layout')}: ${page?.page_name}`
                    : isMobilePage ?
                    page?.page_name
                    : page?.content_type?.code == 'component' ?
                    `${t('component')}: ${page?.page_name}`
                    :  `/ ${page?.path}`}
                    </h1>}
                    {page?.content_type?.code != 'mobile_page' &&
                        <div style={{display:'flex' , gap:'10px'}}> 
                            <Button
                            type="primary"
                            icon={isMobileView ? <FundProjectionScreenOutlined /> : <MobileOutlined /> } 
                            onClick={() => {
                                setMainDivWidth(isMobileView ? '' : 306)
                                setIsMobileView(!isMobileView)
                            }}
                            >
                                {t('Toggel Mobile View')}
                            </Button>
                            <div style={{display:'flex' , gap:'10px' , alignItems:'center'}}>
                                <p>{t('width')}: </p>
                                <InputNumber style={{width:'100px'}} value={mainDivWidth} onBlur={(e) => setMainDivWidth(e.target.value)}/>
                            </div>
                        </div>
                    }
                    {page?.content_type?.code == 'page' || page?.content_type?.code == 'layout' ?
                        <div style={{display:'flex', gap:'10px' , marginLeft: lang == 'en' ? 'auto' : '' , marginRight: lang == 'ar' ? 'auto' : ''}}>
                                {page?.content_type?.code == 'page' ? 
                                    <Button icon={<FundProjectionScreenOutlined />} type="primary" onClick={() => {
                                        setSelectedElement(null)
                                        setIsView(!isView)
                                    }}>
                                        {isView ? t("Edit Mode") : t("Preview Site")}
                                    </Button>
                                : null}

                                {<Link target="_blank" to={`${page?.is_home_page ? '/' :  page?.path ? `/${page?.path == 'home-page' ? '' : page?.path}` : '/'}`}>
                                    <Button
                                    type="primary"
                                    icon={<AndroidOutlined /> } >
                                        {t('Go To Website')}
                                    </Button>
                                </Link>}

                            <Button loading={lod} onClick={handlePublishSite} icon={<CloudUploadOutlined />} type="primary">{t('Publish')}</Button>
                        </div>
                    : null}

                    {page?.content_type?.code == 'template' || page?.content_type?.code == 'mobile_template' ?
                    <div style={{display:'flex', gap:'10px' , marginLeft: lang == 'en' ? 'auto' : '' , marginRight: lang == 'ar' ? 'auto' : ''}}>
                        <Button loading={lod} onClick={handlePublishTemplate} icon={<CloudUploadOutlined />} type="primary">{t('Publish To Template Store')}</Button>
                    </div>
                    : null}
                </div>
            : null}
            <DndProvider backend={HTML5Backend}>
                <div 
                className={`w-full flex`}
                style={{
                    flexGrow:'1',
                    color: 'var(--font_dark)',
                }}
                >
                    <div
                        style={{
                            width: isView ? '100%' : isMobilePage ? '340px' : mainDivWidth ? `${mainDivWidth}px` : '' ,
                            display:'flex' , alignItems:'center' , 
                            flexDirection:'column',
                            position:'relative',
                            flexGrow:'1',
                            minWidth: 0,
                            overflow:'hidden'
                        }}
                        id={'main-mobile-page-container'}
                    >
                        {/* width:'338px', height: '640px' , */}
                        {isMobilePage && 
                            <img style={{position:'absolute', width:'375px' , height: '680px' , top:'0px' }} src={image_1}/>
                        }
                        <div
                            style={{
                            width: isMobilePage ? '340px' : mainDivWidth ? `${mainDivWidth}px` :  '100%' ,
                            display:'flex',
                            flexDirection:'column',
                            height: isMobilePage ? '640px' : '',
                            paddingTop: !isMobilePage && !isView ? '20px' : '',
                            overflowX: 'hidden',
                            position: 'relative',
                            borderRadius: isMobilePage ? '20px' : '0px',
                            marginTop: isMobilePage ? '18px' : ''
                            }}
                            id={'main-page-container'}
                            >
                                {isMobilePage && 
                                    <MobileTopBar />
                                }
                                {/* if page has a related layout will send a key renderLayout have all layout element*/}
                                {currentLayout && currentLayout?.related_childrens?.find(i => i.element_type?.code == 'page_body') ? 
                                    <PageBody 
                                        inLayout 
                                        renderLayout={[...currentLayout?.related_childrens]}
                                    />
                                : 
                                isMobilePage ? 
                                    <div style={{
                                        height:'600px',
                                        overflowY: 'scroll',
                                        paddingTop:'18px',
                                        display:'flex',
                                        gap:'5px',
                                        flexDirection:'column',
                                        paddingBottom:'5px',
                                        background: isMobilePage ? siteTheme?.mobile_bg_color : ''
                                        }}
                                        className={isMobilePage ? 'global-scroll-y-custom-mobile' : ''}
                                    >
                                        <PageBody firstParent key={page?.id} />
                                    </div>
                                :
                                    <PageBody firstParent key={page?.id} />
                                }
                                {isMobilePage && 
                                    <MobileBottomBar />
                                }
                        </div>
                    </div>
                    {/* the builder side bar for all Properties and settings */}
                    {!isView && <ElementsProperties />}
                </div>
            </DndProvider>
        </div>
    )
}

export default PageBuilder