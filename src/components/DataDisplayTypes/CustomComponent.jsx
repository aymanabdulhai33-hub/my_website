import React from "react";
import ElementWrapper from "../ElementTypes/ElementWrapper";

const CustomComponent = ({item , element , component , setStorageState , is_item_display_component , is_item_list_detils , activeItem}) => {
    
    var assignedVariable = is_item_display_component ? element?.item_assigned_fields ? JSON.parse(element?.item_assigned_fields) : {} 
    : is_item_list_detils ? (JSON.parse(element?.items_displayed_fields) || {}) 
    :  element?.assigned_fields ? JSON.parse(element?.assigned_fields) : {}
    
    return(
        component && component?.related_childrens?.map((ele , index) => {
            return(
                <ElementWrapper
                component={component}
                assignedVariables={assignedVariable}
                item={item}
                isLayoutEle={true}
                parent={element}
                componentParent={element}
                element={ele}
                setStorageState={setStorageState}
                key={`${ele?.id}-${index}-${Object.keys(item)?.[0]}`}
                activeItem={activeItem}
                />
            )
        })
    )
}

export default CustomComponent