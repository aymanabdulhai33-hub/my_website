import React, { useRef, useState } from 'react'
import { t } from "i18next";
import * as S from './ProfileFormStyled'
import useGetElementHideSize from '../../../hooks/useGetElementHideSize/useGetElementHideSize';
import usePage from '../../../contexts/usePage/usePage';
import { setUpDefaultBuilderStyle, setUpDefaultMobileBuilderStyle } from '../../../utility/globalFun'
import ProfileFormData from './ProfileFormData';
import ProfilePasswordForm from './ProfilePasswordForm';
import ElementSettingsWrapper from '../ElementSettingsWrapper/ElementSettingsWrapper';

const ProfileForm = ({element , isLayoutEle , isOver , canDrop , parent , drop , drag , isMobile}) => {
    const {isView , setSelectedElement , selectedElement , mainDivWidth} = usePage()
    const [formType , setFormType] = useState('login')
    const ref = useRef()
    const {visible} = useGetElementHideSize({element})
    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
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
        ref={ref}>
        <div ref={!isView ? drop : null}
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
            }}>
             <div style={{position: 'absolute' , top:'0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper drag={drag} isForm={!isMobile} parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>   
            {formType=='login' ? 
            <ProfileFormData setFormType={setFormType}/>

            :formType == 'forgotpassword' ?
            <ProfilePasswordForm setFormType={setFormType}/>

            :null }
        </div>
    </S.Wrapper>
  )
}

export default ProfileForm