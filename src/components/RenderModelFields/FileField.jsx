import { CloudUploadOutlined } from "@ant-design/icons";
import { Button, Form , Upload } from "antd";
import React from "react";
import { t } from "i18next";
import { getNormFile } from "../../utility/globalFun";

const FileField = ({field , globalProps , fieldInfo}) => {

    return(
        fieldInfo?.isVisible && 
        <Form.Item 
        {...globalProps}
        valuePropName="fileList"
        getValueFromEvent={getNormFile}
        >
            <Upload 
            disabled={fieldInfo?.isReadOnly} 
            beforeUpload={() => false} 
            listType={"picture"} 
            maxCount={1}
            >
                <Button  disabled={fieldInfo?.isReadOnly} icon={<CloudUploadOutlined />}>{t('upload')}</Button>
            </Upload>
        </Form.Item>
    )
}

export default FileField

{/* <div 
style={{
    border: '1px dashed lightgray',
    padding:"5px"
}}
className={globalProps?.className}>
    <input 
    ref={fileRef} 
    type="file" 
    style={{display:'none'}}
    onChange={(e) => {handleChangeFile(e , setFieldValue)}}
    />
    
    {!currentFile ? 
    <div 
    style={{width:'100%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}
    >
        <CloudUploadOutlined 
        style={{fontSize: '50px' , color: fieldInfo?.isReadOnly ? 'lightgray' : '' , cursor:'pointer'}}
        onClick={() => !fieldInfo?.isReadOnly && fileRef?.current?.click()}
        />
    </div>
    :
    <div style={{display:'flex' , gap:'20px' , cursor:'pointer'}}
    onClick={() => !fieldInfo?.isReadOnly && fileRef?.current?.click()}
    >
        {currentFile?.isImage ? <img 
        style={{width: '100px' , height: '50px' , borderRadius: '8px'}}
        src={currentFile?.file}
        /> : <FileTwoTone style={{fontSize: '32px' , color: fieldInfo?.isReadOnly ? 'lightgray' : '' , cursor:'pointer'}} />}
        <DeleteOutlined 
        style={{marginLeft: lang == 'en' ? 'auto' : '' , marginRight: lang == 'ar' ? 'auto' : '' }} 
        onClick={(e) => {
            setCurrentFile(null)
            setFieldValue(field?.code , null)
            fileRef.current.value = ''
            e.stopPropagation()
        }}
        />
    </div>
    }
</div> */}