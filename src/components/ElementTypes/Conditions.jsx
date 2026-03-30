import { InputNumber, Radio } from "antd";
import React from "react";
import { HideOnSize, ShowOnSize } from "../DescriptionProperties/DescriptionProperties";
import usePage from "../../contexts/usePage/usePage";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getShowUserConditionField } from "../../apiCall/get";
import { t } from "i18next";

const Conditions = ({element}) => {

    const {updatePageElement , getFieldCode , isMobilePage} = usePage()


    const {data: userConditiontype , isFetching: isFetchingUserConditiontype} = useQuery({
        queryKey: ['show-user-condition-type'],
        queryFn: async () => {
            return await getShowUserConditionField()
        },
        staleTime: Infinity,
        placeholderData: keepPreviousData
    })

    const handleElementHide = (e , code) => {
        var value = e.target.value
        if((value == element?.[code]) || (!value && !element?.[code])){
            return
        }
        updatePageElement({element , dataObject: {
            [getFieldCode(code)]: value
        }})
    }

    return(
        <div style={{width:'550px'}}>
            {!isMobilePage &&
            <div style={{display:'flex' , flexWrap: 'wrap' , gap:'20px'}}>
                <div>
                    {HideOnSize}
                    <InputNumber 
                    defaultValue={element?.hide_on_size} 
                    onBlur={(e) => handleElementHide(e , 'hide_on_size')} 
                    style={{width: 100}}
                    />
                </div>

                <div>
                    {ShowOnSize}
                    <InputNumber 
                    defaultValue={element?.show_on_size} 
                    onBlur={(e) => handleElementHide(e , 'show_on_size')} 
                    style={{width: 100}}
                    />
                </div>
                <hr style={{marginBlock:'5px'}}/>
            </div>}

            <div style={{width:'100%' , marginTop: '20px'}}>
                <h3 style={{marginBottom:'5px'}}>{t('show if')}</h3>
                <Radio.Group onChange={(e) => handleElementHide(e , 'show_if_user')} defaultValue={element?.show_if_user?.id || ''}>
                    {userConditiontype?.data?.field_options?.map((option , index) => {
                        return(
                            <Radio key={option?.id} value={option?.id}>{option?.text}</Radio>
                        )
                    })}
                    <Radio value={''}>{t('none')}</Radio>
                </Radio.Group>
            </div>
        </div>
    )
}

export default Conditions