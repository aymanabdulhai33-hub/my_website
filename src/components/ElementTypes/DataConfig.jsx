import React from "react";
import BoxContainerDataConfig from "./BoxContainerDataConfig";
import CategoryListItemDataConfig from "./CategoryListItemDataConfig";
import ItemListDetilsDataConfig from "./ItemListDetilsDataConfig";
import ModelFormDataConfig from "./ModelFormDataConfig";
import MobileDetailsPageDataConfig from "./MobileDetailsPageDataConfig";
import ComponentDataConfig from "./ComponentDataConfig";
import ReportDataConfig from "./ReportDataConfig";
import AppointmentCalendarConfig from "./AppointmentCalendarConfig";

const DataConfig = ({isFetchingModels , models , element}) => {

    return(
        <div style={{width:'550px'}}>
            {element?.element_type?.code == 'box' || element?.element_type?.code == 'container' || element?.element_type?.code == 'banner_slider' || element?.element_type?.code == 'auto_slider' ?
                <BoxContainerDataConfig isFetchingModels={isFetchingModels} models={models} element={element} />
            : 
            element?.element_type?.code == 'category_list_item' ? 
                <CategoryListItemDataConfig isFetchingModels={isFetchingModels} models={models} element={element}/>
            :
            element?.element_type?.code == 'item_list_detils' ? 
                <ItemListDetilsDataConfig isFetchingModels={isFetchingModels} models={models} element={element}/>
            :
            element?.element_type?.code == 'model_form' || element?.element_type?.code == 'model_wizard' ? 
                <ModelFormDataConfig isFetchingModels={isFetchingModels} models={models} element={element}/>
            :
            element?.element_type?.code == 'item_details' ?
                <MobileDetailsPageDataConfig isFetchingModels={isFetchingModels} models={models} element={element}/>
            :
            element?.element_type?.code == 'component' ?
                <ComponentDataConfig isFetchingModels={isFetchingModels} models={models} element={element}/>
            :
            element?.element_type?.code == 'report' ?
                <ReportDataConfig element={element}/>
                :
            element?.element_type?.code == 'appointment_calendar' ?
                <AppointmentCalendarConfig isFetchingModels={isFetchingModels} models={models} element={element}/>
            : null
            }
        </div>
    )
}

export default DataConfig