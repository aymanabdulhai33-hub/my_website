import { SettingOutlined } from "@ant-design/icons";
import {Popover,Tabs} from "antd";
import { t } from "i18next";
import React from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAppModels } from "../../apiCall/get";
import usePage from "../../contexts/usePage/usePage";
import DataTranslate from "./DataTranslate";
import DataConfig from "./DataConfig";
import Functionality from "./Functionality";
import OptionsItems from "./OptionsItems";
import Display from "./Display";
import Animation from "./Animation";
import Conditions from "./Conditions";
import ElementDataDisplay from "./ElementDataDisplay";
import useBuilder from "../../contexts/useBuilder/useBuilder";
import TableConfig from "./TableConfig";
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";

const ElementSettings = ({element , isDevComponent}) => {
    const {getFieldCode , isMobilePage} = usePage()
    const {models , isFetchingModels} = useBuilder()

    const items = isDevComponent ? [
        {
            key: '1',
            label: t('data config'),
            children: <DataTranslate isDevComponent={isDevComponent} element={element}/>,
        } 
    ] : [
        (element?.element_type?.code == getFieldCode('link') ||
            element?.element_type?.code == getFieldCode('text') ||
            element?.element_type?.code == getFieldCode('button') ||
            element?.element_type?.code == getFieldCode('dropdown') ||
            element?.element_type?.code == 'item_details' ||
            element?.element_type?.code == 'appointment_calendar'
            ? {
            key: '4',
            label: t('data translate'),
            children: <DataTranslate element={element}/>,
        } 
        : {}),
        (element?.element_type?.code == 'box' ||
        element?.element_type?.code == 'model_form' || 
        element?.element_type?.code == 'model_wizard' || 
        element?.element_type?.code == 'container' || 
        element?.element_type?.code == 'category_list_item' ||
        element?.element_type?.code == 'item_list_detils' ||
        element?.element_type?.code == 'item_details' ||
        element?.element_type?.code == 'report' ||
        element?.element_type?.code == 'component' ||
        element?.element_type?.code == 'banner_slider' ||
        element?.element_type?.code == 'appointment_calendar' ||
        element?.element_type?.code == 'auto_slider' ? 
        {
            key: '1',
            label: t('data config'),
            children: <DataConfig element={element} models={models} isFetchingModels={isFetchingModels} />,
        }
        : {}),

        (element?.element_type?.code == 'table' ? {
            key: '10',
            label: t('table config'),
            children: <TableConfig element={element} models={models}/>,
        } : {} ),

        (element?.element_type?.code == 'table' ||
        element?.element_type?.code == 'container' ||
        element?.element_type?.code == 'category_list_item' ||
        element?.element_type?.code == 'item_list_detils' ||
        element?.element_type?.code == 'box'
        ? {
            key: '11',
            label: t('advanced search'),
            children: <AdvancedSearch element={element} models={models}/>,
        } : {} ),

        {
            key: '2',
            label: t('functionality'),
            children: <Functionality element={element}/>,
        },

        (element?.element_type?.code == getFieldCode('dropdown') || 
        element?.element_type?.code == getFieldCode('button') 
        ? {
            key: '3',
            label: t('display'),
            children: <Display element={element}/>,
        } 
        : {}),

        (
            (element?.element_type?.code == getFieldCode('text' ) ) ||
            (element?.element_type?.code == getFieldCode('image') ) ||
            (element?.element_type?.code == getFieldCode('table') ) 
        ) ? {
            key: '8',
            label: t('data display'),
            children: <ElementDataDisplay element={element}/>,
        } : {},

        (element?.element_type?.code == getFieldCode('dropdown') ?
            {
            key: '9',
            label: t('options'),
            children: <OptionsItems element={element}/>,
        } : {}),

        {
            key: '7',
            label: t('conditions'),
            children: <Conditions element={element}/>,
        },
        (!isMobilePage ? {
            key: '6',
            label: t('animation'),
            children: <Animation element={element}/>,
        } : {}),
    ]

    const content = (
        <div>
            <Tabs 
                items={items} 
            />
        </div>
    )

    return(
        <Popover trigger={["click"]} content={content}>
            <SettingOutlined style={{fontSize:'18px'}}/>
        </Popover>
    )
}

export default ElementSettings