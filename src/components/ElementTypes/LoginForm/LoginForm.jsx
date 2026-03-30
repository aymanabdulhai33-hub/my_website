import React, { useEffect, useRef, useState } from "react";
import usePage from "../../../contexts/usePage/usePage";
import { Link } from "react-router-dom";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import useLang from "../../../contexts/useLanguage/useLang";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'
import { setUpDefaultBuilderStyle, setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
import { Button, Form, Input, Switch } from "antd";
import { t } from "i18next";
import { postLogin } from "../../../apiCall/post";
import useUser from "../../../contexts/useUser/useUser";
import LoginType from "./LoginType";
import FormSignup from "./FormSignup";
import { getModelData } from "../../../apiCall/get";
import { useQuery } from "@tanstack/react-query";

const LoginForm = ({element , isLayoutEle , isOver , canDrop , parent , drop , drag , isMobile , item , setParentsModel , dragPreview}) => {
    const {lang} = useLang()
    const {isView , setSelectedElement , selectedElement , mainDivWidth} = usePage()
    const {visible} = useGetElementHideSize({element})
    const [lod , setLod] = useState(false)
    const {setUser} = useUser()
    const [formType , setFormType] = useState('login')

    const {data: configData ,  isLoading} = useQuery({
        queryKey: [`guest_config_model`, {lang: lang}],
        queryFn: async () => {
            const res = await getModelData({lang , modelId: 'guest_config_model'})
            return res?.data?.data?.[0] || null
        },
        staleTime: Infinity,
    })

    const ref = useRef()
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    const onChange = () => {
       formType == 'signup' ? setFormType('login') : setFormType('signup')
    };

    useEffect(() => {
        if(dragPreview){
            dragPreview(ref)
        }
    },[])

    return(
        visible && configData && <S.Wrapper
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
                ...(isMobile ?
                    {
                        ...setUpDefaultMobileBuilderStyle(element , selectedElement)
                    }
                : {
                    ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement),
                }
                ),
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

                
                <div className="flex gap-3 flex-col mb-3">
                    {formType == 'signup' ? <FormSignup configData={configData} setFormType={setFormType}/> :
                    formType == 'login' ? <LoginType configData={configData}/> : null}

                    <div onClick={onChange} style={{display:"flex" , flexDirection:"row", gap:"5px", cursor:"pointer"}}>
                        {formType == 'login' ? <p>{t('Don’t have any account ?')}</p> : <p>{t('Already Have Any Account?')}</p>}
                        <p style={{fontWeight: '600'}}>{formType == 'login' ? t('signup') : t('login')}</p>
                    </div>
                </div>

            </div>
        </S.Wrapper>
    )
}

export default LoginForm