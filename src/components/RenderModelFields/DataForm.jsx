import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Button, Form } from "antd";
import { getFieldDefaultValue, isBooleanField, isDateField, isDateTimeField, isFileField, isTimeField } from "../../utility/typeAndStructure";
import { convertTobase64 } from "../../utility/globalFun";
import { postAddNewModelItem, postPayment } from "../../apiCall/post";
import { t } from "i18next";
import * as S from './styled'
import { putEditModelItem } from "../../apiCall/put";
import useTheme from "../../contexts/useTheme/useTheme";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import useBuilder from "../../contexts/useBuilder/useBuilder";

const DataForm = ({element , tabs , isMobile , fields , children , current , setCurrent , isWizard , steps , prev , next , currentItem , setParentsModel}) => {
    const [form] = Form.useForm()
    const [lod , setLod] = useState(false)
    const [trigger , setTrigger] = useState(0)
    const queryClient = useQueryClient()
    const {siteTheme} = useTheme()
    const {models} = useBuilder()
    const navigate = useNavigate()

    const setUpDefaultValues = () => {
        var iniData = {}
        fields?.map((field) => {
            
            if(currentItem && (element?.form_update_item?.code == 'current_list_item' || element?.form_update_item?.code == 'url_parameter')){
                if(isDateField(field) && currentItem[field?.code]){
                    iniData[field.code] = dayjs(currentItem[field?.code] , 'YYYY-MM-DD')
                }else if(isTimeField(field) && currentItem[field?.code]){
                    iniData[field.code] = dayjs(currentItem[field?.code] , 'HH:mm:ss')
                }else if(isDateTimeField(field)){
                    iniData[field.code] = dayjs(currentItem[field?.code] , 'YYYY-MM-DD HH:mm:ss')
                }else if(isFileField(field) && currentItem[field?.code]){
                    if(currentItem[field?.code]?.file_url){
                        iniData[field.code] = [
                            {
                                ...currentItem[field?.code],
                                url: currentItem[field?.code]?.file_url
                            }
                        ]
                    }else{
                        iniData[field.code] = []
                    }
                }else{
                    iniData[field.code] = currentItem[field.code]
                }
            }else{
                if(isDateField(field)){
                    iniData[field.code] = getFieldDefaultValue(field?.properties) ? dayjs(getFieldDefaultValue(field?.properties) , 'YYYY-MM-DD') : null
                }else if(isTimeField(field)){
                    iniData[field.code] = getFieldDefaultValue(field?.properties) ? dayjs(getFieldDefaultValue(field?.properties) , 'HH:mm:ss') : null
                }else{
                    iniData[field.code] = getFieldDefaultValue(field?.properties) || null
                }
            }
            
        })
        return iniData
    }

    const handleSubmitForm = async (values) => {
        setLod(true)
        var sendData = {...values}
        let allKey = Object.keys(values);
        for (let i = 0; i < allKey.length; i++) {
            var key = allKey[i]
            var currentField = fields?.find(i => i?.code == key)
            if(isDateField(currentField) && sendData[key]){
                sendData[key] = sendData[key].format("YYYY-MM-DD")
            }else if(isTimeField(currentField) && sendData[key]){
                sendData[key] = sendData[key].format("hh:mm:ss")
            }else if(isDateTimeField(currentField)){
                sendData[key] = sendData[key].format("YYYY-MM-DD hh:mm:ss")
            }else if(isBooleanField(currentField)){
                sendData[key] = sendData[key] ? true : false
            }else if(isFileField(currentField)){
                if(sendData[key] && sendData[key]?.length > 0 && !sendData[key]?.[0]?.file_url){
                    sendData[key] = {
                        file: await convertTobase64(sendData[key]?.[0]?.originFileObj),
                        ext: sendData[key]?.[0]?.type.split("/")[1]
                    }
                }else if(sendData[key]?.[0]?.file_url){
                    delete sendData[key]
                }else{
                    sendData[key] = null
                }
            }

            if(sendData[key] === undefined || sendData[key] === null || sendData[key] === ''){
                delete sendData[key]
            }
        }
        

        var res
        if(currentItem && element?.form_update_item?.code == 'current_list_item' || element?.form_update_item?.code == 'url_parameter'){
            res = await putEditModelItem({model_id: element?.data_source_model , sendData , id: currentItem?.id})
        }else{
            res = await postAddNewModelItem({model_id: element?.data_source_model , sendData , hideMSG: models?.data?.find(i => i?.id == element?.data_source_model)?.tags?.includes('order_payment_info')})
        }

        if(models?.data?.find(i => i?.id == element?.data_source_model)?.tags?.includes('order_payment_info') && res?.data?.data?.item_id && !currentItem && element?.form_update_item?.code != 'current_list_item' && element?.form_update_item?.code != 'url_parameter'){
            const pyres = await postPayment({order_id: res?.data?.data?.item_id})
            if(pyres?.data?.data?.checkout_url){
                window.location = pyres?.data?.data?.checkout_url
                return
            }
        }

        if(res?.data){
            queryClient.invalidateQueries({queryKey: [`model-data` , {model: element?.data_source_model}]})

            if(element?.form_update_item?.code == 'url_parameter'){
                queryClient.invalidateQueries({queryKey:['item-data' , `${currentItem?.id}`]})
            }
            
        }

        if(setParentsModel && res?.data){
            setParentsModel(false)
        }

        if(element?.form_update_item?.code == 'url_parameter'){
            navigate(-1)
        }

        if(!currentItem){
            form.resetFields()
        }

        setLod(false)
    }

    useEffect(() => {
        if(isWizard && trigger){
            var gotField = form.getFieldsError()?.find(i => i?.errors?.length > 0)
            if(gotField){
                var fieldContainer = null 
                for(var tab = 0; tab <= tabs?.containers?.length - 1; tab++){
                    for(var i = 0; i <= tabs?.containers[tab]?.containers?.length - 1; i++){
                        if(tabs?.containers[tab]?.containers[i]?.fields?.find(i => i?.code == gotField?.name?.[0])){    
                            fieldContainer = tab
                            break;
                        }
                    }
                    if(fieldContainer || fieldContainer === 0){
                        break;
                    }
                }
                if(fieldContainer || fieldContainer ===  0){
                    setCurrent(fieldContainer)
                }
            }
        }
    },[trigger])

    return(
        <S.Wrapper siteTheme={siteTheme} isMobile={isMobile}>
        <Form
            form={form}
            layout="vertical"
            style={{display:'flex' , maxWidth: '525px' , gap:'10px' , flexWrap: 'wrap' , alignItems:'center'}}
            onFinish={handleSubmitForm}
            initialValues={setUpDefaultValues()}
            onSubmitCapture={() => {
                setTimeout(() => {
                    setTrigger(Date.now())
                }, 0);
            }}
            >
                {children}
                {/* <RenderModelFields isMobile={isMobile} fields={fields}/> */}

                {!isWizard &&
                <div style={{width:'100%' , marginTop:'5px'}}>
                    <Button style={{background: siteTheme?.button_bg_color , color: 'white'}} loading={lod} type="primary" htmlType="submit">{currentItem ? t('save') : t('submit')}</Button>
                </div>}

                {isWizard && <div className="w-full flex gap-3">
                    {steps?.length == 1 ? null : current > 0 && (
                    <Button disabled={lod} onClick={prev} >
                        {t('previous')}
                    </Button>
                    )}

                    {steps?.length == 1 ? null : current < steps.length - 1 && (
                    <Button disabled={lod} type="primary" onClick={next}>
                        {t('next')}
                    </Button>
                    )}
                    
                    {steps?.length == 1 || steps?.length - 1 == current && (
                    <Button
                    type="primary"
                    htmlType="submit"
                    loading={lod}
                    style={{background: siteTheme?.button_bg_color , color: 'white'}}
                    >
                        {currentItem ? t('save') : t('submit')}
                    </Button>
                    )}
                </div>}

        </Form>
        </S.Wrapper>
    )
}

export default DataForm