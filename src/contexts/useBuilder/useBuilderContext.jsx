import React , {createContext} from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { postGetPagesByType, postGetPagesModel, postGetTemplates, postGetTemplatesMenu } from "../../apiCall/post";
import { getAppModelsCache, getDevMode, getPageContentType } from "../../utility/globalFun";
import { getAppModels, getDataDisplayTypes, getElementTypes, getPageContentTypes, getPageIconTypes, getVariableTypes } from "../../apiCall/get";

export const BuilderProvider = createContext()

const BuilderContext = ({children , isView}) => {


    const {data: pagesModel , isFetching: isFetchingPagesModel} = useQuery({
        queryKey: ['components'],
        queryFn: async () => {
            return postGetPagesModel({modelCode: 'wsb_pages' , type: isContentTypeTemplate()})
        },
        placeholderData: keepPreviousData,
        enabled: isView ? false : true
        // staleTime: Infinity
    })

    const {data: templates , isFetching: isFetchingTemplates} = useQuery({
        queryKey: ['templates'],
        queryFn: async () => {
            return await postGetTemplates({body: [
                {
                  "operator": "=",
                  "value": 'mobile_template',
                  "join_op": "or",
                  "field": 'content_type'
                },
                {
                  "operator": "=",
                  "join_op": "and",
                  "value": 'template',
                  "field": 'content_type'
                }
              ]})
        },
        placeholderData: keepPreviousData,
        enabled: isView ? false : true
        // enabled: getDevMode() == '1' ? true : false,
    })

    const {data: templatesMenu , isFetching: isFetchingTemplatesMenu} = useQuery({
        queryKey: ['templates-menu'],
        queryFn: async () => {
            return await postGetTemplatesMenu({body: [
                {
                  "operator": "=",
                  "value": 'mobile_template',
                  "join_op": "or",
                  "field": 'content_type'
                },
                {
                  "operator": "=",
                  "join_op": "and",
                  "value": 'template',
                  "field": 'content_type'
                }
              ]})
        },
        placeholderData: keepPreviousData,
        enabled: isView ? false : true
        // enabled: getDevMode() == '1' ? true : false,
    })

    const {data: elemnetTypes , isFetching: isFetchingElemnetTypes} = useQuery({
        queryKey: ['elemnets'],
        queryFn: async () => {
            return await getElementTypes({fieldCode: 'element_type'})
        },
        placeholderData: keepPreviousData,
        enabled: isView ? false : true,
        staleTime: Infinity
    })

    const {data: pageContentTypes = getPageContentType() , isFetching: isFetchingPageContentType , isLoading: isLoadingPageContentTypes} = useQuery({
        queryKey: ['page_content_type'],
        queryFn: async () => {
            const res = await getPageContentTypes()
            if(res?.data){
                window.localStorage.setItem('page_content_type' , JSON.stringify(res))
            }
            return res
        },
        placeholderData: keepPreviousData,
        enabled: isView ? false : true,
        staleTime: Infinity
    })

    const {data: dataDisplayTypes , isFetching: isFetchingDataDisplayTypes} = useQuery({
        queryKey: ['data_display_type'],
        queryFn: async () => {
            return await getDataDisplayTypes()
        },
        placeholderData: keepPreviousData,
        enabled: isView ? false : true,
        staleTime: Infinity
    })


    
    const {data: pagesIconsTypes , isFetching: isFetchingPagesIconsTypes} = useQuery({
        queryKey: ['page_icons_type'],
        queryFn: async () => {
            return await getPageIconTypes()
        },
        placeholderData: keepPreviousData,
        enabled: isView ? false : true,
        staleTime: Infinity
    })

    const {data: variableTypes , isFetching: isFetchingVariableTypes} = useQuery({
        queryKey: ['variable_types'],
        queryFn: async () => {
            return await getVariableTypes()
        },
        placeholderData: keepPreviousData,
        enabled: pageContentTypes?.data && !isView ? true : false,
        staleTime: Infinity
    })
    

    const {data: Layouts , isFetching: isFetchingLayouts} = useQuery({
        queryKey: ['layouts'],
        queryFn: async () => {
            return postGetPagesByType({type: isContentTypeLayout()})
        },
        placeholderData: keepPreviousData,
        enabled: pageContentTypes?.data && !isView ? true : false
        // staleTime: Infinity
    })

    const {data: models = getAppModelsCache() , isLoading , isFetching: isFetchingModels} = useQuery({
        queryKey: ['app-models'],
        queryFn: async () => {
            const res = await getAppModels()
            if(res?.data){
                window.localStorage.setItem('app-models' , JSON.stringify(res))
            }
            return res
        },
        placeholderData: keepPreviousData,
        enabled: true,
        staleTime: Infinity
    })
    

    const isContentTypePage = () => {
        return pageContentTypes?.data?.field_options?.find(i => i?.code == 'page')?.id
    }

    const isContentTypeMobilePage = () => {
        return pageContentTypes?.data?.field_options?.find(i => i?.code == 'mobile_page')?.id
    }

    const isContentTypeTemplate = () => {
        return pageContentTypes?.data?.field_options?.find(i => i?.code == 'template')?.id
    }

    const isContentTypeMobileTemplate = () => {
        return pageContentTypes?.data?.field_options?.find(i => i?.code == 'mobile_template')?.id
    }

    const isContentTypeLayout = () => {
        return pageContentTypes?.data?.field_options?.find(i => i?.code == 'layout')?.id
    }

    const isContentTypeComponent = () => {
        return pageContentTypes?.data?.field_options?.find(i => i?.code == 'custom_dynamic_component')?.id
    }

    return(
        (isLoadingPageContentTypes && pageContentTypes) || pageContentTypes || isView ? 
        <BuilderProvider.Provider value={{
            pagesModel,
            Layouts,
            isFetchingPagesModel,
            isFetchingLayouts,
            templates,
            isFetchingTemplates,
            elemnetTypes,
            isFetchingElemnetTypes,
            pagesIconsTypes,
            pageContentTypes,
            isLoadingPageContentTypes,
            dataDisplayTypes,
            isFetchingDataDisplayTypes,
            models,
            isFetchingModels,
            templatesMenu,
            isFetchingTemplatesMenu,
            isContentTypePage,
            isContentTypeMobilePage,
            isContentTypeTemplate,
            isContentTypeMobileTemplate,
            isContentTypeLayout,
            isContentTypeComponent,
            isFetchingVariableTypes,
            variableTypes
        }}
        >
            {children}
        </BuilderProvider.Provider>
        : null
    )
}

export default BuilderContext