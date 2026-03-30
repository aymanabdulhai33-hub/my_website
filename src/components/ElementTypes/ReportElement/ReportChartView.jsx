import React, { useState } from "react";
import { isBooleanField, isDateField, isFileField, isNumberField } from "../../../utility/typeAndStructure";
import styled from "styled-components";
import { t } from "i18next";
import GlobalSelect from "../../GlobalSelect/GlobalSelect";
import LineChart from "../../ChartViewTypes/LineChart/LineChart";
import { Tabs } from "antd";
import useLang from "../../../contexts/useLanguage/useLang";
import BarChart from "../../ChartViewTypes/BarChart/BarChart";
import ColumnChart from "../../ChartViewTypes/ColumnChart/ColumnChart";
import AreaChart from "../../ChartViewTypes/AreaChart/AreaChart";
import FunnelChart from "../../ChartViewTypes/FunnelChart/FunnelChart";
import PieChart from "../../ChartViewTypes/PieChart/PieChart";
import RadialChart from "../../ChartViewTypes/RadialChart/RadialChart";

const ReportChartView = ({element , reportFields , reportData}) => {
    const {lang} = useLang()
    const StringFieldList = reportFields?.filter(i => !isNumberField(i?.field) && !isBooleanField(i?.field) && !isFileField(i?.field)  && !i?.is_sme && i.type == 1)
    const NumberFields = reportFields?.filter(i => isNumberField(i?.field) || i?.is_sme || i.type != 1 || isDateField(i?.field))
    const [viewType , setViewType] = useState(1)
    const [xField , setXField] = useState(StringFieldList?.length > 0 ? handleChangeStringField(StringFieldList[0]?.id , 'value') : null)
    const [yField , setYField] = useState(NumberFields?.length > 0 ? handleChangeStringField(NumberFields[0]?.id , 'value') : null)

    function handleChangeStringField (e , returnValue) {
        if(returnValue == 'value'){
            return e
        }
        setXField(e)
    }

    function handleChangeNumberField (e , returnValue) {
        if(returnValue == 'value'){
            return e 
        }
        setYField(e)
    }


    function ReturnValueName (e) {
        if(Array.isArray(e)){
            var valueOne = reportFields?.find(i => i.id == e?.[0])?.override_name ||  reportFields?.find(i => i.id == e?.[0])?.field?.id
            var valueTow = reportFields?.find(i => i.id == e?.[1])?.override_name ||  reportFields?.find(i => i.id == e?.[1])?.field?.id
            return [valueOne , valueTow]
        }
        var value = reportFields?.find(i => i.id == e)?.override_name ||  reportFields?.find(i => i.id == e)?.field?.id
        return `${value}`
    }

    var newReportDataFormate = xField && yField ? 
        reportData ? reportData?.map((item) => {
        var newObj = {}
        Object.keys(item)?.map((key) => {
            if(reportFields?.find(i => i.id == key)){
                if(!/[^0-9.]/.test(item[key])){
                    newObj[`${reportFields?.find(i => i.id == key)?.override_name || reportFields?.find(i => i.id == key)?.field?.id}`] = Math.floor(item[key])
                    return
                }
                newObj[`${reportFields?.find(i => i.id == key)?.override_name || reportFields?.find(i => i.id == key)?.field?.id}`] = item[key]
            }
        })
        return newObj
    }) : []
    : []

    const defaultChartTheme = [ '#5A6FF0' , '#FF7F50' , '#5266D4' , '#FFA07A' , '#3547B1' , '#FF5C2B' , "#722ED1" , '#FF6B3D' , '#4B6EFF' , "#9B59B6"]

    const getChartTheme = () => {
        const dth = window.localStorage.getItem('chartTheme')

        return dth ? JSON.parse(dth) : defaultChartTheme
    }

    const [chartTheme , setChartTheme] = useState(getChartTheme())

    const chartTypes = [
        { key: '1', label: t('line chart'), Component: LineChart },
        { key: '2', label: t('bar chart'), Component: BarChart },
        { key: '3', label: t('column chart'), Component: ColumnChart },
        { key: '4', label: t('area chart'), Component: AreaChart },
        { key: '5', label: t('Funnel chart'), Component: FunnelChart },
        { key: '6', label: t('pie chart'), Component: PieChart },
        { key: '7', label: t('radial chart'), Component: RadialChart },
    ]

    const items = chartTypes.map(({ key, label, Component }) => ({
    key,
    label,
    children: (
    <Component
        data={newReportDataFormate}
        xField={ReturnValueName(xField)}
        yField={ReturnValueName(yField)}
        chartTheme={chartTheme}
        colors={chartTheme}
    />
    ),
    }))

    return(
        <div>
             <TopSection>
                <LineWrapper>
                    <p>{t('string field')}</p>
                    <GlobalSelect
                        onChange={handleChangeStringField}
                        value={xField}
                        options={StringFieldList?.map((field , index) => {
                            return{
                                label: field?.override_name || field?.field?.name,
                                value: field.id,
                                field: field
                            }
                        })}
                    />
                </LineWrapper>
                <LineWrapper>
                    <p>{t('number field')}</p>
                    <GlobalSelect
                        mode={viewType == 8 ? 'multiple' : ''}
                        onChange={handleChangeNumberField}
                        value={yField}
                        options={NumberFields?.map((field , index) => {
                            return{
                                label: field?.override_name || field?.field?.name,
                                value: field.id,
                                field: field
                            }
                        })}
                    />
                </LineWrapper>
            </TopSection>
            {xField && yField && ReturnValueName(xField) && ReturnValueName(yField) &&
                <Tabs
                onChange={(e) => {
                    if(e != 8){
                        setYField(yField?.[0] || yField)
                    }
                    setViewType(e)
                }}
                direction={lang == 'ar' ? 'rtl' : 'ltr'} 
                defaultActiveKey="1" 
                items={items} 
                destroyInactiveTabPane={true}
                />
            }
        </div>
    )
}

export default ReportChartView


const TopSection = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: flex-end;
gap: 10px;
`

const LineWrapper = styled.div`
width: 250px;
@media (max-width: 300px) {
    width: 100%;
}
`