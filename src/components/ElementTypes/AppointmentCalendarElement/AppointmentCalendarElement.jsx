import React, { useState } from 'react'
import * as S from '../styled'
import usePage from '../../../contexts/usePage/usePage'
import useGetElementHideSize from '../../../hooks/useGetElementHideSize/useGetElementHideSize'
import { buildTree, getAppCashDataFromLocalStorage, saveAppCashInLocalStorage, setUpDefaultBuilderStyle } from '../../../utility/globalFun'
import ElementSettingsWrapper from '../ElementSettingsWrapper/ElementSettingsWrapper'
import { Button, Calendar, Empty, message } from 'antd'
import GlobalSelect from '../../GlobalSelect/GlobalSelect'
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query'
import useLang from '../../../contexts/useLanguage/useLang'
import { getModelData, getPageData } from '../../../apiCall/get'
import { getSearchData, postAddNewModelItem, postGenerateAppointment, postPayment } from '../../../apiCall/post'
import LoadingSection from '../../LoadingSection/LoadingSection'
import dayjs from 'dayjs'
import { t } from 'i18next'
import { useNavigate } from 'react-router-dom'
import useUser from '../../../contexts/useUser/useUser'
import useBuilder from '../../../contexts/useBuilder/useBuilder'
import { SyncOutlined } from '@ant-design/icons'
import CustomComponent from '../../DataDisplayTypes/CustomComponent'

const today = new Date();
const formatted = today.toISOString().split('T')[0];

const AppointmentCalendarElement = ({element , isLayoutEle , parent , drag , isOver , canDrop , isMobile}) => {

    const queryClient = useQueryClient()
    const {isView , selectedElement , setSelectedElement , pageData} = usePage()
    const {models} = useBuilder()
    const {lang} = useLang()
    const {visible} = useGetElementHideSize({element})
    const [selectedItem , setSelectedItem] = useState(null)
    const [selectedDate , setSelectedDate] = useState(formatted)
    const [selectedTime , setSelectedTime] = useState(null)
    const [lod , setLod] = useState(false)
    const {user} = useUser()
    const navigation = useNavigate()

    var allStyle = {}
    element?.properties?.map((pro) => {
        allStyle[pro.property_name] = pro?.value
    })

    const assigned_fields = element?.assigned_fields ? JSON.parse(element?.assigned_fields) : {}


    const {data: availableAppointment , isLoading: isLoadingAvailableAppointment} = useQuery({
        queryKey: [
            `model-data`, 
            {model: assigned_fields?.available_appointment},
            {section: element?.id},
            {lang: lang},
            {selectedItem: selectedItem?.id},
            {selectedDate},
        ],
        queryFn: async () => {
            const res = await getSearchData({lang , modelId: assigned_fields?.available_appointment , body: [
                {field: assigned_fields.employees_available_appointment , operator : "=" , value: selectedItem?.id},
                {field: assigned_fields.date_available_appointment , operator : "=" , value: selectedDate},
                {field: assigned_fields.appointment_is_active_field , operator : "=" , value: true},
                // {field: assigned_fields?.appointment_time , operator : "gte" , value: time},
            ]
            , props: `&field_name=1&result_structure_short=1&by_field_code=1`})
            return res?.data?.data?.data || null
        },
        enabled: assigned_fields?.available_appointment && 
        selectedItem &&
        selectedDate &&
        assigned_fields?.employees_available_appointment && 
        assigned_fields?.date_available_appointment &&
        assigned_fields?.appointment_is_active_field
        ? true : false
    })

    const {data: employees ,  isLoading: isLoadingEmployees} = useQuery({
        queryKey: [
            `model-data`, 
            {model: assigned_fields?.employees},
            {section: element?.id},
            {lang: lang},
        ],
        queryFn: async () => {
            const res = await getModelData({lang , modelId: assigned_fields?.employees})
            return res?.data?.data || null
        },
        staleTime: Infinity,
        enabled: assigned_fields?.employees ? true : false
    })



    const {data: availableComponent = getAppCashDataFromLocalStorage({keyName: `componentData_${assigned_fields?.available_component}`})} = useQuery({
        queryKey: ['component' , assigned_fields?.available_component],
        queryFn: async () => {
            const res = await getPageData({modelCode: 'wsb_pages' , pageId: assigned_fields?.available_component})
            if(res?.data?.data?.[0]){
                var newData = {...res?.data?.data?.[0]}
                newData.related_childrens = buildTree(newData?.related_childrens)
                saveAppCashInLocalStorage({keyName: `componentData_${assigned_fields?.available_component}` , data: newData})
                return newData
            }
            return null
        },
        enabled: assigned_fields?.available_component ? true : false,
        placeholderData: keepPreviousData,
        ...(isView ?
            {staleTime: Infinity}
        : {})
    })

    const {data: empComponent = getAppCashDataFromLocalStorage({keyName: `componentData_${assigned_fields?.emp_component}`})} = useQuery({
        queryKey: ['component' , assigned_fields?.emp_component],
        queryFn: async () => {
            const res = await getPageData({modelCode: 'wsb_pages' , pageId: assigned_fields?.emp_component})
            if(res?.data?.data?.[0]){
                var newData = {...res?.data?.data?.[0]}
                newData.related_childrens = buildTree(newData?.related_childrens)
                saveAppCashInLocalStorage({keyName: `componentData_${assigned_fields?.emp_component}` , data: newData})
                return newData
            }
            return null
        },
        enabled: assigned_fields?.emp_component ? true : false,
        placeholderData: keepPreviousData,
        ...(isView ?
            {staleTime: Infinity}
        : {})
    })

    const onSelect = (p) => {
        setSelectedDate(p.format('YYYY-MM-DD'))
        setSelectedTime(null)
    }

    const handleBook = async () => {
        // assigned_fields?.appointments_model
        setLod(true)
        message.open({
            type: 'loading',
            duration: 0,
            key: 'lod-book'
        })
        
        var sendData = {
            available_appointment: selectedTime?.id
        }
        const res = await postGenerateAppointment({data: sendData})
        if(models?.data?.find(i => i?.code == assigned_fields?.appointments_model)?.tags?.includes('order_payment_info') && res?.data?.data?.id){
            const pyres = await postPayment({order_id: res?.data?.data?.id})
            if(pyres?.data?.data?.checkout_url){
                window.location = pyres?.data?.data?.checkout_url
            }
        }
        queryClient.invalidateQueries({queryKey: [
            `model-data`, 
            {model: assigned_fields?.available_appointment},
            {section: element?.id},
            {lang: lang},
            {selectedItem: selectedItem?.id},
            {selectedDate},
        ]})
        setLod(false)
        message.destroy('lod-book')
        if(res?.data?.data?.id && element.link_to_page){
            if(!isView){
                navigation(`/admin/page-editor/${element.link_to_page?.id}?item_id=${res?.data?.data?.id}&model_id=${assigned_fields?.appointments_model}`)
            }else{
                navigation(`/${element.link_to_page?.path}?item_id=${res?.data?.data?.id}&model_id=${assigned_fields?.appointments_model}`)
            }
        }else if(element?.href){
            navigation(element.href)
        }
    }

    return (
        visible &&
            <S.Wrapper
            an={element?.animation_name}
            style={{
                padding:0,
                margin:0,
                background:'',
                backgroundColor:'',
                backgroundImage:'',
                boxShadow: '',
                border: 'none',
                ...(
                    allStyle?.width ? {
                        width: allStyle?.width
                    } : {}
                )
            }} 
            ref={!isView ? drag : null}
            >
                <div
                style={{
                    // display: 'flex',
                    // gap: '20px',
                    // flexWrap: 'wrap',
                    ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement),
                }} 
                onClick={(e)=>{
                    if(!isView && !isLayoutEle){
                        setSelectedElement(element)
                        e.stopPropagation()
                    }
                }}
                className={element?.assign_classname || ''}
                    >
                    <div style={{position: 'absolute' , top:'0px' , right:'0' , color: 'var(--builder-main)'}}>
                        <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
                    </div>

                    {element?.[`text${lang == 'en' ? '' : `_${lang}` }`] && 
                    <p style={{fontWeight: 'bold' , fontSize: '20px' , color: 'var(--font_light)'}}>{element?.[`text${lang == 'en' ? '' : `_${lang}` }`]}</p>
                    }

                    <div style={{ display: 'flex' , flexWrap: 'wrap' , gap: '10px' , height: 'max-content'}}>
                        {isLoadingEmployees ? <SyncOutlined style={{color:"black" , fontSize: '18px'}} spin /> : 
                        employees?.map(employee => {
                            return(
                                empComponent && assigned_fields?.emp_component ? 
                                <div
                                key={employee?.id}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedItem(employee)
                                }}
                                >
                                    <CustomComponent activeItem={selectedItem?.id == employee?.id} component={empComponent} item={employee}/>
                                </div>
                                :
                                <div 
                                onClick={(e) => {
                                    setSelectedItem(employee)
                                }}
                                style={{
                                    borderRadius: '12px' , 
                                    backgroundColor: selectedItem?.id == employee?.id ? 'var(--light_color)' : 'var(--light_bg_color)' , 
                                    color: selectedItem?.id == employee?.id ? 'white' : 'var(--font_light)',
                                    padding: '10px 10px',
                                    minWidth: '100px',
                                    cursor: 'pointer',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                key={employee?.id}
                                >
                                    <h4 style={{fontSize: '0.9rem'}}>{employee?.[assigned_fields?.employee_name_field]}</h4>
                                </div>
                            )
                        })}
                    </div>

                    {selectedItem && 
                    <Calendar
                        value={dayjs(selectedDate)}
                        style={{width: '340px' , backgroundColor: 'transparent'}}
                        fullscreen={false}
                        headerRender={({ value, type, onChange, onTypeChange }) => {
                        const year = value.year();
                        const month = value.month();
                        const yearOptions = Array.from({ length: 20 }, (_, i) => {
                            const label = year - 10 + i;
                            return { label, value: label };
                        });
                        const monthOptions = value
                            .localeData()
                            .monthsShort()
                            .map((label, index) => ({
                            label,
                            value: index,
                            }));
                        return (
                            <div style={{ padding: 8 , paddingTop: 0 , display: 'flex' , gap: '10px' }}>
                                <GlobalSelect
                                size="small"
                                popupMatchSelectWidth={false}
                                value={year}
                                options={yearOptions}
                                style={{height: '30px'}}
                                className={`site-theme ant-select-selector`}
                                onChange={newYear => {
                                    const now = value.clone().year(newYear);
                                    onChange(now);
                                }}
                                />
                                <GlobalSelect
                                size="small"
                                popupMatchSelectWidth={false}
                                style={{height: '30px'}}
                                className={`site-theme ant-select-selector`}
                                value={month}
                                options={monthOptions}
                                onChange={newMonth => {
                                    const now = value.clone().month(newMonth);
                                    onChange(now);
                                }}
                                />
                            </div>
                        );
                        }}
                        onSelect={onSelect}
                        disabledDate={(current) => current && current < dayjs().startOf("day")}
                    />}

                {!selectedDate || !selectedItem ? null : isLoadingAvailableAppointment ? 
                <div style={{flexGrow: 1 , display: 'flex' , maxWidth: '400px'}}> <LoadingSection size={'25px'}/> </div>
                : 
                availableAppointment?.length > 0 ? 
                    <div style={{display: 'flex' , flexWrap: 'wrap' , gap: '10px' , height: 'max-content' , maxWidth: '500px' , justifyContent: 'center'}}>
                        {availableAppointment?.map((appointment) => {
                            return(
                                availableComponent && assigned_fields?.available_component ? 
                                <div 
                                key={appointment?.id}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedTime(appointment)
                                }}
                                >
                                    <CustomComponent activeItem={selectedTime?.id == appointment?.id} component={availableComponent} item={appointment}/>
                                </div>
                                :
                                <div 
                                style={{
                                    borderRadius: '12px' , 
                                    backgroundColor: selectedTime?.id == appointment?.id ? 'var(--light_color)' : 'var(--light_bg_color)' , 
                                    color: selectedTime?.id == appointment?.id ? 'white' : 'var(--font_light)',
                                    padding: '5px 10px',
                                    minWidth: '100px',
                                    cursor: 'pointer',
                                    height: '40px',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                key={appointment?.id}
                                onClick={() => {
                                    setSelectedTime(appointment)
                                }}
                                >
                                    {`${appointment?.[assigned_fields?.appointment_time]?.split(':')[0]}:${appointment?.[assigned_fields?.appointment_time]?.split(':')[1]}`}
                                </div>
                            )
                        })}
                        <div style={{width: '100%' , display: 'flex' , justifyContent: 'center'}}>
                            <Button 
                            style={{backgroundColor: `var(--button_bg_color)` , 
                            color: 'var(--button_color)' , 
                            borderRadius: 'var(--button_border_radius)',
                            }}
                            loading={lod}
                            disabled={lod || !selectedTime}
                            onClick={handleBook}
                            >
                                {t('Book Now')}
                            </Button>
                        </div>
                </div>
                : 
                <div style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center' , flexDirection: 'column'}}>
                    <Empty 
                    description={
                        <p style={{color: 'var(--font_light)'}}>
                        No Dates Available
                        </p>
                        }
                    />
                </div>
                }
            </div>
        </S.Wrapper>
    )
}

export default AppointmentCalendarElement