import React, { useEffect, useRef } from "react";
import usePage from "../../../contexts/usePage/usePage";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'
import {setUpDefaultBuilderStyle, setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { getModelFields } from "../../../apiCall/get";
import LoadingSection from "../../LoadingSection/LoadingSection";
import { Tooltip } from "antd";
import useLang from "../../../contexts/useLanguage/useLang";
import { t } from "i18next";
import { SyncOutlined } from "@ant-design/icons";
import RenderModelFields from "../../RenderModelFields/RenderModelFields";
import DataForm from "../../RenderModelFields/DataForm";

const ModelFrom = ({element , isLayoutEle , isOver , canDrop , parent , drag , isMobile , item , setParentsModel , dragPreview}) => {

    const {isView , selectedElement , setSelectedElement , updatePageElement , getFieldCode , mainDivWidth , itemData} = usePage()

    // itemData comming from url params => api req
    // item comming from cureent item in list

    const {visible} = useGetElementHideSize({element})
    const {lang} = useLang()
    const ref = useRef()
    const queryClient = useQueryClient()
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })


    const handleChangeInner = (e) => {
        var value = e.target.textContent
        if(value == element?.[`text${lang != 'en' ? `_${lang}` : ''}`] || value == 'hi im Title' || isView){
            return
        }
        updatePageElement({element: element , dataObject: {
            [`${getFieldCode('text')}${lang != 'en' ? `_${lang}` : ''}`]: value
        } })
    }

    const {data , isLoading , isFetching} = useQuery({
        queryKey: [{element_id: element?.id , model: element?.data_source_model}],
        queryFn: async () => {
            return await getModelFields({model_id: element?.data_source_model})
        },
        enabled: element?.data_source_model ? true : false,
        staleTime: Infinity,
        placeholderData: keepPreviousData
    })


    useEffect(() => {
        if(dragPreview){
            dragPreview(ref)
        }
    },[])

    return(
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
        ref={ref}
        >
            <div
            style={{
                ...(isMobile ?
                    {
                        ...setUpDefaultMobileBuilderStyle(element , selectedElement)
                    }
                : {
                    ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement),
                }
                ),
                ...(isLoading ?
                    {
                        boxShadow:'none',
                    }
                : {}),
                ...(isMobile ?
                    {
                        padding: 5,
                    }
                : {}),
            }} 
            onClick={(e)=>{
                if(!isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
            }}
            >
                <div style={{position: 'absolute' , top:'0px' , right:'0' , color: 'var(--builder-main)'}}>
                    <ElementSettingsWrapper drag={drag} isForm={!isMobile} parent={parent} element={element} isLayoutEle={isLayoutEle} />
                </div>

                    {!element?.data_source_model && isMobile ? 'FORM' : isLoading ? <LoadingSection/> :
                        data?.data && <div>
                            {!isView &&
                            <Tooltip title={t('update form fields')}>
                                <div 
                                onClick={() => {
                                    queryClient.invalidateQueries({queryKey: [{element_id: element?.id , model: element?.data_source_model}]})
                                }}
                                style={{position:'absolute' , cursor:'pointer' , top:'-25px' , left:"0" , borderRadius: '4px' , 
                                border:'2px solid var(--builder-main)' , 
                                padding:"4px" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                    <SyncOutlined spin={isFetching} />
                                </div>
                            </Tooltip>
                            }
                            
                            <h2
                                suppressContentEditableWarning={true}  
                                onBlur={(e) => handleChangeInner(e)}
                                contentEditable={!isView && !isLayoutEle && true}
                                style={{fontWeight:'bold' , fontSize:'20px' , marginBottom:'5px'}}
                            >
                                {(lang == 'en' ? (element?.text || (isView ? '' : 'hi im Title')) : (element?.[`text_${lang}`] || element?.text || (isView ? '' : 'hi im Title') ) )}
                            </h2>

                            {element?.form_update_item?.code == 'url_parameter' && !itemData?.data?.[0]  ? 
                            <LoadingSection />
                            :
                            <DataForm 
                            setParentsModel={setParentsModel} 
                            currentItem={element?.form_update_item?.code == 'url_parameter' ? itemData?.data?.[0] : item}
                            isMobile={isMobile} 
                            element={element} 
                            fields={data?.data}
                            >
                                <RenderModelFields isMobile={isMobile} element={element} fields={data?.data}/>
                            </DataForm>}
                        </div>
                    }
                
            </div>

        </S.Wrapper>
    )
}

export default ModelFrom