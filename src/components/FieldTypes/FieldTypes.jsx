import { DatePicker, Input, InputNumber, Switch, TimePicker } from "antd";
import React from "react";
import { isBooleanField, isDateField, isDateTimeField, isListOfOptionsField, isNumberField, isRelatedField, isStringField, isTimeField } from "../../utility/typeAndStructure";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import RelatedField from "../RenderModelFields/RelatedField";
import dayjs from "dayjs";
const FieldTypes = ({field , onChange , defaultValue}) => {

    return(
        <div>
            {isStringField(field) ?
                <Input 
                defaultValue={defaultValue} 
                onChange={(e) => onChange(e.target.value)} />
            : isNumberField(field) ?
                <InputNumber 
                defaultValue={defaultValue}
                style={{width:'100%'}} 
                onChange={(e) => onChange(e)}/>
            : isListOfOptionsField(field) ?
                <GlobalSelect
                defaultValue={defaultValue}
                style={{width:'100%'}}
                onChange={(e) => onChange(e)}
                options={field?.field_options?.map((option) => {
                    return{
                        label: option?.text,
                        value: option?.id
                    }
                })}
                />
            : isBooleanField(field) ?
                <Switch 
                defaultChecked={defaultValue}
                onChange={(e) => onChange(e)}/>
            : isDateField(field) ?
                <DatePicker 
                defaultValue={dayjs(defaultValue , 'YYYY-MM-DD')}
                onChange={(e) => onChange(e.format('YYYY-MM-DD'))}/>
            : isTimeField(field) ?
                <TimePicker 
                defaultValue={dayjs(defaultValue , 'HH:mm:ss')}
                onChange={(e) => onChange(e.format('HH:mm:ss'))}/>
            : isDateTimeField(field) ?
                <DatePicker 
                defaultValue={dayjs(defaultValue , 'YYYY-MM-DD HH:mm:ss')}
                onChange={(e) => onChange(e.format('YYYY-MM-DD HH:mm:ss')) } 
                showTime />
            : isRelatedField(field) ?
                <RelatedField 
                defaultValue={defaultValue}
                noForm 
                onChange={(e) => onChange(e)} field={field}/>
            : 
            <Input 
            defaultValue={defaultValue} 
            onChange={(e) => onChange(e.target.value)}/>
            }
            
        </div>
    )
}

export default FieldTypes