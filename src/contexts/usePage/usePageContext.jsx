import React, { createContext ,useEffect, useRef, useState } from "react";
import usePageData from "../../hooks/usePageData/usePageData";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllWebSite, getAssetsModel, getElementTypes, getEventActionsTypes, getItem, getItemData, getPageData, getTextFieldInfo } from "../../apiCall/get";
import LoadingSection from "../../components/LoadingSection/LoadingSection";
import NotFound from "../../pages/404/404";
import { CopyWebBuilderTemplate, CopyWebBuilderTemplateCrossApps, postAddNewElement, postAddNewElementItem, postAddNewElementProperty, postAddNewEvent, postAddNewPageVariable, postGetComponent, postPublishSite } from "../../apiCall/post";
import { buildTree, createMSG } from "../../utility/globalFun";
import { delElement } from "../../apiCall/del";
import { t } from "i18next";
import { putEditElement, putEditElementItem, putEditElementProperty, putEditEvent, putEditPageVariable, putUpdateCache } from "../../apiCall/put";
import { Empty } from "antd";
import { getFieldByTemplateCode, getFieldCodeKey } from "../../utility/fieldsConfig";
import useLang from "../useLanguage/useLang";
import { StringParam, useQueryParam } from "use-query-params";
import useBuilder from "../useBuilder/useBuilder";
import useWebSite from "../useWebSite/useWebSite";

export const PageProvider = createContext()

const PageContext = ({children , pageId , cureentPage , isView: ViewMode , isTemplateEditor}) => {
    // pageId => if in build page mode the pageId will till which page is the cureent
    // cureentPage => if view page mode the cureentPage will give all page info to render
    // isView => is view mode => (not build mode)
    // isTemplateEditor => dev only for creating a new Templates
    const [isView , setIsView] = useState(ViewMode)
    const {lang} = useLang()
    
    const [itemId] = useQueryParam('item_id' , StringParam)
    // itemId =>  if page has item_id param in url that mean the page will have this item through all levels as global item

    const [itemModelId] = useQueryParam('model_id' , StringParam)
    // itemModelId => the model are related to this item ${itemId}

    const {isContentTypePage , isContentTypeLayout , isContentTypeComponent} = useBuilder()
    const {isFetchingSiteCacheData , siteCacheData} = useWebSite()
    
    // open mobile side bar 
    const [openMobileSideBar , setOpenMobileSideBar] = useState(false)

    // loopInDeepFroAllKeys => here we loop for all keys and all depth are need it to switch all keys from main models to Template models keys for building Templates
    var loopInDeepFroAllKeys = (obj) => {
        var newObj = {}
        Object.keys(obj)?.map((key) => {
            if(getFieldByTemplateCode(key)){
                newObj[getFieldByTemplateCode(key)] = obj[key]
                if(Array.isArray(obj[key])){
                    newObj[getFieldByTemplateCode(key)] = newObj[getFieldByTemplateCode(key)]?.map((item) => {
                        return loopInDeepFroAllKeys(item)
                    })
                }else if(typeof obj[key] == 'object' && obj[key]){
                    newObj[getFieldByTemplateCode(key)] = loopInDeepFroAllKeys(obj[key])
                }
            }else{
                newObj[key] = obj[key]
            }
        })
        return newObj
    }

    // getFieldCode => to get the cureent field code depend on ${isTemplateEditor} => "discovered up"
    const getFieldCode = (code) => {
        return getFieldCodeKey({code , isTemplateEditor})
    }

    // setUpDataKeys if isTemplateEditor is true we prepare the keys using ${loopInDeepFroAllKeys} => "discovered up" if not return normal data
    const setUpDataKeys = (data) => {
        if(isTemplateEditor){
            var newDataKeys = {...data}
            newDataKeys.related_childrens = newDataKeys?.related_childrens_tpl?.map((obj) => {
                return loopInDeepFroAllKeys(obj)
            })
            return newDataKeys
        }
        return data
    }

    // setUpdataTree => return a tree data build by ${buildTree} function to redy for display
    const setUpdataTree = (newData , isLayout) => {
        var data = setUpDataKeys(newData)
        return buildTree(data?.related_childrens , isLayout)
    }


    var id = cureentPage?.id || pageId
    // pageInfo the cureen page data get by the id 
    const {data: pageInfo , isFetching} = useQuery({
        queryKey: ['page' , id],
        queryFn: async () => {
            // if ${cureentPage} that mean we will not get new data will just prepare the data
            if(cureentPage){
                var newData = {...cureentPage}
                // setElements will use to cache all page element for fast update purposes ${handleUpDateData} => "discovered down"
                setElements(cureentPage.related_childrens)
                newData.related_childrens = setUpdataTree(newData)
                setPage(newData)
                return {data : {
                    data: [
                        cureentPage
                    ]
                }}
            }
            // if not ${cureentPage} that mean we will get the page data form api and then prepare it
            const res = await getPageData({pageId , modelCode: 'wsb_pages' , isTemplateEditor })
            if(res?.data?.data?.[0]){
                var newData = {...res?.data?.data?.[0]}
                setElements(res?.data?.data?.[0]?.related_childrens || res?.data?.data?.[0]?.related_childrens_tpl || [])
                newData.related_childrens = setUpdataTree(newData)
                setPage(newData)
            }
            return res
        },
        placeholderData: keepPreviousData,
        retry: false,
        enabled: !isView ? true : false,
    })
    
    // handleSetUpPage => if you are alrady visit the page will gave default value for ${setPage} state
    const handleSetUpPage = (data , isLayout) => {
        if(data){
            var newData = {...data}
            // .reverse()
            newData.related_childrens = isLayout ? setUpdataTree(newData , isLayout) : setUpdataTree(newData)
            return newData
        }else{
            return null
        }
    }
    
    // page => the state has all page data inside of it
    const [page , setPage] = useState(cureentPage ? handleSetUpPage(cureentPage) : handleSetUpPage(pageInfo?.data?.data?.[0]))
    // page => the state has all page element inside of it
    const [elements , setElements] = useState(pageInfo?.related_childrens || pageInfo?.related_childrens_tpl || [])
    // mainDivWidth => if dev will use this state for fake screen size change
    const [mainDivWidth , setMainDivWidth] = useState('')
    // elemnetTypes => is the main root element the builder have 
    const {data: elemnetTypes , isFetching: isFetchingElemnetTypes} = useQuery({
        queryKey: ['elemnet_types' , {isTemplateEditor}],
        queryFn: async () => {
            return await getElementTypes({fieldCode: getFieldCode('element_type')})
        },
        enabled: !isView ? true : false,
        placeholderData: keepPreviousData
    })
    // eventActionsTypes => the the ready supported actions types
    const {data: eventActionsTypes , isFetching: isFetchingEventActionsTypes} = useQuery({
        queryKey: ['event_actions_types'],
        queryFn: async () => {
            return await getEventActionsTypes()
        },
        enabled: !isView ? true : false,
        staleTime: Infinity,
        placeholderData: keepPreviousData
    })
    // TextField => we need this field info for translate purposes
    const {data: TextField , isLoading: isLoadingTextField} = useQuery({
        queryKey: ['TextField'],
        queryFn: async () => {
            const res = await getTextFieldInfo({fieldCode: getFieldCode('text')})
            return res?.data
        },
        // staleTime: Infinity,
        enabled: !isView ? true : false,
        placeholderData: keepPreviousData
    })
    
    // assets => all the assets has been already stored in dashboard "images mainly"
    const {data: assets , isLoading: isLoadingAssets} = useQuery({
        queryKey: ['assets'],
        queryFn: async () => {
            const res = await getAssetsModel()
            return res?.data
        },
        enabled: !isView ? true : false,
        // staleTime: Infinity,
        placeholderData: keepPreviousData
    })
    
    // itemData => is the global item by ${itemId} "discovered up"
    const {data: itemData , isLoading: isLoadingItemData} = useQuery({
        queryKey: ['item-data' , itemId],
        queryFn: async () => {
            const res = await getItem({id: itemId , lang , itemModelId})
            return res?.data
        },
        enabled: itemId && itemModelId ? true : false,
        placeholderData: keepPreviousData
    })

    // customComponents => the component the user has build using the builder 
    const {data: customComponents , isFetching: isFetchingCustomComponents} = useQuery({
        queryKey: ['component' , {isTemplateEditor}],
        queryFn: async () => {
            const res = await postGetComponent({type: isContentTypeComponent()})
            return res
        },
        placeholderData: keepPreviousData,
        enabled: !isView && !isTemplateEditor ? true : false,
    })
    
    // handleUpDateData => after update an element you should call this function to fast update all data
    const handleUpDateData = (newEle , ele_id , isDel) => {
        var newData = {...page}
        var newEles = [...elements]
        if(isDel){
            newEles = newEles.filter(i => i?.id != ele_id)
        }else if(ele_id){
           var index = newEles.findIndex(x => x.id == ele_id)
           newEles[index] = newEle
        }else{
            newEles.push(newEle)
        }
        
        if(isTemplateEditor){
            newData.related_childrens_tpl = newEles
        }else{
            newData.related_childrens = newEles
        }
        
        if(isTemplateEditor){
            newData = setUpDataKeys(newData)
        }
        newData.related_childrens = setUpdataTree(newData)
        setElements([...newEles])
        setPage(newData)
    }

    const queryClient = useQueryClient()
    // selectedElement => is cureent element the user has selected to customize it
    const [selectedElement , setSelectedElement] = useState(null)
    // selectedElementRef => not so important just for fix some strange behavior on every update
    const selectedElementRef = useRef(null);
    // isMobileView => if useing mobile view in the web for responsive design
    const [isMobileView , setIsMobileView] = useState(false)
    // pageData => all api get data in page for only data list => "me and the death I will show up in the front end" will be stored here
    const { pageData } = usePageData({page: cureentPage || pageInfo?.data?.data?.[0]})
    // currentLayout => if the cureent page has related layout 
    var currentLayout = page?.related_layout ? handleSetUpPage(page?.related_layout , true) : null
    // pageVariables => if the cureent page or componnet have some variables for assign object key purposes "most used in components has been build by the Builder"
    var pageVariables = page?.related_variables || []

    // addElementToPage => add new elemet to the page and fast update, any new element will use this function to add
    const addElementToPage = async ({newEle , parent}) => {
        var eleType = elemnetTypes?.data?.field_options?.find(i => i.code == `${newEle?.type}${isTemplateEditor ? '_tpl' : ''}`) || 
        (newEle?.type == 'custom_dynamic_component' ? elemnetTypes?.data?.field_options?.find(i => i.code == `component${isTemplateEditor ? '_tpl' : ''}`) : null)
        if(!eleType){
            createMSG({type: 'info' , duration: 3 , content: t('type is not exist')})
            return
        }

        createMSG({key: 'add-new-ele'})
        var sendData = {
            [getFieldCode('element_type')]: eleType?.id,
            [getFieldCode('related_page')]: page?.id,
            ...(parent ?
                {[getFieldCode('parent')]: parent?.id}
            : {}),
            ...(newEle?.componnet ? 
            {related_component: newEle?.componnet?.id}
            : 
            {}),
        }
    
        const res = await postAddNewElement({sendData , modelCode: getFieldCode('child_elem')})
        if(res){
            handleUpDateData(res?.data?.data?.[0])
        }

        createMSG({destroy: true , key: 'add-new-ele'})
    }

    // updateElementPropertyById => update element Property ("css Property style") using the id if the element
    var updateElementPropertyById = async ({element , value , property}) => {
        var time = Date.now()
        createMSG({key: `update-property-${time}`})
        var sendData = {
            [getFieldCode('value')]: value,
            ...(!property?.id ? 
            {[getFieldCode('property_name')]: property?.name}
            : {}),
            ...(!property?.id ? 
            {[getFieldCode('related_children')]: element?.id}
            : {})
        }

        if(property?.id){
            var res
            res = await putEditElementProperty({sendData , id: property?.id , modelCode: getFieldCode('child_prop_val')})
                if(res?.data?.data?.[0]){
                    handleUpDateData(res?.data?.data?.[0] , element?.id)
                }
        }else{
            const res = await postAddNewElementProperty({sendData , modelCode: getFieldCode('child_prop_val')})
            if(res?.data?.data?.[0]){
                handleUpDateData(res?.data?.data?.[0] , element?.id)
            }
        }

        createMSG({destroy: true , key: `update-property-${time}`})
    }

    // updatePageElement => any element will use this function to update everything about it "except for CSS Property will use updateElementPropertyById" "discovered up"
    const updatePageElement = async ({ element , dataObject }) => {
        createMSG({key: `update-element`})
        const res = await putEditElement({id: element.id , sendData: dataObject , modelCode: getFieldCode('child_elem') })
        if(res?.data?.data?.[0]){
            handleUpDateData(res?.data?.data?.[0] , element?.id)
        }
        createMSG({destroy: true , key: `update-element`})
    }

    // deleteElementById => all element use this function to delete
    var deleteElementById = async (element) => {
        if(!element?.id){
            return
        }
        createMSG({key: `del-ele-${element?.id}`})
        const res = await delElement({id: element?.id})
        if(res){
            handleUpDateData(res?.data?.data?.[0] , element?.id , true)
        }
        if(element?.id == selectedElementRef?.current?.id){
            setSelectedElement(null)
        }
        createMSG({destroy: true , key: `del-ele-${element?.id}`})
    }

    // deleteItemById => to delete item ("item are the related for element like dropdown items and so on")
    var deleteItemById = async (item , element) => {
        if(!item?.id){
            return
        }
        createMSG({key: `del-ele-${item?.id}`})
        const res = await delElement({id: item?.id})
        if(res){
            var newItem = {...element}
            newItem.items = newItem?.items?.filter(i => i?.id != item?.id)
            handleUpDateData(newItem , element?.id)
        }
        createMSG({destroy: true , key: `del-ele-${item?.id}`})
    }

    // deleteEventsById => evere element can have Events and will use this function to delete it
    var deleteEventsById = async (item , element) => {
        if(!item?.id){
            return
        }
        createMSG({key: `del-ele-${item?.id}`})
        const res = await delElement({id: item?.id})
        if(res){
            var newItem = {...element}
            newItem.related_events = newItem?.related_events?.filter(i => i?.id != item?.id)
            handleUpDateData(newItem , element?.id)
        }
        createMSG({destroy: true , key: `del-ele-${item?.id}`})
    }

    // addElementItems => add new items to element ("item are the related for element like dropdown items and so on")
    const addElementItems = async (sendData , id , element) => {
        createMSG({key:'add new item'})
    var res
        if(id){
           res = await putEditElementItem({sendData , id , modelCode: getFieldCode('element_items')})
        }else{
           res = await postAddNewElementItem({sendData , modelCode: getFieldCode('element_items')})
        }
        if(res?.data?.data?.[0]){
            handleUpDateData(res?.data?.data?.[0] , element?.id)
        }
        createMSG({key:'add new item' , destroy: true})
    }
    
    // addNewPageVariable => to add page Variable mostly will be using the component and for assigned key object purposes
    const addNewPageVariable = async ({variable , id}) => {
        createMSG({key:'add new variable'})
        var sendData = {
            ...variable,
            page: page?.id
        }

        var res

        if(id){
            res = await putEditPageVariable({sendData , id , modelCode: getFieldCode('variables')})
        }else{
            res = await postAddNewPageVariable({sendData})
        }
        
        if(res?.data){
            queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        }
        createMSG({key:'add new variable' , destroy: true})
    }
        
    // publishSite => after you done from create the all website this function will get all page and catch them in the model in the dashboard for fast render purposes
    const publishSite = async () => {
        createMSG({key:'publish-site'})
        var body = [
            { field: "content_type", join_op: "or", operator: "=", value: isContentTypePage() },
            { field: "content_type", join_op: "or", operator: "=", value: isContentTypeLayout() },
            { field: "content_type", join_op: "or", operator: "=", value: isContentTypeComponent() },
        ]
        const res = await getAllWebSite({modelCode: 'wsb_pages' , body})
        if(res?.data?.data){

            const updateCache = siteCacheData?.data?.data?.[0] ? 
            await putUpdateCache({sendData: {
                data_cache: JSON.stringify(res?.data)
            },
            id: siteCacheData?.data?.data?.[0]?.id
            })

            : await postPublishSite({sendData: {
                data_cache: JSON.stringify(res?.data)
            }})
            queryClient.invalidateQueries({queryKey: ['AllSite']})
        }
        createMSG({key:'publish-site' , destroy: true})
    }

    // AddNewEvent => you can event for button like open model or open side bar or logout event or change lang
    const AddNewEvent = async (sendData , element) => {
        const res = await postAddNewEvent({sendData})
        if(res?.data?.data?.[0]){
            handleUpDateData(res?.data?.data?.[0] , element?.id)
        }
    }
    // UpdateElementEvent => "discovered up"
    const UpdateElementEvent = async (sendData , id , element) => {
        createMSG({key:`edit-event-${id}`})
        const res = await putEditEvent({sendData , id})
        if(res?.data?.data?.[0]){
            handleUpDateData(res?.data?.data?.[0] , element?.id)
        }
        createMSG({key:`edit-event-${id}` , destroy: true})
    }

    // addWebBuilderTemplate => if you want to add a template to your page you can add it by using this function
    const addWebBuilderTemplate = async (sendData) => {
        createMSG({key:'copy-template'})
        const res = await CopyWebBuilderTemplateCrossApps({sendData: {...sendData , source_server_id: 3} })
        if(res?.data?.data?.[0]){
            var newData = {...res?.data?.data?.[0]}
            setElements([...newData.related_childrens])
            newData.related_childrens = setUpdataTree(newData)
            setPage(newData)
        }
        createMSG({key:'copy-template' , destroy: true})
    }

    useEffect(() => {
        // discovered up
        selectedElementRef.current = selectedElement;
    }, [selectedElement]);
    

    useEffect(() => {
        if(cureentPage){
            var newData = {...cureentPage}
            newData.related_childrens = setUpdataTree(newData)
            setPage(newData)
        }
    }, [cureentPage]);

   return(
    (isFetching && !page) ? <LoadingSection/> : page ?
    page?.related_layout && !currentLayout ? <Empty /> :
    <PageProvider.Provider value={{
    addElementToPage,
    setSelectedElement,
    updatePageElement,
    updateElementPropertyById,
    deleteElementById,
    setIsMobileView,
    addNewPageVariable,
    addElementItems,
    deleteEventsById,
    deleteItemById,
    setPage,
    publishSite,
    setMainDivWidth,
    getFieldCode,
    addWebBuilderTemplate,
    AddNewEvent,
    UpdateElementEvent,
    page,
    pageId: id,
    selectedElement,
    pageData,
    isLayout: page?.content_type?.code == 'layout',
    currentLayout,
    pageVariables,
    isMobileView,
    isView,
    elemnetTypes,
    isFetchingElemnetTypes,
    customComponents,
    isFetchingCustomComponents,
    isMobilePage: page?.content_type?.code == 'mobile_page',
    mainDivWidth,
    eventActionsTypes,
    isFetchingEventActionsTypes,
    isTemplateEditor,
    isLoadingTextField,
    TextField,
    assets,
    isLoadingAssets,
    itemId,
    itemData,
    itemModelId,
    isLoadingItemData,
    openMobileSideBar,
    setOpenMobileSideBar,
    setIsView
    }}
    >
        {children}
    </PageProvider.Provider> : <NotFound />
   )
}

export default PageContext