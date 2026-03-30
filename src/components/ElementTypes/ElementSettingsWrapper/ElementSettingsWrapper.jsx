import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import ElementSettings from "../ElementSettings";
import { DeleteOutlined, DragOutlined, LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";
import { Input, InputNumber, Modal, Tooltip } from "antd";
import { t } from "i18next";
import { createMSG } from "../../../utility/globalFun";
import { putEditElementSort } from "../../../apiCall/put";
import { useQueryClient } from "@tanstack/react-query";
import useTheme from "../../../contexts/useTheme/useTheme";

const ElementSettingsWrapper = ({element , parent , isLayoutEle , isComponent , isForm , drag , isDevComponent , isMobile}) => {
    const {setSelectedElement , selectedElement , deleteElementById , isView , pageId , getFieldCode} = usePage()
    const {siteTheme} = useTheme()
    const queryClient = useQueryClient()

    const deleteEle = () => {
        Modal.confirm({
            title: `${t('delete element with id')}: ${element?.id}`,
            icon: <DeleteOutlined style={{color:'red'}}/> ,
            type: "warning" ,
            content: (<p style={{color:'red'}}>{t('all the  child elements of this element will be deleted as well') }</p>),
            onOk: () => {
                deleteElementById(element)
            },
            maskClosable: true,
        })
    }

    const handleReSortElement = async (forSort) => {
        createMSG({key: `resort-${element?.id}`})
        var cureentIndex = parent?.related_childrens?.findIndex(i => i.id == element?.id)
        var toIndex = forSort == 'before' ? (cureentIndex - 1) : (cureentIndex + 1)
        await putEditElementSort({id: element?.id , sendData: {
            sort: toIndex
        }, modelCode: getFieldCode('child_elem')})

        await putEditElementSort({id: parent?.related_childrens?.[toIndex]?.id , sendData: {
            sort: cureentIndex
        }, modelCode: getFieldCode('child_elem')})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        createMSG({destroy: true , key: `resort-${element?.id}`})
    }

    const handleCustomSort = async (e) => {
        e.stopPropagation()
        var value = e.target.value
        if(value == element?.sort){
            return
        }

        createMSG({key: `resort-${element?.id}`})
        await putEditElementSort({id: element?.id , sendData: {
            sort: value
        }, modelCode: getFieldCode('child_elem')})
        queryClient.invalidateQueries({queryKey: ['page' , pageId]})
        createMSG({destroy: true , key: `resort-${element?.id}`})
    }

    const FindIndexOfMe = parent?.related_childrens?.findIndex(i => i.id == element?.id)
    return(
        selectedElement?.id == element?.id && 
        <div style={{ position:'relative' }}>
                {element?.type != 'page_body' && !isLayoutEle && !isView && 
                <div onClick={(e)=>{
                    if(!isView && !isLayoutEle){
                        setSelectedElement(element)
                        e.stopPropagation()
                    }
                }} 
                style={{position:'absolute' , right: '0', top: '-20px' , height:'17px' , display:'flex'}}>
                {<ElementSettings isDevComponent={isDevComponent} element={element}/>}
                </div>
                }
                {!isLayoutEle && !isView && 
                    <div 
                    style={{position:'absolute' , right: isComponent || isForm ? '60px' :  '40px', top: '-20px' , height:'17px' , display:'flex'}}
                    onClick={(e)=>{
                        if(!isView && !isLayoutEle){
                            setSelectedElement(element)
                            e.stopPropagation()
                        }
                    }} 
                    >
                        <div className="flex">
                            {FindIndexOfMe > 0 &&
                            <Tooltip title={t('move backward')}>
                                <LeftSquareOutlined onClick={() => handleReSortElement('before')} style={{ cursor:'pointer' , fontSize:'20px'}}/>
                            </Tooltip>
                            }
                            {FindIndexOfMe < parent?.related_childrens?.length - 1 &&
                            <Tooltip title={t('move forward')}>
                                <RightSquareOutlined onClick={() => handleReSortElement('after')} style={{ cursor:'pointer' , fontSize:'20px'}}/>
                            </Tooltip>
                            }
                        </div>
                    </div>
                }

                {(isComponent || isForm || isDevComponent) && !isView && !isMobile &&
                    <div
                    style={{position:'absolute' , right: isDevComponent ? '60px' : '40px' , top: '-20px' ,display:'flex'}}
                    ref={!isView && (isForm || isDevComponent) ? drag : null}
                    >
                        <DragOutlined style={{fontSize:'20px' , cursor: 'grab'}}/>
                    </div>
                }

                {siteTheme?.default_show_sort && 
                 <div
                 onClick={(e) =>{
                    e.stopPropagation()
                 }}
                 style={{position:'absolute' , right: isComponent || isForm ? FindIndexOfMe > 0 && FindIndexOfMe < parent?.related_childrens?.length - 1 ? '100px' : '80px' : 
                    FindIndexOfMe > 0 && FindIndexOfMe < parent?.related_childrens?.length - 1 ? '80px' : '60px' , top: '-32px' , display:'flex'}}
                 >
                    <InputNumber onBlur={handleCustomSort} defaultValue={element?.sort || 0} style={{width: '55px' , height: '30px' , padding:'0px'}}/>
                 </div>
                }

                {!isLayoutEle && !isView && 
                <div onClick={(e)=>{
                    if(!isView && !isLayoutEle){
                        setSelectedElement(element)
                        e.stopPropagation()
                    }
                }}
                style={{position:'absolute' , right: '20px' , top: '-20px' , height:'17px' , display:'flex'}}>
                    <DeleteOutlined style={{color:'red' , fontSize:'20px'}} onClick={deleteEle}/>
                </div>
                }
            </div>
    )
}

export default ElementSettingsWrapper