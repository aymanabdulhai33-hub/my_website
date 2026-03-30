import React, { useEffect, useMemo, useRef, useState } from "react";
import usePage from "../../../contexts/usePage/usePage";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'
import { setUpDefaultBuilderStyle, setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { getModelDesign, getModelFields } from "../../../apiCall/get";
import LoadingSection from "../../LoadingSection/LoadingSection";
import { Button, Steps, Tooltip } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { t } from "i18next";
import useLang from "../../../contexts/useLanguage/useLang";
import DataForm from "../../RenderModelFields/DataForm";
import RenderModelFields from "../../RenderModelFields/RenderModelFields";

const ModelWizard = ({element , isLayoutEle , isOver , canDrop , parent , drop , drag , dragPreview , isMobile , item}) => {

    const {isView , selectedElement , setSelectedElement , updatePageElement , getFieldCode , mainDivWidth , itemData} = usePage()
    const {visible} = useGetElementHideSize({element})
    const {lang} = useLang()
    const [current , setCurrent] = useState(0)
    const ref = useRef()
    const queryClient = useQueryClient()
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })


    const {data , isLoading , isFetching} = useQuery({
        queryKey: [{element_id: element?.id , model: element?.data_source_model}],
        queryFn: async () => {
            return await getModelDesign({model_id: element?.data_source_model})
        },
        enabled: element?.data_source_model ? true : false,
        staleTime: Infinity,
        placeholderData: keepPreviousData
    })


    const handleChangeInner = (e) => {
        var value = e.target.textContent
        if(!value || value == element?.[`text${lang != 'en' ? `_${lang}` : ''}`] || value == 'hi im Text' || isView){
            return
        }
        updatePageElement({element: element , dataObject: {
            [`${getFieldCode('text')}${lang != 'en' ? `_${lang}` : ''}`]: value
        } })
    }

    const next = () => {
        setCurrent(current + 1);
    }
    const prev = () => {
    setCurrent(current - 1);
    }


    const getTabFields = (tab) => {
        var fields = []
        tab?.containers?.map((container) => {
            if(Array.isArray(container?.fields)){
                fields.push(...container?.fields)
            }
        })
        return fields
    }


    const steps = data?.data?.containers?.map((container) => {
        return{
         title: container?.name,
        }
     })

    const fields = useMemo(() => {
        var f = []
        data?.data?.containers?.map((tab) => {
            if(tab?.containers){
                tab?.containers?.map((container) => {
                    if(Array.isArray(container?.fields)){
                        f.push(...container.fields)
                    }
                    
                })
            }
        })
        return f
    },[data])
    

    // console.log(fields)

    if(dragPreview){
        dragPreview(ref)
    }

    return(
        visible && <S.Wrapper
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
            ref={!isView ? drop : null}
            role={'Dustbin'}
            style={{
                ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement),
                ...(isLoading ?
                    {
                        boxShadow:'none',
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
                    <ElementSettingsWrapper isMobile={isMobile} drag={drag} isForm parent={parent} element={element} isLayoutEle={isLayoutEle} />
                </div>

                {isLoading ? <LoadingSection /> :
                    data?.data && 
                    <div>
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
                            {(lang == 'en' ? (element?.text || 'hi im Title') : (element?.[`text_${lang}`] || element?.text || 'hi im Title') )}
                        </h2>
                        
                    <DataForm 
                    tabs={data?.data}
                    current={current}
                    setCurrent={setCurrent}
                    showSubmitButton={false}
                    element={element}
                    fields={fields}
                    steps={steps}
                    prev={prev}
                    next={next}
                    isWizard
                    currentItem={element?.form_update_item?.code == 'url_parameter' ? itemData?.data?.[0] : item}
                    >
                        <Steps
                            current={current}
                            items={steps}
                            responsive={true}
                            
                        />

                        {data?.data?.containers?.map((tab , index) => {
                            return(
                                <div
                                style={{
                                    maxWidth: '525px',
                                    gap:'10px',
                                    flexWrap: 'wrap',
                                    alignItems:'center',
                                    display: current == index ? 'flex' : 'none',
                                }}
                                key={tab?.id}
                                >
                                    <RenderModelFields fields={getTabFields(tab)} />
                                </div>
                            )
                        }) 
                        }

                    </DataForm>
                        
                    </div>
                }
            </div>

        </S.Wrapper>
    )
}

export default ModelWizard