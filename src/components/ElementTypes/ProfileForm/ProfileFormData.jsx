import React, { useState } from 'react'
import { Avatar, Button, Form, Input, Upload } from 'antd'
import { t } from "i18next";
import * as S from './ProfileFormStyled'
import { getNormFile} from '../../../utility/globalFun'
import { EditOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';

const ProfileFormData = ({setFormType}) => {
    const [lod , setLod] = useState(false)

    const [imageUrl, setImageUrl] = useState(null);
    const [file, setFile] = useState(null);

    const handleChange = info => {
        const file = info.file.originFileObj;
        if (info.file.status === 'done' || info.file.status === 'uploading') {
        setFile(file);

        const reader = new FileReader();
        reader.onload = e => {
            setImageUrl(e.target.result);
        };
        reader.readAsDataURL(file);
        }
    };

  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      return Upload.LIST_IGNORE;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return Upload.LIST_IGNORE;
    }
    return true;
  };

    const handleProfileData = async (values) => {
        setLod(true)
        var sendData = {...values,avatar: file}
        console.log(sendData)
        setLod(false)
    }

  return (
    <>
        <Form layout="vertical" onFinish={handleProfileData}>
            <div className="flex gap-3 flex-col mb-3">

            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <S.UploadWrapper >
                <Upload
                getValueFromEvent={getNormFile}
                listType="picture-card"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                >
                {imageUrl ? (
                    <Avatar
                    size={100}
                    src={imageUrl}
                    style={{borderRadius:"50%"}}
                    />
                ) : (
                    <div>
                    <Avatar style={{borderRadius:"50%"}} shape="square" size={100} icon={<UserOutlined />} />
                    </div>
                )}
                </Upload>
                <EditOutlined style={{position: 'absolute', bottom: 4, right: 4, fontSize: '12px', color: 'white',background:"var(--builder-main)",borderRadius:"50%",padding:'5px',border:"1px solid white",pointerEvents:"none"}} />
            </S.UploadWrapper>
            </div>
            <Form.Item style={{margin:0}} label={t('full name')} name={'full_name'} rules={[{required: true}]}>
                <Input />
            </Form.Item>
            <Form.Item style={{margin:0}} label={t('user name')} name={'user_name'} rules={[{required: true}]}>
                <Input />
            </Form.Item>
            <Form.Item style={{margin:0}} label={t('email address')} name={'email_address'} rules={[{required: true} , {type: 'email'}]}>
                <Input />
            </Form.Item>
            <S.ForgotTitle onClick={()=>setFormType('forgotpassword')}>{t('forgot password ?')}</S.ForgotTitle>
            </div>
            <div style={{display:"flex",width:"100%",justifyContent:"flex-end"}}>
            <Button loading={lod} htmlType="submit" type="primary">{t('save')}</Button>
            </div>
        </Form>
    </>
  )
}

export default ProfileFormData