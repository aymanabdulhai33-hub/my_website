import React, { useState } from "react";
import { getModelData } from "../../apiCall/get";
import { keepPreviousData, useQueries, useQueryClient } from "@tanstack/react-query";
import useLang from "../../contexts/useLanguage/useLang";
import { getSearchData } from "../../apiCall/post";
import { useSearchParams } from "react-router-dom";
import { getAppCashDataFromLocalStorage, saveAppCashInLocalStorage } from "../../utility/globalFun";

const usePageData = ({page}) => {
    const {lang} = useLang()
    const [searchParams] = useSearchParams()
    const params = Object.fromEntries([...searchParams]);
    var getAllElementWithDataSource = (elements) => {
        var array = []
        elements?.map((i) => {
            if(i?.data_source_model && i?.element_type?.code != 'model_wizard' && i?.element_type?.code != 'model_form'){
                array.push(i)
            }
        })

        return array
    }
    var api_source = getAllElementWithDataSource(page?.related_childrens) || []
   
    const queryClient = useQueryClient()

    const res = useQueries({
        queries: api_source && api_source?.length > 0 ? api_source?.map(section => {
            
          return {
            queryKey: [`model-data`, 
                {model: section?.data_source_model},
                {section: section?.id},
                {data_display_type: section?.data_display_type?.id},
                {lang: lang},
                {displayed_fields: section?.displayed_fields},
                {assigned_fields: section?.assigned_fields}
            ],
            queryFn: async () => {
                var data
                if(section?.applied_filters){
                    var filters
                    try{
                        filters = JSON?.parse(section?.applied_filters)
                    }catch(e){
                        filters = null
                    }

                    var body = filters?.filters?.map((field) => {
                        return{
                            field: field?.field?.id,
                            operator: field?.operator,
                            value: field?.value_type == "url_value" ? (params?.[field?.value] || '') : field?.value
                        }
                    })
                    data = filters ? await getSearchData({modelId: section?.data_source_model , body , lang}) : await getModelData({modelId: section?.data_source_model , lang})
                }else{
                    data = await getModelData({modelId: section?.data_source_model , lang})
                }
                
                return data
            },
            // staleTime: Infinity,
            placeholderData: keepPreviousData
          }
        }) : []
    })
    const queryCache = queryClient.getQueryCache()
    const pageData = {}

    queryCache.getAll()?.filter(cache => cache.queryKey.includes('model-data'))?.map((obj) => {
        if(obj?.queryKey?.find(i => i?.lang == lang)){
            // if(api_source?.find(i => i?.id == obj?.queryKey?.[2]?.section)?.data_display_component?.id == obj?.queryKey[3]?.byFieldCode){
            // }
            pageData[obj?.queryKey?.[2]?.section] = obj?.state
            if(obj?.state?.data){
                saveAppCashInLocalStorage({data: obj?.state , keyName: `model-data_${obj?.queryKey?.[2]?.section}_${lang}`})
            }
        }
        if(obj?.state.status == 'pending' && getAppCashDataFromLocalStorage({keyName: `model-data_${obj?.queryKey?.[2]?.section}_${lang}`})){
            pageData[obj?.queryKey?.[2]?.section] = getAppCashDataFromLocalStorage({keyName: `model-data_${obj?.queryKey?.[2]?.section}_${lang}`})
        }
    })

    return page ? {
        pageData
    } : {}
}

export default usePageData