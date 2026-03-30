import { Tooltip } from "antd";
import React from "react";
import usePage from "../../contexts/usePage/usePage";
import { getValueFromRelatedItemData } from "../../utility/typeAndStructure";

const PrintFields = ({item , element , showTitle , model}) => {
    const {isMobilePage} = usePage()
    var fields = element?.items_displayed_fields ? Array.from(element?.items_displayed_fields?.split(','), String) : Array.from(element?.displayed_fields?.split(','), String)
    return(
        fields?.length > 0 ? 
        Object.keys(item)?.map((key , index) => {
            return(
                fields?.find(i => i == key) ?
                index == 0 ? 
                <Tooltip key={index} destroyTooltipOnHide={true} title={`${typeof item?.[key] == 'object' ? getValueFromRelatedItemData(item?.[key]) : item?.[key]}`}>
                    <h3 className={!showTitle && "dynamic-paragraph-clamp" || ''} style={{fontSize: isMobilePage ? '14px' : '1.1rem' , fontWeight:'500'}}>
                        {`${typeof item?.[key] == 'object' ? getValueFromRelatedItemData(item?.[key]) : item?.[key]}`}
                    </h3>
                </Tooltip>
                :
                <Tooltip key={index} destroyTooltipOnHide={true} title={`${typeof item?.[key] == 'object' ? getValueFromRelatedItemData(item?.[key]) : item?.[key]}`}>
                    <p className={!showTitle && "dynamic-paragraph-clamp" || ''}>
                        {showTitle && <span style={{fontWeight:"bold" , display:'inline-block'}}>
                            {`${model?.fields?.find(i => i?.code == key)?.name}:`}&nbsp;
                        </span>}
                        {`${typeof item?.[key] == 'object' ? getValueFromRelatedItemData(item?.[key]) : item?.[key]}`}
                    </p>
                </Tooltip>
                : null
            )
        })
        : 
        Object.keys(item)?.map((key , index) => {
            return(
                <Tooltip key={index} destroyTooltipOnHide={true} title={`${typeof item?.[key] == 'object' ? getValueFromRelatedItemData(item?.[key]) : item?.[key]}`}>
                    <p className="dynamic-paragraph">{`${typeof item?.[key] == 'object' ? getValueFromRelatedItemData(item?.[key]) : item?.[key]}`}</p>
                </Tooltip>
            )
        })
    )
}

export default PrintFields