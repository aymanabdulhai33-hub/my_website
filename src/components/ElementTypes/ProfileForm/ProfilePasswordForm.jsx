import React, { useState } from 'react'
import { Button, Form, Input} from 'antd'
import { t } from "i18next";
import * as S from './ProfileFormStyled'

const ProfilePasswordForm = ({setFormType}) => {
    const [lod , setLod] = useState(false)

    const handlePasswordData = async (values) => {
        setLod(true)
        var sendData = {...values}
        console.log(sendData)
        setLod(false)
    }
    
  return (
    <div>
        <Form layout="vertical" onFinish={handlePasswordData}>
            <div className="flex gap-3 flex-col mb-3">
            <Form.Item style={{margin:0}} label={t('new password')} name={'new_password'} rules={[{ required: true, message: t('This Field Is Required') }]} >
                <Input.Password className="MyInput" placeholder={t('write your new password')} />
            </Form.Item>
            <Form.Item
                style={{ margin: 0 }}
                label={t('confirm password')}
                name={'confirm_password'}
                rules={[
                    { required: true, message: t('This Field Is Required') },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('new_password') !== value) {
                                return Promise.reject(new Error(t('The passwords must not match'))); 
                            }
                            return Promise.resolve();
                        },
                    }),
                ]}
            >
                <Input.Password className="MyInput" placeholder={t('confirm your password')} />
            </Form.Item>
            <S.ForgotTitle onClick={()=>setFormType('login')}>{t('back to profile')}</S.ForgotTitle>
            </div>
            <div style={{display:"flex",width:"100%",justifyContent:"flex-end"}}>
            <Button loading={lod} htmlType="submit" type="primary">{t('save')}</Button>
            </div>
        </Form>
    </div>
  )
}

export default ProfilePasswordForm