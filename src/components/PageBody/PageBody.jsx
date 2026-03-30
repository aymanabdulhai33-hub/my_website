import React from "react";
import { useDrop } from "react-dnd";
import usePage from "../../contexts/usePage/usePage";
import ElementWrapper from "../ElementTypes/ElementWrapper";
import { PlusCircleOutlined } from "@ant-design/icons";
import useTheme from "../../contexts/useTheme/useTheme";
import LoadingSection from "../LoadingSection/LoadingSection";

const PageBody = ({inLayout , renderLayout , firstParent}) => {
    const {page , isMobileView , isView , isMobilePage , addElementToPage , isLoadingItemData} = usePage()
    const {themeColor} = useTheme()
    // this useDrop will check if element is allowed it to drop in level one
    // the page_body element is allowed only in layout and it will reference to the real beige body when you are on a page
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: page?.content_type?.code == 'custom_dynamic_component' ? ['box' , 'container' , 'dev_component'] : 
        page?.content_type?.code == 'template' || page?.content_type?.code == 'mobile_template' ? ['box']
        : ['container' , 'page_body' , 'dev_component' , 'category_list_item' , 'item_list_detils' , 'table' , 'report'],
        canDrop: () => {
            return !inLayout
        },
        drop: (item, monitor) => {
            // 'drop_zone' the add is in ${DragParent} file check this file for more information
            return{
                name: 'drop_zone',
                root: 'root'
            }
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        })
    }))

    // just to add default container if if there is no any in the page
    const handleAddEle = () => {
        addElementToPage({newEle: {type: 'container'}})
    }

    // isLayoutEle => will follow all the way all levels in builder, will be true if the cureent element is a layout element 
    // you can anly edit layout element in the cureent layout page 

    return(
        <>
            {inLayout ? 
                renderLayout?.map((ele , index) => {
                    return(
                        <ElementWrapper firstParent={firstParent} isOver={isOver} canDrop={canDrop} isLayoutEle element={ele} key={`${ele?.id}-${index}`}/>
                    )
                })
            :
            isLoadingItemData ? 
                <LoadingSection />
            :
            page?.related_childrens?.map((ele , index) => {
                return(
                    <ElementWrapper firstParent={firstParent} parent={page} element={ele} key={`${ele?.id}-${index}`}/>
                )
            })}
            {/* can onle drop of not isView mode and no Layout element */}
            {!inLayout && !isView && 
            <div 
            ref={ drop }
            role={'Dustbin'}
            className={`p-5 ${isOver && canDrop && !isView && 'border-dashed border-black border-2'}`}
            style={{backgroundColor: !inLayout && isOver ? 'lightgreen' : '#dde3f0' , position:'relative'}}
            >
                <p className="font-bold">{canDrop ? 'Release to drop' : isMobilePage ? 'Drag a Component to here' : 'Drag a Container to here'}</p>
                {!isMobilePage && <PlusCircleOutlined onClick={handleAddEle} style={{position:'absolute' , cursor:'pointer' , color: themeColor?.main , fontSize:'18px' , left:'50%' , bottom:'-0px'}}/>}
            </div>
        }
        </>
    )
}

export default PageBody