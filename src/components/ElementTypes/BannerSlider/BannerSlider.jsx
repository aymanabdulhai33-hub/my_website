import React, { useRef } from 'react'
import usePage from '../../../contexts/usePage/usePage'
import useGetElementHideSize from '../../../hooks/useGetElementHideSize/useGetElementHideSize'
import * as S from '../styled'
import ElementSettingsWrapper from '../ElementSettingsWrapper/ElementSettingsWrapper'
import { buildTree, getAppCashDataFromLocalStorage, saveAppCashInLocalStorage, setUpDefaultBuilderStyle } from '../../../utility/globalFun'
import { Carousel, Empty } from 'antd'
import useTheme from '../../../contexts/useTheme/useTheme'
import LoadingSection from '../../LoadingSection/LoadingSection'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getPageData } from '../../../apiCall/get'
import CustomComponent from '../../DataDisplayTypes/CustomComponent'
import useLang from '../../../contexts/useLanguage/useLang'

const BannerSlider = ({element , isLayoutEle , isOver , canDrop , parent , drag}) => {

    const {isView , selectedElement , setSelectedElement , updatePageElement , getFieldCode , mainDivWidth , isMobilePage , pageData} = usePage()
    const {visible} = useGetElementHideSize({element})
    const {lang} = useLang()
    const {theme} = useTheme()
    const ref = useRef()
    var sectionData = pageData?.[element?.id]
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })


     const {data: componentData = getAppCashDataFromLocalStorage({keyName: `component_${element?.data_display_component?.id}`}) , isFetching , isLoading} = useQuery({
            queryKey: ['component' , element?.data_display_component?.id],
            queryFn: async () => {
                const res = await getPageData({modelCode: 'wsb_pages' , pageId: element?.data_display_component?.id})
                if(res?.data?.data?.[0]){
                    var newData = {...res?.data?.data?.[0]}
                    newData.related_childrens = buildTree(newData?.related_childrens)
                    saveAppCashInLocalStorage({keyName: `component_${element?.data_display_component?.id}` , data: newData})
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

  return (
    visible && 
        <S.Wrapper
        an={element?.animation_name}
        mainDivWidth={mainDivWidth}
        style={{
            ...allStyle,
            padding:0,
            margin:0,
            background:'',
            backgroundColor:'',
            backgroundImage:'',
            boxShadow: '',
            border: 'none'
        }}
        ref={!isView ? drag : null}
        >
            <div
            style={{
                ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement , isMobilePage , true),
            }} 
            onClick={(e)=>{
                if(!isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
            }}
            className={`${`${element?.assign_classname}` || ''}`}
            >

                <div style={{position: 'absolute' , top:'0px' , right:'0' , color: 'var(--builder-main)'}}>
                    <ElementSettingsWrapper drag={drag} parent={parent} element={element} isLayoutEle={isLayoutEle} />
                </div>

                    {/* <DataDisplay data={sectionData?.data?.data?.data} element={element}/> */}
                {element?.data_source_model && sectionData ?
                    sectionData?.status == "pending" && !sectionData?.data?.data ? 
                        <LoadingSection />
                    :
                    sectionData?.data?.data ?
                    <Carousel 
                    autoplay
                    >
                        {componentData && sectionData?.data?.data?.data?.map((item) => {
                            return(
                                <div key={item?.id}>
                                    <section style={{direction: lang == 'ar' ? 'rtl' : 'ltr'}}>
                                        <CustomComponent component={componentData} element={element} item={item}/>
                                    </section>
                                </div>
                            )
                        })}
                    </Carousel>
                    :
                        <Empty />
                    : null
                }
        </div>
    </S.Wrapper>
  )
}

export default BannerSlider