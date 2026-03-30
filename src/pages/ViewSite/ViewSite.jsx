import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageContext from "../../contexts/usePage/usePageContext";
import PageBuilder from "../../components/PageBuilder/PageBuilder";
import NotFound from "../404/404";
import useWebSite from "../../contexts/useWebSite/useWebSite";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../contexts/useUser/useUser";
import BuilderContext from "../../contexts/useBuilder/useBuilderContext";
import { StringParam, useQueryParam } from "use-query-params";



const ViewSite = () => {
    const {pageName} = useParams()
    const location = useLocation()
    const {siteCacheData , isFetchingSiteCacheData} = useWebSite()
    const [token , setToken] = useQueryParam('token' , StringParam)
    const [sId , setSid] = useQueryParam('s_id' , StringParam)
    const {user} = useUser()
    const hasTwoSlashes = (str) => {
        let parts = str.split('/');
        return parts.length > 2;
    }
    
    // const {} = useQuery({
    //     queryKey: ['smer'],
    //     queryFn: async () => {
    //         return await getTestFullBack()
    //     }
    // })

    const handleSetDefaultPage = () => {
        var SiteCache = siteCacheData?.data?.data?.[0]?.data_cache ? JSON.parse(siteCacheData?.data?.data?.[0]?.data_cache) : null
        var selectedCureentPage = !pageName && !hasTwoSlashes(location?.pathname) ? SiteCache?.data?.data?.find(i => i.path == 'home-page' || i?.is_home_page) : SiteCache?.data?.data?.find(i => i.path == pageName && i.content_type?.code == 'page')
        selectedCureentPage = selectedCureentPage?.user_permission && !user ? null : selectedCureentPage
        return selectedCureentPage || null
    }

    const [cureentPage , setCureentPage] = useState(handleSetDefaultPage())

    useEffect(() => {
        if(sId && token){
            window.location = `/admin/login?s_id=${sId}&token=${token}`
        }
        window.scrollTo(0,0)
    },[pageName])

    useEffect(() => {
        setCureentPage(handleSetDefaultPage())
    },[siteCacheData , pageName , location?.pathname])

    return(
        !siteCacheData && isFetchingSiteCacheData ? null :
        cureentPage ?
        <BuilderContext key={cureentPage?.id} isView>
            <PageContext key={`${cureentPage?.page_name}-${cureentPage?.path}`} isView cureentPage={cureentPage}>
                <PageBuilder />
            </PageContext> 
        </BuilderContext>
        : <NotFound />
    )
}

export default ViewSite