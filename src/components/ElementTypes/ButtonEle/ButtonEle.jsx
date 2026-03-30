import { Button, Drawer, Modal } from "antd";
import React, { useEffect, useState } from "react";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import usePage from "../../../contexts/usePage/usePage";
import useLang from "../../../contexts/useLanguage/useLang";
import { DeleteOutlined, DollarOutlined, GlobalOutlined, MenuOutlined, PlusCircleOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import { createPortal } from "react-dom";
import { useRef } from "react";
import DroppableElement from "../DroppableElement/DroppableElement";
import { useDrop } from "react-dnd";
import ElementWrapper from "../ElementWrapper";
import useUser from "../../../contexts/useUser/useUser";
import { useNavigate } from "react-router-dom";
import useTheme from "../../../contexts/useTheme/useTheme";
import { signOut } from "../../../apiCall/get";
import useBuilder from "../../../contexts/useBuilder/useBuilder";
import { getLocalStorageData } from "../../../utility/globalFun";


const ButtonEle = ({element , isLayoutEle , parent , drag , component , item , assignedVariables , componentParent , setParentsModel , setStorageState}) => {
    const {setSelectedElement , selectedElement , isView , getFieldCode , itemData , itemModelId , itemId} = usePage()
    const {visible} = useGetElementHideSize({element})
    const {pagesModel} = useBuilder()
    const [open , setOpen] = useState(false)
    const ref = useRef()
    const {lang} = useLang()
    const {setUser} = useUser()
    const {siteTheme} = useTheme()
    const navigate =  useNavigate()
    
    var ButtonDefaultStyle = {
        backgroundColor: siteTheme?.button_bg_color,
        color: siteTheme?.button_color,
        borderRadius: siteTheme?.button_border_radius
    }
    var allStyle = {...ButtonDefaultStyle}
    element?.properties?.map((pro) => {
        if(ButtonDefaultStyle[pro.property_name] && !pro?.value){
            allStyle[pro.property_name] = ButtonDefaultStyle[pro.property_name]
            return
        }
        allStyle[pro.property_name] = pro?.value
    })

    const handleClick = (e , isDoubleClick) => {
        if(element?.related_events?.find(i => i?.event_action?.code == "open_side_menu") || element?.related_events?.find(i => i?.event_action?.code == "open_model")){
            setOpen(!open)
        }

        if(element?.related_events?.find(i => i?.event_action?.code == 'logout') && isView){
            signOut()
            setUser(null)
            window.localStorage.removeItem('user')
            if(isView){
                navigate('/')
            }
            
        }

        if(element?.eval_function && isView){
            const functionString = element?.eval_function
            const evalAction = eval(`(${functionString})`);
            evalAction()
        }

        var isToDetailsPageAction = element?.related_events?.find(i => i?.event_action?.code == 'to_details')
        if(isToDetailsPageAction){
            if(isView && item){
                navigate(`/${isToDetailsPageAction?.to_page?.path}?item_id=${item?.id || item?.item_id}&model_id=${componentParent?.data_source_model}`)
            }else if(item){
                navigate(`/admin/page-editor/${isToDetailsPageAction?.to_page?.id}?item_id=${item?.id || item?.item_id}&model_id=${componentParent?.data_source_model}`)
            }else if(itemId && isView && !item){
                navigate(`/${isToDetailsPageAction?.to_page?.path}?item_id=${itemId}&model_id=${itemModelId}`)
            }else if(itemId && !item && isDoubleClick){
                navigate(`/admin/page-editor/${isToDetailsPageAction?.to_page?.id}?item_id=${itemId}&model_id=${itemModelId}`)
            }
        }

        
        if(element?.related_events?.find(i => i?.event_action?.code == 'store_in_local_storage')?.key_name){
            var currentEvent = element?.related_events?.find(i => i?.event_action?.code == 'store_in_local_storage')
            cacheInStorage(currentEvent)
            if(setParentsModel && isView){
                setParentsModel(false)
            }
        }

       if(element?.related_events?.find(i => i?.event_action?.code == 'remove_item_storage')){
            var currentEvent = element?.related_events?.find(i => i?.event_action?.code == 'remove_item_storage')
            removeItemFromStorage(currentEvent)
        }

        if(element?.href){
            if(isView){
                navigate(element?.href)
            }else{
                var tpPage = pagesModel?.data?.data?.data?.find(i => i.path == element?.href.replace('/' , ''))
                // navigate(`/admin/page-editor/${tpPage?.id}`)
            }
        }

    }

    const removeItemFromStorage = (event) => {
        
        var prevData = getLocalStorageData(componentParent?.local_storage_code)
        if(prevData){
            prevData = prevData?.filter(i => i.unique_id != item?.unique_id)
            if(setStorageState){
                setStorageState(prevData)
            }
            window.localStorage.setItem(componentParent?.local_storage_code , JSON.stringify(prevData))
        }
    }

    const cacheInStorage = (event) => {
        var prevData = getLocalStorageData(event.key_name)

        var newData = prevData ? prevData : []
        
        if(component && item){
            var newItem = {...item , unique_id: Date.now()}
            newData.push(newItem)

        }else if(!component && itemData?.data?.[0]){
            var newItem = {...itemData.data[0] , unique_id: Date.now()}
            newData.push(newItem)
        }

        window.localStorage.setItem(event.key_name , JSON.stringify(newData))
    }

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ['container'] ,
        canDrop: () => {
            return true
        },
        drop: (item, monitor) => {
            return{
                name: 'drop_zone' ,
                parent: element,
                root: 'root'
            }
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        })
    }))


    useEffect(() => {
        var ele = document.getElementsByTagName('body')
        var eleParent = document.getElementById('main-page-container')

        if(ele && eleParent){
            ref.current = eleParent
        }
    },[visible])

    var isSideMenu = element?.related_events?.find(i => i?.event_action?.code == "open_side_menu")
    var isModel = element?.related_events?.find(i => i?.event_action?.code == "open_model")

    return(
        <>
        {visible && 
        <div style={{
            position:'relative' , 
            width:'max-content',
            marginTop: allStyle.marginTop || ''
        }}>
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color:'var(--builder-main)'}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            <Button 
            style={{
                ...allStyle,
                ...(selectedElement?.id == element?.id
                    ? {
                        border: "2px solid red",
                      }
                : {}),
            }}
            onDoubleClick={(e)=>{
                if(isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
                handleClick(e , 'DoubleClick')
            }}
            onClick={(e)=>{
                if(!isView && !isLayoutEle){
                    setSelectedElement(element)
                    e.stopPropagation()
                }
                handleClick(e)
            }}
            ref={!isView ? drag : null}
            icon={
                element?.icon ? 
                element?.icon?.code == getFieldCode('settings') ?
                    <SettingOutlined />
                : element?.icon?.code == getFieldCode('global') ? 
                    <GlobalOutlined />
                : element?.icon?.code == getFieldCode('currency') ? 
                    <DollarOutlined />
                : element?.icon?.code == getFieldCode('menu') ? 
                    <MenuOutlined />
                : element?.icon?.code ==  getFieldCode('user') ? 
                    <UserOutlined />
                : element?.icon?.code ==  getFieldCode('cart') ? 
                    <ShoppingCartOutlined />
                : element?.icon?.code ==  getFieldCode('delete') ? 
                    <DeleteOutlined />
                : null : null
            }
            className={element?.assign_classname || ''}
            >            
                {lang == 'en' ? (element.text || (!element?.icon && 'hi im Button')) : (element?.[`text_${lang}`] || element?.text || (!element?.icon && 'hi im Button'))}
            </Button>

            {ref.current && isModel && createPortal(
            <div>
                <Modal
                classNames={{
                    wrapper: !isView ? 'builder-model' : ''
                }}
                getContainer={false}
                mask={isView ? true : false}
                open={open}
                onCancel={(e) => {
                    e.stopPropagation()
                    setOpen(false)
                }}
                destroyOnClose={true}
                footer={null}
                styles={{
                    content: {
                        padding: 0
                    }
                }}
                >
                    <div 
                    onClick={(e) => {
                        if(!isView){
                            e.stopPropagation()
                        }
                    }}
                    style={{padding: '20px'}}
                    >
                        {element?.related_childrens?.map((chEle , index) => {
                            return(
                                <ElementWrapper
                                isLayoutEle={isLayoutEle}
                                parent={element} 
                                key={`${chEle?.id}-${index}`} 
                                element={chEle}
                                item={item}
                                assignedVariables={assignedVariables}
                                component={component}
                                setParentsModel={setOpen}
                                />
                            )
                        })}
                        {!isView && !isLayoutEle && <div 
                        ref={ drop }
                        role={'Dustbin'}
                        className={`p-5 ${isOver && canDrop && !isView && 'border-dashed border-black border-2'}`}
                        style={{backgroundColor: isOver ? 'lightgreen' : '#dde3f0' , position:'relative'}}
                        >
                            <p className="font-bold">{canDrop ? 'Release to drop' : 'Drag a Container to here'}</p>
                        </div>}
                    </div>
                </Modal>
            </div>
             , ref.current)
            }

            {isView ? 
            <Drawer
                title={null}
                placement="right"
                open={open && isSideMenu}
                onClose={(e) => {
                    e.stopPropagation()
                    setOpen(false)
                }}
                styles={{
                    body: {
                        padding: 0,
                    },
                    wrapper:{
                        maxWidth:"80%"
                    },
                    header: {
                        display: 'none'
                    }
                }}
                onClick={(e) => {
                    if(!isView){
                        e.stopPropagation()
                    }
                }}
                >
                    {element?.related_childrens?.map((chEle , index) => {
                        return(
                            <ElementWrapper
                            isLayoutEle={isLayoutEle}
                            parent={element} 
                            key={`${chEle?.id}-${index}`} 
                            element={chEle}
                            item={item}
                            assignedVariables={assignedVariables}
                            component={component}
                            setParentsModel={setOpen}
                            />
                        )
                    })}
                    {!isView && !isLayoutEle && <div 
                    ref={ drop }
                    role={'Dustbin'}
                    className={`p-5 ${isOver && canDrop && !isView && 'border-dashed border-black border-2'}`}
                    style={{backgroundColor: isOver ? 'lightgreen' : '#dde3f0' , position:'relative'}}
                    >
                        <p className="font-bold">{canDrop ? 'Release to drop' : 'Drag a Container to here'}</p>
                    </div>}
                </Drawer>
            : ref.current && isSideMenu && createPortal(
                <Drawer
                title={null}
                placement="right"
                open={open && isSideMenu}
                onClose={(e) => {
                    e.stopPropagation()
                    setOpen(false)
                }}
                getContainer={false}
                styles={{
                    body: {
                        padding: 0,
                    },
                    header: {
                        display: 'none'
                    }
                }}
                onClick={(e) => {
                    if(!isView){
                        e.stopPropagation()
                    }
                }}
                >
                    {element?.related_childrens?.map((chEle , index) => {
                        return(
                            <ElementWrapper
                            isLayoutEle={isLayoutEle}
                            parent={element} 
                            key={`${chEle?.id}-${index}`} 
                            element={chEle}
                            item={item}
                            assignedVariables={assignedVariables}
                            component={component}
                            setParentsModel={setOpen}
                            />
                        )
                    })}
                    {!isView && !isLayoutEle && <div 
                    ref={ drop }
                    role={'Dustbin'}
                    className={`p-5 ${isOver && canDrop && !isView && 'border-dashed border-black border-2'}`}
                    style={{backgroundColor: isOver ? 'lightgreen' : '#dde3f0' , position:'relative'}}
                    >
                        <p className="font-bold">{canDrop ? 'Release to drop' : 'Drag a Container to here'}</p>
                    </div>}
                </Drawer>
            , ref.current)
            }
        </div>}
        </>
    )
}

export default ButtonEle