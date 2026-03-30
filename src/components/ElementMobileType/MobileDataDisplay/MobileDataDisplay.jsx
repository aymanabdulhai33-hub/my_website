import React from "react";
import ElementSettingsWrapper from "../../ElementTypes/ElementSettingsWrapper/ElementSettingsWrapper";
import usePage from "../../../contexts/usePage/usePage";
import { setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
import LoadingSection from "../../LoadingSection/LoadingSection";
import DataDisplay from "../../ElementTypes/DataDisplay";
import { Empty } from "antd";
const MobileDataDisplay = ({element , parent , isLayoutEle}) => {

    const {selectedElement , setSelectedElement , isView , pageData} = usePage()

    var sectionData = pageData?.[element?.id]

    const events = element?.events

    return(
        <div style={{
            display:'flex',
            ...setUpDefaultMobileBuilderStyle(element , selectedElement),
            gap:'20px',
            flexWrap:'wrap'
        }}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0' ,}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            {element?.data_source_model && sectionData ? 
                sectionData?.status == "pending" ? 
                <LoadingSection />
                :
                sectionData?.data?.data ? 
                <DataDisplay events={events} data={sectionData?.data?.data?.data} element={element}/>
                :
                <Empty />
                : <>Empty Data Box</>
            }
        </div>
    )
}

export default MobileDataDisplay