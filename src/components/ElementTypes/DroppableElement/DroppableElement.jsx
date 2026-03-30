import React , {useRef} from "react";
import { useDrag, useDrop } from "react-dnd";
import usePage from "../../../contexts/usePage/usePage";
import { getParentIds } from "../../../utility/globalFun";

const DroppableElement = ({children , isLayoutEle , type , parent , dropZoneName , element}) => {
    
    const {page , isLayout , updatePageElement , isView , getFieldCode , selectedElement} = usePage()
    const [{ canDrop , isOver }, drop] = useDrop(() => ({
        accept: !isLayoutEle ? ['box' , 'button' , 'text' , 'link' , 'image' , 'dropdown' , 'template' , 
            'mobile_template' , 'custom_dynamic_component' , 'model_wizard' , 'model_form' , 'login_form' , 
            'component' , 'dev_component' , 'category_list_item' , 'table' , 'report' , 'item_list_detils' , 
            'item_details' , 'auto_slider' , 'banner_slider' , 'appointment_calendar'] : [],
        canDrop:(item, monitor) => {
            // this if for chack if ${item} not a childe for the parent which is mean you cannot drop the ${parent} inside the ${child}
            var allParent = getParentIds(page?.related_childrens, element?.id) || []
            if(allParent?.find(i => i == item?.element?.id)){
                return false
            }
            return monitor.isOver() && monitor.isOver({ shallow: true }) && !isLayoutEle
        },
        drop: (item, monitor) => {
            const didDrop = monitor.didDrop()
            return{
                name: dropZoneName || 'drop_zone_container',
                dropEle: element,
                didDrop: didDrop,
                isOver: monitor.isOver({ shallow: true })
            }
        },
        collect: (monitor) => {
            return {
                isOver: monitor.isOver() && monitor.isOver({ shallow: true }),
                canDrop: monitor.canDrop() && (monitor.isOver() && monitor.isOver({ shallow: true })),
            }
        },
    }))

    // the type condition is checking if not in layout editor and the element is layout element so we do noting, because if there is no type the drop function will not work
    // canDrag condition so you can only move element if is selected to fix some strange Behavior 
    const [{ isDragging }, drag] = useDrag(() => ({
        type: isLayoutEle && !isLayout ? '' : (type || 'box'),
        canDrag: selectedElement?.id == element?.id && !isView,
        item: {element},
        collect: (monitor) => {
            return{
                isDragging: monitor.isDragging(),
            }
        },
        end: (item, monitor) => {
            var result = monitor.getDropResult()
            var targetEle = result?.dropEle

            if(result?.root == 'root' && (element?.element_type?.code == 'box' || element?.element_type?.code == 'container') && element?.parent && page?.content_type?.code == 'custom_dynamic_component'){
                updatePageElement({element , dataObject: {
                        [getFieldCode('parent')]: null
                    }
                })
                return
            }

            if((element?.id == targetEle?.id) || (parent?.id == targetEle?.id) || !targetEle || isView){
                return
            }
            
            updatePageElement({element , dataObject: {
                    [getFieldCode('parent')]: targetEle?.id
                }
            })
        },
    }),[page , selectedElement])

    return(
        <>
            {React.Children.map(children, child => {
                return React.cloneElement(child, {drag , parent , isDragging , isLayoutEle , canDrop , isOver , drop , element });
            })}
        </>
    )
}

export default DroppableElement