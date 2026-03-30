import React from "react";
import usePage from "../../contexts/usePage/usePage";
import Box from "./Box/Box";
import Container from "./Container/Container";
import PageBodyEle from "./PageBodyEle/PageBodyEle";
import ButtonEle from "./ButtonEle/ButtonEle";
import TextEle from "./TextEle/TextEle";
import LinkEle from "./LinkEle/LinkEle";
import DroppableElement from "./DroppableElement/DroppableElement";
import DraggableElement from "./DraggableElement/DraggableElement";
import ImageElement from "./ImageElement/ImageElement";
import DropdownElement from "./DropdownElement/DropdownElement";
import ComponentElement from "./ComponentElement/ComponentElement";
import ModelFrom from "./ModelFrom/ModelFrom";
import ModelWizard from "./ModelWizard/ModelWizard";
import LoginForm from "./LoginForm/LoginForm";
import DevComponent from "../DevComponent/DevComponent";
import ImgAndDesc from "../ElementMobileType/MobileIItemDetails/ImgAndDesc";
import ProfileForm from "./ProfileForm/ProfileForm";
import CategoryListItem from "./CategoryListItem/CategoryListItem";
import ItemListDetils from "./ItemListDetils/ItemListDetils";
import TableElement from "./TableElement/TableElement";
import ReportElement from "./ReportElement/ReportElement";
import MobileSideBar from "./MobileSideBar/MobileSideBar";
import BannerSlider from "./BannerSlider/BannerSlider";
import AutoSlider from "./AutoSlider/AutoSlider";
import AppointmentCalendarElement from "./AppointmentCalendarElement/AppointmentCalendarElement";


// ElementWrapper => the main Wrapper of all elements and route to the right component type
const ElementWrapper = ({element , isLayoutEle , parent , item , assignedVariables , component , custom_data , setParentsModel , componentParent , setStorageState , firstParent , activeItem}) => {
    // element => cureent element "Object"
    // isLayoutEle => if Layout element "Boll"
    // parent => the first parent if ${element} "Object"
    // item => if Dynamic data display the "item " will be available in all component element "Object"
    // assignedVariables => for components to assigne evreey key in the object to element "String json"
    // component => if the cureent element is a paret of component the component will hav the cureent component object "Object"
    // custom_data => if component has no Dynamic data display you can find the presented data in custom_data as "String json"
    // setParentsModel => if button have some event like open model or side meny the ${setParentsModel} state will be in all his children element "setState() => "Boll" "
    // componentParent => if in component element the ${componentParent} will be reference to the first parent of the main component
    // setStorageState => if in component element and read data from local storage the setStorageState will be the setState to render local storage status
    // firstParent => if this is the top parent loop of all the page
    const {isView , getFieldCode } = usePage()
    var allProps = {
        component,
        assignedVariables,
        item,
        isLayoutEle,
        element,
        parent,
        custom_data,
        setParentsModel,
        componentParent,
        setStorageState,
        activeItem
    }

    return(
        <>
            {element?.element_type?.code == getFieldCode('container') ?
                <DroppableElement dropZoneName={'drop_zone_container'} parent={parent} isLayoutEle={isLayoutEle} element={element}>
                    <Container {...allProps}/> 
                </DroppableElement>
                : element?.element_type?.code == getFieldCode('box') ?
                <DroppableElement dropZoneName={'drop_zone_box'} parent={parent} type={'box'} isLayoutEle={isLayoutEle} element={element}>
                    <Box {...allProps}/>
                </DroppableElement>
                : element?.element_type?.code == getFieldCode('button') ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'button'} element={element} parent={parent} >
                    <ButtonEle {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == getFieldCode('text') ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'text'} element={element} parent={parent} >
                    <TextEle {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == getFieldCode('link') ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'link'} element={element} parent={parent} >
                    <LinkEle {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == getFieldCode('image') ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'image'} element={element} parent={parent} >
                    <ImageElement {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == 'report' ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'report'} element={element} parent={parent} >
                    <ReportElement {...allProps} />
                </DraggableElement>
                : element?.element_type?.code == 'table' ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'table'} element={element} parent={parent} >
                    <TableElement {...allProps} />
                </DraggableElement>
                : element?.element_type?.code == getFieldCode('dropdown') ?
                <DraggableElement isLayoutEle={isLayoutEle} type={'dropdown'} element={element} parent={parent} >
                    <DropdownElement {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == getFieldCode('component') ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'component'} element={element} parent={parent} >
                    <ComponentElement {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == getFieldCode('model_form') ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'model_form'} element={element} parent={parent} >
                    <ModelFrom {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == getFieldCode('model_wizard') ?
                <DraggableElement isLayoutEle={isLayoutEle} type={'model_wizard'} element={element} parent={parent} >
                    <ModelWizard {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == getFieldCode('login_form') ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'login_form'} element={element} parent={parent} >
                    <LoginForm {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == 'category_list_item' ? 
                <DraggableElement isLayoutEle={isLayoutEle} element={element} parent={parent} >
                    <CategoryListItem {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == 'item_list_detils' ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'item_list_detils'} element={element} parent={parent} >
                    <ItemListDetils {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == 'item_details' ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'item_details'} element={element} parent={parent} >
                    <ImgAndDesc {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == 'banner_slider' ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'banner_slider'} element={element} parent={parent} >
                    <BannerSlider />
                </DraggableElement>
                : element?.element_type?.code == 'auto_slider' ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'auto_slider'} element={element} parent={parent} >
                    <AutoSlider />
                </DraggableElement>
                : element?.element_type?.code == 'appointment_calendar' ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'appointment_calendar'} element={element} parent={parent} >
                    <AppointmentCalendarElement {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == 'dev_component' ? 
                <DraggableElement isLayoutEle={isLayoutEle} type={'dev_component'} element={element} parent={parent} >
                    <DevComponent {...allProps}/>
                </DraggableElement>
                : element?.element_type?.code == 'page_body' ?
                <PageBodyEle {...allProps}/>
                : isView ? '' : <p>not supported</p>
            }

            {firstParent && <MobileSideBar />}
        </>
    )
}

export default ElementWrapper