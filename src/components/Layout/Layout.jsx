import React, { useEffect } from "react";
import {Outlet, useNavigate, useParams} from 'react-router-dom'
import Header from "../Header/Header";
import useUser from "../../contexts/useUser/useUser";
import BuilderContext from "../../contexts/useBuilder/useBuilderContext";
import useBuilder from "../../contexts/useBuilder/useBuilder";
import { Menu } from "antd";
import { getDevMode, getShowComponents } from "../../utility/globalFun";
import { CopyOutlined, MoreOutlined } from "@ant-design/icons";
import PagesMenu from "../AdminComponents/PagesMenu";
import useTheme from "../../contexts/useTheme/useTheme";

const Layout = () => {

    return(
        <BuilderContext>
            <LayoutContent />
        </BuilderContext>
    )
}

const LayoutContent = () => {
    const {userAdmin} = useUser()
    const {pageId} = useParams()
    const navigate = useNavigate()
    const {showComponents} = useTheme()
    const {templates , isFetchingTemplates , pagesModel , templatesMenu , isFetchingTemplatesMenu} = useBuilder()

    useEffect(() => {
        if(!userAdmin){
            navigate('/admin/login')
        }
    },[userAdmin])

    var AllTemplates = getDevMode() == '1' ? templatesMenu?.data?.data?.data : null

    var data = showComponents == 1 && pagesModel?.data?.data?.data?.filter(i => i?.content_type?.code == 'custom_dynamic_component')
    return(
        userAdmin && 
        <div className={'flex flex-col min-h-screen'}>
            <Header />
            {showComponents == '1' && data &&
            <div style={{background: `var(--builder-bg-color)` , height:'40px' , borderBottom:'1px solid var(--builder-light-gray)'}} className={'flex justify-between items-center px-2 py-0.5 gap-2.5'}>
                <PagesMenu isTemplates data={data} isLoading={isFetchingTemplates} />
            </div>}
            {getDevMode() == '1' && AllTemplates && 
            <div 
            style={{background: `var(--builder-bg-color)` , height:'40px' , borderBottom:'1px solid var(--builder-light-gray)'}} 
            className={'flex justify-between items-center px-2 py-0.5 gap-2.5'}>
                <PagesMenu width={'100%'} isTemplates data={AllTemplates} isLoading={isFetchingTemplatesMenu} />
            </div>}
            <div className="min-h-600 flex items-stretch flex-1">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout