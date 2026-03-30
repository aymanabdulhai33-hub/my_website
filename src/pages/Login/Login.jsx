import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Button, Form, Input , message } from "antd";
import useUser from "../../contexts/useUser/useUser";
import Header from "../../components/Header/Header";
import { Info, InfoConfig } from "../../api/api_config";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../../apiCall/post";
import { StringParam, useQueryParam } from "use-query-params";
import { getRemoteSiteSession } from "../../apiCall/get";
import LoadingSection from "../../components/LoadingSection/LoadingSection";

const Login = () => {
    const {setUserAdmin , userAdmin} = useUser()
    const [lod , setLod] = useState(false)
    const navigate = useNavigate()
    const {mainUrl} = InfoConfig()
    const [token , setToken] = useQueryParam('token' , StringParam)
    const [sId , setSid] = useQueryParam('s_id' , StringParam)

    const handleLogin = async (values) => {
        setLod(true)
        message.open({duration: 0 , type:'loading' , content: t('loading...') , key: 'login'})
        var sendData = {...values}
        const res = await postSignIn({sendData})
        if(res?.data?.data){
            var newAdminUser = {...res?.data?.data}
            var jwt = res?.data?.meta?.token
            var s_id = res?.res.headers.get('s_id')
            newAdminUser = {
                ...newAdminUser,
                jwt,
                s_id
            }
            setUserAdmin(newAdminUser)
            window.localStorage.setItem('user-admin' , JSON.stringify(newAdminUser))
            setTimeout(() => {
                navigate('/admin')    
            }, 1000);
        }
        message.destroy('login')
        setLod(false)
    }

    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    const getSession = async () => {
        setLod(true)
        message.open({duration: 0 , type:'loading' , content: t('loading...') , key: 'login'})
        const getJwt = await getRemoteSiteSession({sId , token})
        if(getJwt && getJwt.data){
            var jwt = getJwt.data.jwt
            var newAdminUser = {
                jwt: jwt,
                s_id: sId
            }
            setUserAdmin(newAdminUser)
            window.localStorage.setItem('user-admin' , JSON.stringify(newAdminUser))
            setTimeout(() => {
                navigate('/admin')    
            }, 1000);
        }else{
            var envUrl = btoa(mainUrl.replace('https://' , '')?.replace('/v3/' , ''))
            var webSite = btoa(window.location.host.replace('www.' , ''))
            var loginUrl = `https://www.sso.1daycloud.com/?domain=${envUrl}&website=${webSite}`
            window.location = loginUrl
        }
        message.destroy('login')
        setLod(false)
    }

      useEffect(() => {
        if(!token && !sId && !userAdmin){
            var envUrl = btoa(mainUrl.replace('https://' , '')?.replace('/v3/' , ''))
            var webSite = btoa(window.location.host.replace('www.' , ''))
            var loginUrl = `https://www.sso.1daycloud.com/?domain=${envUrl}&website=${webSite}`
            window.location = loginUrl
        }else if(token && sId){
            getSession()
        }
      },[])

    return(
        !userAdmin && <>
        <div style={{display:'flex' , justifyContent:'center' , minHeight:'100vh'}}>
            {lod ? <LoadingSection /> : ''}
            {/* <div>
                <div style={{display:'flex' , flexDirection:'column' , gap:'10px' , boxShadow: 'var(--builder-box-shadow-color)', marginTop:'50px' ,  width:'400px' , borderRadius:'30px' , padding:'20px' , background:'var(--builder-bg-light-color)'}}>
                    <h1 style={{fontSize:'2rem'}}>{t('login')}</h1>
                        <Form 
                        layout="vertical"
                        onFinish={handleLogin}
                        validateMessages={validateMessages}
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        >
                            <Form.Item rules={[{required: true} , { type: 'email' }]} label={t('email')} name={'username'}>
                                <Input />
                            </Form.Item>

                            <Form.Item rules={[{required: true}]} label={t('password')} name={'password'}>
                                <Input.Password />
                            </Form.Item>
                            <Button loading={lod} htmlType="submit">{t('login')}</Button>
                        </Form>
                </div>
            </div> */}
        </div>
        </>
    )
}

export default Login