import React, { useCallback, useEffect, useRef, useState } from "react";
import ElementSettingsWrapper from "../ElementSettingsWrapper/ElementSettingsWrapper";
import useGetElementHideSize from "../../../hooks/useGetElementHideSize/useGetElementHideSize";
import * as S from '../styled'
import { setUpDefaultBuilderStyle } from "../../../utility/globalFun";
import usePage from "../../../contexts/usePage/usePage";
import { getReportDataById, getreportFieldsById, getSearchItemData } from "../../../apiCall/get";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Collapse, DatePicker, Form, Input, InputNumber, Popover, Select, Switch, Table, TimePicker } from "antd";
import { TableWrapper } from "../TableElement/styled";
import { renderResizableTitle } from "../TableElement/renderResizableTitle";
import useLang from "../../../contexts/useLanguage/useLang";
import PaginationCompnent from "../../PaginationCompnent/PaginationCompnent";
import LoadingSection from "../../LoadingSection/LoadingSection";
import { getValueFromSearchItemData, isBooleanField, isDateField, isListOfOptionsField, isNumberField, isRelatedField, isStringField, isTimeField } from "../../../utility/typeAndStructure";
import GlobalSelect from "../../GlobalSelect/GlobalSelect";
import { useForm } from "antd/es/form/Form";
import { t } from "i18next";
import ReportChartView from "./ReportChartView";
import { CollapseStyle } from "./styled";


const { RangePicker } = DatePicker;


const ReportElement = ({element , isLayoutEle , isOver , canDrop , drag , parent , isMobile}) => {
    const {selectedElement , isView , setSelectedElement } = usePage()
    const {visible} = useGetElementHideSize({element})
    const queryClient = useQueryClient()
    const {lang} = useLang()
    const [params , setParams] = useState({filters: {} , page: 1})
    
    const {data: reportFields , isFetching: isFetchingreportFields , isLoading: isLoadingreportFields} = useQuery({
        queryKey: ['report_fields' , {id: element?.data_source_model}],
        queryFn: async () => {
            return await getreportFieldsById({reportId: element?.data_source_model})
        },
        placeholderData: keepPreviousData,
        staleTime: Infinity,
        enabled: element?.data_source_model ? true : false
    })

    const {data: reportData , isFetching: isFetchingReportData , isLoading: isLoadingReportData , isPlaceholderData} = useQuery({
        queryKey: ['report_data' , {id: element?.data_source_model} , {page: params?.page} , {filters: params?.filters}],
        queryFn: async () => {
            var filters = ''
            Object.keys(params?.filters)?.map((key) => {
                if(typeof params?.filters[key] == 'object'){
                    filters += `&field_${key}[${params?.filters[key].operator}]=${params?.filters[key].value}`
                }else{
                    filters += `&field_${key}=${params?.filters[key]}`
                }
            })
            var res = await getReportDataById({reportId: element?.data_source_model , page: params?.page , filters: filters})
            if(res?.data?.data){
                var reportDataKeys = res?.data?.data?.map((item , index) => {
                    return {...item , key: index}
                })
                res.data.data = reportDataKeys
            }
            return res
        },
        placeholderData: keepPreviousData,
        enabled: element?.data_source_model ? true : false
    })
    
    const [columns , setColumns] = useState([])

    useEffect(() => {
        if(reportFields){
            setColumns(setUpColumns())
        }
    },[reportFields])


    const setUpColumns = useCallback(() => {
        const newColumns = []
        if(reportFields?.data?.length > 0){
            reportFields?.data?.map((field) => {
                var ele = document.getElementById(`col-${element?.id}-${field?.id}`)
                newColumns.push({
                    title: field?.override_name || field?.field?.name,
                    dataIndex: field?.id,
                    key: field?.id,
                    defaultWidth: 200,
                    element,
                    FilterRender: field?.field ? () => <FilterRender params={params} setParams={setParams} field={field}/> : null,
                    render: (value , row) => {
                        return(
                            <div 
                            id={`col-${element?.id}-${field?.id}`} 
                            className="default-data-div"
                            style={{width: ele?.style?.width ? `${ele?.style?.width}` : `200px`}}
                            >
                                {`${value}`}
                            </div>
                        )
                    }
                })
                
            })
        }
        var colsData = newColumns.map((col) => {
            return{
                ...col,
                title: renderResizableTitle(col , col.dataIndex , lang , newColumns , element)
            }
        })
        return colsData
    },[reportFields])

    const onRow = (row) => {
        console.log(row)
    }

    const handleChangePage = (e) => {
        setParams((prev) => {
            return {...prev , page: e}
        })
    }


    return(
        visible &&
        <S.Wrapper 
        an={element?.animation_name}
        style={{
            ...setUpDefaultBuilderStyle(element , isView , isLayoutEle , isOver , canDrop , selectedElement),
            overflow: 'unset',
            ...(isMobile ?
                {padding: '5px'}
            : {})
        }}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        className={element?.assign_classname || ''}
        ref={!isView && !parent?.page_name ? drag : null}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0' , color: 'var(--builder-main)'}}>
                <ElementSettingsWrapper element={element} isLayoutEle={isLayoutEle} />
            </div>
            <div 
                style={{
                width:'25px',
                height:'25px',
                display:'flex',
                justifyContent:'center' ,
                alignItems:'center' ,
                cursor:'pointer' ,
                border: `2px solid var(--builder-main)` ,
                borderRadius: '8px',
                position: 'absolute' ,
                top: '-25px' ,
                left:0,
                background:'white'
                }}
                onClick={(e) => {
                    e.stopPropagation()
                    queryClient.invalidateQueries({queryKey: ['report_fields' , {id: element?.data_source_model}]})
                    queryClient.invalidateQueries({queryKey: ['report_data' , {id: element?.data_source_model}]})
                }}
            >
                <SyncOutlined spin={isFetchingReportData || isFetchingreportFields} />
            </div>
                <div style={{marginBlock: 10 , width:'100%' , display:'flex' , justifyContent:'flex-end'}}>
                    <PaginationCompnent total={reportData?.meta?.total_items_count} page={params?.page} onChange={handleChangePage} />
                </div>
                <TableWrapper>
                    {(isLoadingreportFields && !reportFields) || (isFetchingreportFields && !reportFields) ?
                    <LoadingSection />
                    :
                    <Table
                        key={`table-${element?.id}`}
                        columns={columns}
                        rowKey={'key'}
                        style={{width: '100px'}}
                        dataSource={reportData?.data?.data || []}
                        loading={(isLoadingReportData && !reportData) || (isFetchingReportData && isPlaceholderData)}
                        pagination={false}
                        rowClassName={'table-row'}
                        rootClassName={"main-table"}
                        size="small"
                        onRow={
                        (record, rowIndex) => {
                            return {
                            onClick: (event) => {onRow ? onRow(record , rowIndex , event) : null},
                            };
                        }}
                    />}
                </TableWrapper>
                <div style={{marginBlock: 10 , width:'100%' , display:'flex' , justifyContent:'flex-end'}}>
                    <PaginationCompnent total={reportData?.meta?.total_items_count} page={params?.page} onChange={handleChangePage} />
                </div>
                {reportFields?.data &&
                    <CollapseStyle>
                        <Collapse
                        className="charts-collapse"
                        items={[
                            {
                                key: 1, 
                                label: t('charts'),
                                children: <ReportChartView element={element} reportData={reportData?.data?.data || []} reportFields={reportFields?.data || []} />
                            }
                        ]}
                        />
                    </CollapseStyle>
                }
        </S.Wrapper>
    )
}

export default ReportElement


const FilterRender = ({field , setParams , params}) => {
    const [form] = useForm()
    const [open , setOpen] = useState(false)
    const handleSearch = (values) => {
        var value = values[field.id]
        if(isDateField(field?.field)){
            value = {
                value: value ? `${value?.[0]?.format("YYYY-MM-DD")},${value?.[1]?.format("YYYY-MM-DD")}` : '',
                operator: 'between'
            }
        }
        if(isTimeField(field?.field)){
            value = value?.format("HH:mm:ss") || ''
        }

        if(isBooleanField(field?.field)){
            value = value ? true : false
        }

        setParams((prev) => {
            var newFilter = {...prev}
            newFilter.filters[field.id] = value
            return newFilter
        })
        setOpen(false)
    }

    const handleResetFilter = () => {
        form.setFieldValue(field.id , '')
        setParams((prev) => {
            var newFilter = {...prev}
            delete newFilter.filters[field.id]
            return newFilter
        })
        setOpen(false)
    }

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
      };

    return(
        <div style={{display:'flex' , alignItems:'center'}}>
            <Popover
            open={open}
            onOpenChange={handleOpenChange}
            trigger={'click'}
            placement="bottom"
            content={() => {
                return(
                    <div style={{width:'200px' , display:'flex' , flexDirection:'column' , gap:'10px'}}>
                        <Form
                        key={`${field?.name}-${field?.id}`}
                        form={form}
                        initialValues={{
                            [field.id]: isDateField(field) ? 
                            params.filters?.[field.id]?.value?.split(',')?.length == 2 ? [dayjs(value?.value?.split(',')[0] , 'YYYY-MM-DD') , dayjs(value?.value?.split(',')[1] , 'YYYY-MM-DD')] : ''
                            : isTimeField(field) ? 
                            params.filters?.[field.id] ? dayjs(params.filters?.[field.id] , 'HH:mm:ss') : ''
                            : params.filters?.[field.id] || ''
                        }}
                        onFinish={handleSearch}
                        layout="vertical"
                        >
                            {isNumberField(field?.field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <InputNumber onWheel={(e) => e.preventDefault()} />
                                </Form.Item>
                            : isStringField(field?.field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <Input />
                                </Form.Item>
                            : isBooleanField(field?.field) ?
                                <Form.Item style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <Switch />
                                </Form.Item>
                            : isDateField(field?.field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <RangePicker />
                                </Form.Item>
                            : isTimeField(field?.field) ?
                                <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                    <TimePicker style={{width:'100%'}}/>
                                </Form.Item>
                            : isRelatedField(field?.field) ?
                                <RelatedFieldFilter field={field}/>
                            : isListOfOptionsField(field?.field) ?
                            <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
                                <GlobalSelect 
                                allowClear={false}
                                options={field?.field?.field_options?.map((option) => {
                                    return{
                                        label: option?.text,
                                        value: option?.id
                                    }
                                }) || []}
                                />
                            </Form.Item>
                            : null}
                            
                            <div style={{display:'flex' , gap:'10px'}}>
                                <Button htmlType="submit" type="primary">{t('search')}</Button>
                                <Button onClick={handleResetFilter} type="primary">{t('reset')}</Button>
                            </div>
                        </Form>
                    </div>
                )
            }}
            >
                <SearchOutlined />
            </Popover>
        </div>
    )
}

const RelatedFieldFilter = ({field}) => {
    const [search , setSearch] = useState('')
    const delayTimer = useRef()
    const {data , isLoading , isFetching} = useQuery({
        queryKey: [{type: 'item_brief' , modelId: field?.field.related_relation[0].model , search}],
        queryFn: async () => {
            const res = await getSearchItemData({modelId: field?.field.related_relation[0].model , search})
            const {data} = res || {}
            return data
        },
        // staleTime: Infinity,
        placeholderData: keepPreviousData,
        enabled: field?.field?.related_relation[0]?.model ? true : false
    })

    const onSearch = (value) => {
        clearTimeout(delayTimer.current);
        delayTimer.current = setTimeout(() => {
            setSearch(value)
        }, 500);
    }

    const onSelect = (e) => {
        setSearch('')
    }

    return(
        <Form.Item rules={[{required: true}]} style={{marginBottom: 10}} label={field?.name} name={field?.id}>
            <Select
            style={{maxWidth:'295px'}}
            filterOption={false}
            showSearch
            onSearch={onSearch}
            onSelect={onSelect}
            loading={isLoading || isFetching}
            options={data && data.data ? data.data.map((item , index) => {
                return{
                    label: getValueFromSearchItemData(item),
                    value: Object.keys(item)[0]
                }
            }): []}
            />
        </Form.Item>
    )
}