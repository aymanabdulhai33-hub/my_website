import React, { useState } from 'react'
import { Button, Form, Input } from "antd";
import { t } from 'i18next';
import useUser from '../../../contexts/useUser/useUser';
import { postLogin } from '../../../apiCall/post';

const FormByMobileType = ({sign_in_mobile_opt}) => {
    var showPassInput = sign_in_mobile_opt == 'guest_sign_mobile_pass_otp_both_req' || sign_in_mobile_opt == 'guest_sign_mobile_pass_only'
    var showOtpInput = sign_in_mobile_opt == 'guest_sign_mobile_pass_otp_both_req' || sign_in_mobile_opt == 'guest_sign_mobile_otp_only'

    const [lod , setLod] = useState(false)
    const {setUser} = useUser()
    const [otpInputShow , setOtpInputShow] = useState(false)
    const [data , setData] = useState({})

    const onFinish = async (values) => {
      setLod(true)
      var sendData = !otpInputShow
      ? { ...data, 
          sign_in_type: sign_in_mobile_opt === "guest_sign_mobile_pass_only" 
          ? "mobile_password" 
          : "mobile_sms_otp" 
        }
      : { ...values, ...data, sign_in_type: "mobile_sms_otp" };


      if(!otpInputShow &&  sign_in_mobile_opt == 'guest_sign_mobile_pass_only'){
        const res = await postLogin({ sendData: sendData });
        if(res?.data?.data){
          var s_id = res?.res?.headers?.get('s_id')
          var jwt = res?.data?.meta?.token
          var newUser = {...res?.data?.data , jwt , s_id}
          setUser(newUser)
          window.localStorage.setItem('user' , JSON.stringify(newUser))
        }
      }else if(!otpInputShow &&  sign_in_mobile_opt != 'guest_sign_mobile_pass_only'){
        const res = await postLogin({ sendData: sendData });
        if(res?.res?.ok){
          setOtpInputShow(true)
        }
      }else{
        const res = await postLogin({ sendData: sendData });
          if(res?.data?.data){
          var s_id = res?.res?.headers?.get('s_id')
          var jwt = res?.data?.meta?.token
          var newUser = {...res?.data?.data , jwt , s_id}
          setUser(newUser)
          window.localStorage.setItem('user' , JSON.stringify(newUser))
        }
      }
      setLod(false)
    }
        
  return (
    sign_in_mobile_opt != 'guest_sign_mobile_none' &&
    <Form onFinish={onFinish} layout="vertical">
      <div className="flex gap-3 flex-col mb-3">
      {!otpInputShow ?
      <>
      <Form.Item style={{margin:0}} label={t('mobile')} name={'mobile'} rules={[{required: true}]}>
        <Input onChange={(e) => setData({ ...data, mobile: e.target.value })}/>
      </Form.Item>
      {showPassInput?
      <Form.Item style={{margin:0}} label={t('password')} name={'password'} rules={[{required: true}]}>
        <Input.Password onChange={(e) => setData({ ...data, password: e.target.value })}/>
      </Form.Item>
      :null }
      </>
      :null}
      {otpInputShow && showOtpInput ?
      <Form.Item style={{margin:0}} label={t('verification_code')} name={'verification_code'} rules={[{required: true}]}>
          <Input />
      </Form.Item>
      :null}
      </div>
      <Button loading={lod} htmlType="submit" type="primary">{t('login')}</Button>
    </Form>
  )
}

export default FormByMobileType