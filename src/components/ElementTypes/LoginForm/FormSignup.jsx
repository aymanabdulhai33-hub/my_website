import React, { useState } from 'react'
import { Button, Form, Input } from "antd";
import { t } from 'i18next';
import { postLogin, postSignup } from '../../../apiCall/post';
import useUser from '../../../contexts/useUser/useUser';

const FormSignup = ({ setFormType, configData}) => {
    const [lod , setLod] = useState(false)
    const {setUser} = useUser()

    const onFinish = async (values) => {
      setLod(true)
      var sendData = { ...values }
      const res = await postSignup({sendData})
      if(res?.res?.ok){
        setFormType('login')
      }
      setLod(false)
    }
   
  return (
    <Form onFinish={onFinish} layout="vertical">
      <div className="flex gap-3 flex-col mb-3">
      <Form.Item style={{margin:0}} label={t('email')} name={'email'} rules={[{required:configData?.email_required ?? true} , {type: 'email'}]}>
          <Input />
      </Form.Item>
      <Form.Item style={{margin:0}} label={t('mobile')} name={'mobile'} rules={[{required:configData?.mobile_required ?? true}]}>
          <Input />
      </Form.Item>
      <Form.Item style={{margin:0}} label={t('password')} name={'password'} rules={[{required: true}]}>
          <Input.Password />
      </Form.Item>
      </div>
      <Button loading={lod} htmlType="submit" type="primary">{t('signup')}</Button>
    </Form>
  )
}

export default FormSignup