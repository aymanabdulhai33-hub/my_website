import { Empty } from "antd";
import React, { useState } from "react";
import { buildTree, getLocalStorageData } from "../../utility/globalFun";
import CustomComponent from "../DataDisplayTypes/CustomComponent";
import { getPageData } from "../../apiCall/get";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import usePage from "../../contexts/usePage/usePage";

const DisplayLocalStorageData = ({element , setParentsModel }) => {

    const {isView} = usePage()
    const [LocalStorageData , setLocalStorageData] = useState(getLocalStorageData(element?.local_storage_code))

    var assigned_fields = element?.assigned_fields ? JSON.parse(element?.assigned_fields) : null

    const {data: componentData , isFetching , isLoading} = useQuery({
        queryKey: ['component' , element?.data_display_component?.id],
        queryFn: async () => {
            const res = await getPageData({modelCode: 'wsb_pages' , pageId: element?.data_display_component?.id})
            if(res?.data?.data?.[0]){
                var newData = {...res?.data?.data?.[0]}
                newData.related_childrens = buildTree(newData?.related_childrens)
                return newData
            }
            return null
        },
        enabled: element?.data_display_component?.id ? true : false,
        placeholderData: keepPreviousData,
        ...(isView ?
            {staleTime: Infinity}
        : {})

    })

    return(
        LocalStorageData ? LocalStorageData?.map((item) => {
            return(
                element?.data_display_type?.code == 'custom_component' ? 
                <CustomComponent setStorageState={setLocalStorageData} key={item?.unique_id} setParentsModel={setParentsModel} component={componentData} element={element} item={item}/>
                :
                <div key={item?.unique_id}>
                    {item?.name_test}
                </div>
            )
        })
        : 
        <Empty />
    )
}

export default DisplayLocalStorageData