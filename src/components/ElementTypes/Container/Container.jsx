import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import LoadingSection from "../../LoadingSection/LoadingSection";
import { Empty } from "antd";
import DataDisplay from "../DataDisplay";
import ElementWrapper from "../ElementWrapper";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { setUpDefaultBuilderStyle } from '../../../utility/globalFun'
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'
import DisplayLocalStorageData from "../DisplayLocalStorageData";


const Container = ({element , component , isLayoutEle , parent , custom_data , canDrop , isOver , drop , assignedVariables , item , setParentsModel , componentParent , setStorageState , activeItem}) => {
    const {pageData , selectedElement , isView , setSelectedElement , isMobilePage } = usePage()
    const {visible} = useGetElementHideSize({element})
    var sectionData = pageData?.[element?.id]
    const events = element?.events

    // if(element?.id == 5426){
    //     console.log(element?.data_source_model , sectionData)
    // }

    return(
        visible &&
        <S.Wrapper 
        an={element?.data_source_model && sectionData ? null : element?.animation_name}
        ref={!isView ? drop : null}
        role={'Dustbin'}
        style={{
            width: '100%',
            ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement , isMobilePage , true),
            overflow: 'unset',
            ...(isView ? {
                overflow: setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement , isMobilePage)?.overflow || 'unset'
            } : {}),
        }}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        className={`${element?.assign_classname} ${activeItem ? 'builder-active-item' : ''}`}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            {element?.data_source_model && sectionData ? 
                sectionData?.status == "pending" && !sectionData?.data?.data ? 
                    <LoadingSection />
                :
                sectionData?.data?.data ? 
                    <DataDisplay an={element?.animation_name} setParentsModel={setParentsModel} events={events} data={sectionData?.data?.data?.data} element={element}/>
                :
                    <Empty />
                : element?.local_storage_code ? 
                    <DisplayLocalStorageData element={element}/>
                : null
            }
            
            {element?.related_childrens?.map((chEle , index) => {
                return(
                    <ElementWrapper 
                    component={component} 
                    assignedVariables={assignedVariables} 
                    item={item} 
                    parent={element} 
                    isLayoutEle={isLayoutEle}
                    key={`${chEle?.id}-${index}`} 
                    element={chEle}
                    custom_data={custom_data}
                    setParentsModel={setParentsModel}
                    componentParent={componentParent}
                    setStorageState={setStorageState}
                    />
                )
            })}
        </S.Wrapper>
    )
}

export default Container