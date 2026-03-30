import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import ElementWrapper from "../ElementWrapper";
import LoadingSection from "../../LoadingSection/LoadingSection";
import DataDisplay from "../DataDisplay";
import { Empty } from "antd";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import { setUpDefaultBuilderStyle } from '../../../utility/globalFun'
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'
import DisplayLocalStorageData from "../DisplayLocalStorageData";

const Box = ({element , isLayoutEle , component , isOver , canDrop , custom_data , parent , drop , drag , assignedVariables , item , setParentsModel , componentParent , setStorageState , activeItem}) => {
    const {isView , pageData , selectedElement , setSelectedElement , isMobilePage} = usePage()
    const {visible} = useGetElementHideSize({element})
    var sectionData = pageData?.[element?.id]

    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    const events = element?.events
    // if(element?.id == 44350){
    //     console.log(allStyle)
    // }
    
    return(
        visible ?
        !isView ?
        <S.Wrapper
        an={element?.data_source_model && sectionData ? null : element?.animation_name}
        style={{
            ...allStyle,
            padding:0,
            // margin:0,
            background:'',
            backgroundColor:'',
            backgroundImage:'',
            boxShadow: '',
            border: 'none',
            ...(!isView
                ? {
                    overflow: "visible",
                  }
            : {}),
            ...(allStyle.alignItems ? {alignItems: ''} : {})
        }}
        ref={!isView ? drag : null}
        >
            
            <div
            ref={!isView ? drop : null}
            role={'Dustbin'}
            style={{
                ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement , isMobilePage , true),
                ...(allStyle.width ? {width: '100%'} : {}),
                // ...(!allStyle.height ? {height: '100%'} : {}),
            }} 
            onClick={(e)=>{
                if(!isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
            }}
            className={`${element?.assign_classname} ${activeItem ? 'builder-active-item' : ''}`}
            
            >
            <div style={{position: 'absolute' , top:'0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            {/* {selectedElement?.id == element?.id ? console.log('im in' , element?.data_source_model , sectionData) : ''} */}
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
        </div>
    </S.Wrapper>
    :

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
        className={`${element?.assign_classname} ${activeItem ? 'builder-active-item' : ''}`}
        >
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
        </div>
    : null
    )
}

export default Box