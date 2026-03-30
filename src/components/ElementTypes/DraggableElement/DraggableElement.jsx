import React from "react";
import { useDrag } from "react-dnd";
import usePage from "../../../contexts/usePage/usePage";

const DraggableElement = ({children , parent , isLayoutEle , type , element}) => {

    const {page , isLayout , updatePageElement , isView , getFieldCode} = usePage()

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: isLayoutEle && !isLayout ? '' : (type || 'box'),
        canDrag: !isView,
        collect: (monitor) => {            
            return{
                isDragging: monitor.isDragging(),
            }
        },
        end: (item, monitor) => {            
            var result = monitor.getDropResult()
            var targetEle = result?.dropEle
            if((element?.id == targetEle?.id) || (parent?.id == targetEle?.id) || (!targetEle && element?.element_type?.code != 'dev_component')){
                return
            }
            if(element?.element_type?.code == 'dev_component' && !element?.parent && !targetEle){
                return
            }
            updatePageElement({element , dataObject: {
                    [getFieldCode('parent')]: targetEle?.id || ''
                }
            })
        },
        
    }),[page])

    return(
        <>
        {React.Children.map(children, child => {
            return React.cloneElement(child, {dragPreview , parent , isDragging , drag , isLayoutEle , element });
        })}
        </>
    )
}

export default DraggableElement