import React from "react";
import { langId } from "../../utility/globalFun";
import useLang from "../../contexts/useLanguage/useLang";
import { getFieldDefaultValue, getFieldWidget, isBooleanField, isDateField, isDateTimeField, isFieldHasReadOnlyProperty, isFieldRequired, isFieldVisible, isFileField, isListOfOptionsField, isNumberField, isRelatedField, isStringField, isTimeField, isWidgetEmail, isWidgetMultiLine } from "../../utility/typeAndStructure";
import StringField from "./StringField";
import NumberField from "./NumberField";
import BooleanFiled from "./BooleanFiled";
import DateField from "./DateField";
import TimeField from "./TimeField";
import ListOfOptionsField from "./ListOfOptionsField";
import RelatedField from "./RelatedField";
import DateTimeField from "./DateTimeField";
import FileField from "./FileField";
import { t } from "i18next";

const RenderModelFields = ({fields , isMobile}) => {
    const { lang , appTranslation} = useLang()

    return(
        fields?.map((field) => {
            var globalProps = {
                className:`default-form-input-wrapper ${isWidgetMultiLine(getFieldWidget(field)) ? 'full-width' : '' }`,
                style: {margin:'0px'},
                label: isMobile && (isFileField(field) || isBooleanField(field)) ? field?.name : !isMobile ? appTranslation({key: field?.id , type: 'field' , callBack: field?.name }) : '',
                name: field?.code,
                key: field?.id,
                rules: [
                    {required: isFieldRequired(field?.properties) , message: `${appTranslation({key: field?.id , type: 'field' , callBack: field?.name })} ${t('is required')} `},
                    ...(isWidgetEmail(getFieldWidget(field)) ? 
                    [{type: 'email'}]
                    : [])
                ],
            }
            var fieldInfo = {
                isVisible: isFieldVisible(field?.properties),
                isReadOnly: isFieldHasReadOnlyProperty(field?.properties),
                defaultValue: getFieldDefaultValue(field?.properties),
                placeholder : appTranslation({key: field?.id , type: 'field' , callBack: field?.name })
            }
            return(
                // ((field?.data_type == 1 && !field?.language && lang == 'en') || 
                // (field?.data_type != 1 && !field?.language) || 
                // (field?.language == langId(lang))) ? 
                    <React.Fragment key={field?.id}>
                        {isStringField(field) ? 
                            <StringField fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        : 
                        isNumberField(field) ? 
                            <NumberField fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        : 
                        isBooleanField(field) ? 
                            <BooleanFiled fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        : 
                        isDateField(field) ? 
                            <DateField fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        : 
                        isTimeField(field) ? 
                            <TimeField fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        :
                        isDateTimeField(field) ? 
                            <DateTimeField fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        :
                        isListOfOptionsField(field) ? 
                            <ListOfOptionsField fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        : 
                        isRelatedField(field) ? 
                            <RelatedField fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        :
                        isFileField(field) ? 
                            <FileField fieldInfo={fieldInfo} globalProps={globalProps} field={field}/>
                        :
                        null
                        }
                    </React.Fragment>
                // : null
            )
        })
    )
}

export default RenderModelFields