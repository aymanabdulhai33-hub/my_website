import { keepPreviousData, useQuery } from "@tanstack/react-query"
import React, { createContext } from "react"
import { getSiteCache } from "../../apiCall/get"
import { getAppCashDataFromLocalStorage, saveAppCashInLocalStorage } from "../../utility/globalFun"


export const WebSiteProvider = createContext()

const WebSiteContext = ({children}) => {
    const {data: siteCacheData = getAppCashDataFromLocalStorage({keyName: 'AllSite'}) , isFetching: isFetchingSiteCacheData , isLoading: isLoadingSiteCacheData} = useQuery({
        queryKey: ['AllSite'],
        queryFn: async () => {
            const res =  await getSiteCache()
            if(res){
                saveAppCashInLocalStorage({data: res , keyName: 'AllSite'})
            }
            return res
        },
        // staleTime: Infinity,
        placeholderData: keepPreviousData
    })
    
    return(
        <WebSiteProvider.Provider value={{siteCacheData , isLoadingSiteCacheData , isFetchingSiteCacheData}}>
            {children}
        </WebSiteProvider.Provider>
    )

}

export default WebSiteContext