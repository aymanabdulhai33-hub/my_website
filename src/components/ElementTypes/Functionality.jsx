import { DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber,Radio,Switch,Tag } from "antd";
import { t } from "i18next";
import React, { useState } from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import usePage from "../../contexts/usePage/usePage";
import useTheme from "../../contexts/useTheme/useTheme";
import { HideOnSize,ImgUrl, IsBlank, LinkDes,ShowOnSize} from "../DescriptionProperties/DescriptionProperties";
import { getShowUserConditionField } from "../../apiCall/get";
import { useNavigate } from "react-router-dom";
import useBuilder from "../../contexts/useBuilder/useBuilder";

const Functionality = ({element}) => {
    
    const {updatePageElement , page , eventActionsTypes , isFetchingEventActionsTypes , deleteEventsById , getFieldCode , assets , isLoadingAssets , AddNewEvent , isMobilePage , UpdateElementEvent , itemId} = usePage()
    const [lod , setLod] = useState(false)
    const [lodEvalFunction , setLodEvalFunction] = useState(false)
    const [lodRoot , setLodRoot] = useState(false)
    const {themeColor} = useTheme()
    const queryClient = useQueryClient()
    const {pagesModel , isFetchingPagesModel} = useBuilder()

    // function gotToDetailsPage() {
    //     if(item?.id){
    //     navigate(`/about?item_id${item.id}`)
    //     }
    // }

    const handleChangeLinkUrl = (e) => {
        if((element.href == e.target.value) || (!element.href && !e.target.value)){
            return
        }

        var newValue = {
            [getFieldCode('href')]: e.target.value,
            [getFieldCode('link_to_page')]: null,
        }
        updatePageElement({element , dataObject: newValue})
    }


    const handleChangeToPage = (value) => {
        var newValue = {
            [getFieldCode('link_to_page')]: value || null,
            [getFieldCode('href')]: ''
        }
        updatePageElement({element , dataObject: newValue})
    }

    const handleChangeElementPropertyUrl = (e , key , isAssets) => {
        if(!isAssets && ((element?.[key] == e.target.value) || (!element?.[key] && !e.target.value))){
            return
        }

        var newValue = {
            [getFieldCode(key)]: isAssets ? (e || '') : e.target.value
        }
        updatePageElement({element , dataObject: newValue})
    }
    

    const handleAddEvent = async (values) => {
        setLod(true)
        var sendData = {...values}

        sendData.related_element = element?.id
        await AddNewEvent(sendData , element)
        setLod(false)
    }

    const handleDeleteEvent = async (event) => {
        deleteEventsById(event , element)
    }

    const handleRootElement = async (e) => {
        setLodRoot(true)
        updatePageElement({element , dataObject: {
            is_root_element_tpl: e
        }})
        queryClient.invalidateQueries({queryKey: ['templates']})
        setLodRoot(false)
    }

    const handleChangeEvalFunction = (values) => {
        setLodEvalFunction(true)
      
        var sendData = {...values}
        if(sendData?.eval_function == element?.eval_function){
            delete sendData.eval_function
            setLodEvalFunction(false)
            return
        }

        updatePageElement({element , dataObject: sendData})
        setLodEvalFunction(false)
    }

    const handleChangeEventInfo = async (value , item , key) => {
        if((!value && !item[key]) || (value == item[key]) ){
            return
        }

        var sendData = {
            [key]: value
        }

        UpdateElementEvent(sendData , item?.id , element)
    }

    var EleEve = element?.related_events || []

    var isDataDisplay =  element?.element_type?.code == 'container' || element?.element_type?.code == 'box' || element?.element_type?.code == 'category_list_item'

    var eventTypes = isDataDisplay ? element?.data_source_model ? eventActionsTypes?.data?.field_options?.filter(i => i.code == 'to_details') : null : [...eventActionsTypes?.data?.field_options]
    eventTypes = page?.content_type?.code != 'custom_dynamic_component' && !itemId && element?.element_type?.code == 'button' ? eventTypes?.filter(i => i.code != 'to_details') : eventTypes
    eventTypes = element?.element_type?.code == 'dropdown' ? eventTypes?.filter(i => i.code == 'change_language') : eventTypes

    return(
        <>
        {
        element?.element_type?.code == 'button' ||
        element?.element_type?.code == 'dropdown' ||
        isDataDisplay
        ? 
        <div style={{marginBottom:'10px' , display:'flex' , flexDirection:'column' , gap: '10px'}}>
            {/* to_details */}
            {EleEve?.length == 0 && <Form
            onFinish={handleAddEvent}
            layout="vertical"
            >
                <Form.Item style={{marginBottom:10}} label={t('action')} name={'event_action'} rules={[{required: true}]}>
                    <GlobalSelect
                    loading={isFetchingEventActionsTypes}
                    style={{width:'250px'}}
                    options={eventTypes?.map((item) => {
                        return{
                            label: item?.text,
                            value: item?.id
                        }
                    }) || []} />
                </Form.Item>
                <div>
                    <Button loading={lod} type="primary" htmlType="submit">{t('create')}</Button>
                </div>
            </Form>}


            {EleEve?.map((event , index) => {
                return(
                    <div style={{display:'flex' , gap: '20px' , flexWrap: 'wrap' , alignItems:'center'}} key={index}>
                        <Tag color="purple">
                            {event?.event_action?.text} 
                            <DeleteOutlined 
                            style={{color: themeColor?.red , cursor:'pointer' , marginInline:'5px'}} 
                            onClick={() => handleDeleteEvent(event)}
                            />
                        </Tag>
                        {event?.event_action?.code == 'to_details' ?
                            <div>
                                <GlobalSelect
                                onChange={(e) => handleChangeEventInfo(e , event , 'to_page')}
                                defaultValue={event?.to_page?.id}
                                loading={isFetchingPagesModel}
                                style={{width:'250px'}}
                                options={pagesModel?.data?.data?.data?.filter(i =>  i?.content_type?.code == 'page' || i?.content_type?.code == 'mobile_page')?.map(i => {
                                    return{
                                        label: i?.page_name,
                                        value: `${i?.id}`
                                    }
                                })
                                } />
                            </div> 
                        :
                        event?.event_action?.code == 'store_in_local_storage' ?
                            <div>
                                <p>{t('key name')}</p>
                                <Input defaultValue={event?.key_name} onBlur={(e) => handleChangeEventInfo(e.target.value , event , 'key_name')}/>
                            </div>
                        : null}
                    </div>
                )
            })}


            {element?.element_type?.code == 'button' &&
            <>
            <hr style={{marginTop:'10px'}}/>
            <Form
            layout="vertical"
            onFinish={handleChangeEvalFunction}
            initialValues={{
                eval_function: element?.eval_function || ''
            }}
            >
                <Form.Item style={{marginBottom:'10px'}} label={t('java script function')} name={'eval_function'}>
                    <Input.TextArea style={{height: '100px'}}/>
                </Form.Item>
                <div>
                    <Button loading={lodEvalFunction} type="primary" htmlType="submit">{t('submit')}</Button>
                </div>
            </Form>
            </>
            }

        </div>
        : null}

        {element?.element_type?.code == getFieldCode('link') || element?.element_type?.code == 'button' || element?.element_type?.code == 'appointment_calendar' ? 
        <div style={{width:'550px'}}>
            <p>{t(element?.element_type?.code == 'appointment_calendar' ? 'Redirect Page' : 'link')}</p>
            <Input placeholder="/link" onBlur={handleChangeLinkUrl} defaultValue={element?.href}/>
            <br />
            <br />
            <GlobalSelect
                onChange={(e) => handleChangeToPage(e)}
                defaultValue={element?.link_to_page?.id}
                loading={isFetchingPagesModel}
                style={{width:'250px'}}
                options={pagesModel?.data?.data?.data?.filter(i => !isMobilePage ? i?.content_type?.code == 'page' : i?.content_type?.code == 'mobile_page')?.map(i => {
                    return{
                        label: i?.page_name,
                        value: `${i?.id}`
                    }
                })} 
            />
            <br />
            <br />
            {IsBlank}
            <Switch defaultChecked={element?.is_blank} onChange={(e) => handleChangeElementPropertyUrl({target: {value: e}} , 'is_blank')}/>
        </div>
        :
        element?.element_type?.code == getFieldCode('image') ? 
        <div style={{width:'550px'}}>
            {ImgUrl}
            <Input onBlur={(e) => handleChangeElementPropertyUrl(e , 'image_url')} defaultValue={element?.image_url}/>
            <br />
            <br />
            <GlobalSelect
                onChange={(e) => handleChangeElementPropertyUrl(e , 'image_url' , true)}
                loading={isLoadingAssets}
                // style={{width:'250px'}}
                defaultValue={assets?.data?.find(i => i?.image_source_url?.file_url == element?.image_url) || ''}
                options={assets?.data?.map((item) => {
                    return{
                        label: item?.image_name,
                        value: item?.image_source_url?.file_url
                    }
                }) || []} 
            />
            <br />
            <br />
            {LinkDes}
            <Input onBlur={(e) => handleChangeElementPropertyUrl(e , 'href')} defaultValue={element?.href}/>
            <br />
            <br />
            {IsBlank}
            <Switch defaultChecked={element?.is_blank} onChange={(e) => handleChangeElementPropertyUrl({target: {value: e}} , 'is_blank')}/>
        </div>
        :
        <div style={{width:'550px'}}>
        </div>
        }
        
        {element?.element_type?.code == 'box_tpl' && 
        <div>
                    <hr />
            <p>{t('is root element')}</p>
            <Switch loading={lodRoot} defaultChecked={element?.is_root_element_tpl} onChange={handleRootElement}/>
        </div>
        }
        </>
    )
}

export default Functionality