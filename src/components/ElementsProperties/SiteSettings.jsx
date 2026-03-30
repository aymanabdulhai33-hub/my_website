import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, ColorPicker, Form, Input, Switch, Upload } from "antd";
import { t } from "i18next";
import React, { useState } from "react";
import useTheme from "../../contexts/useTheme/useTheme";
import { postAddNewSettings } from "../../apiCall/post";
import { putEditSettings } from "../../apiCall/put";
import { getBase64, getNormFile } from "../../utility/globalFun";
import * as S from './styled'

const SiteSettings = () => {
    const [lod , setLod] = useState(false)
    const {siteTheme} = useTheme()
    const queryClient = useQueryClient()
    // console.log(siteTheme)

    const handleSettings = async (values) => {
        setLod(true)
        var sendData = {...values}
        
        if(siteTheme){
            Object.keys(sendData).map((key) => {
                if(sendData[key] == siteTheme[key]){
                    delete sendData[key]
                }
            })
        }
        if(values?.mobile_main_logo?.[0]?.originFileObj){
            const imgObj = {
                ext: values.mobile_main_logo[0].type.split("/")[1],
                file: await getBase64(values.mobile_main_logo[0].originFileObj)
            }
            sendData.mobile_main_logo = imgObj
        }else if(!sendData.mobile_main_logo?.length == 0){
            sendData.mobile_main_logo = null
        }else{
            delete sendData.mobile_main_logo
        }
        
        if(values?.splash_page_image?.[0]?.originFileObj){
            const imgObj = {
                ext: values.splash_page_image[0].type.split("/")[1],
                file: await getBase64(values.splash_page_image[0].originFileObj)
            }
            sendData.splash_page_image = imgObj
        }else if(!sendData.splash_page_image?.length == 0){
            sendData.splash_page_image = null
        }else{
            delete sendData.splash_page_image
        }
        const colorKeys = [
            'dark_color',
            'light_color',
            'font_dark',
            'font_light',
            'dark_bg_color',
            'light_bg_color',
            'button_bg_color',
            'button_color',
            'input_bg_color',
            'input_border_color',
            'mobile_bg_color',
            'splash_page_bg_color',
        ];
        
        colorKeys.forEach(key => {
            if (sendData[key] && typeof sendData[key] == 'object') {
                sendData[key] = values?.[key]?.toHexString();
            }
        });
            
        if(siteTheme){
            delete sendData?.id
            delete sendData?.is_active
            await putEditSettings({sendData , id: siteTheme?.id})
            
        }else{
            await postAddNewSettings({sendData})
        }
        queryClient.invalidateQueries({queryKey: ['builder-theme']})
        setLod(false)
    }

    return(
        <div className="h-[750px] global-scroll-y">
            <Form
            key={siteTheme ? siteTheme?.id : 'new'}
            layout="vertical"
            style={{display:'flex' , flexWrap:'wrap' , gap:'20px'}}
            onFinish={handleSettings}
            initialValues={{
                ...(siteTheme ? siteTheme : 
                {
                    default_show_sort: false,
                    override_darktheme: false
                }),
                mobile_main_logo: siteTheme?.mobile_main_logo ? [{
                    ...siteTheme?.mobile_main_logo,
                    url: siteTheme?.mobile_main_logo?.file_url
                }] :  [],
                splash_page_image: siteTheme?.splash_page_image ? [{
                    ...siteTheme?.splash_page_image,
                    url: siteTheme?.splash_page_image?.file_url
                }] :  [],
            }}
            >

                <S.SiteSettingsWrapper>
                
                <div style={{display:"flex",gap:"20px"}}>
                <Form.Item name={'dark_color'} label={t('dark color')}>
                    <ColorPicker showText />
                </Form.Item>

                <Form.Item name={'light_color'} label={t('light color')}>
                    <ColorPicker showText/>
                </Form.Item>
                </div>

                
                <div style={{display:"flex",gap:"20px"}}>
                <Form.Item name={'font_dark'} label={t('dark font')}>
                    <ColorPicker showText/>
                </Form.Item>

                <Form.Item name={'font_light'} label={t('light font')}>
                    <ColorPicker showText/>
                </Form.Item>
                </div>

                <Form.Item name={'light_bg_color'} label={t('light background color')}>
                    <ColorPicker showText/>
                </Form.Item>

                <Form.Item name={'dark_bg_color'} label={t('dark background color')}>
                    <ColorPicker showText/>
                </Form.Item>

                
                
                <Form.Item name={'button_bg_color'} label={t('button background color')}>
                    <ColorPicker showText/>
                </Form.Item>

                <Form.Item name={'button_color'} label={t('button color')}>
                    <ColorPicker showText/>
                </Form.Item>

                <Form.Item name={'input_bg_color'} label={t('input background color')}>
                    <ColorPicker showText/>
                </Form.Item>

                <Form.Item name={'input_border_color'} label={t('input border color')}>
                    <ColorPicker showText/>
                </Form.Item>

                <Form.Item name={'mobile_bg_color'} label={t('mobile background color')}>
                    <ColorPicker showText/>
                </Form.Item>

                <Form.Item name={'splash_page_bg_color'} label={t('splash page background color')}>
                    <ColorPicker showText/>
                </Form.Item>

                {/* <Form.Item name={'override_darktheme'} label={t('override dark theme colors')}>
                    <Switch />
                </Form.Item> */}

                <Form.Item name={'default_show_sort'} label={t('show sort input')}>
                    <Switch />
                </Form.Item>

                <Form.Item name={'show_element_anyway'} label={t('show element anyway')}>
                    <Switch />
                </Form.Item>

                <Form.Item name={'ignore_user_condition'} label={t('ignore user condition')}>
                    <Switch />
                </Form.Item>

                <Form.Item name={'button_border_radius'} label={t('button border radius')}>
                    <Input /> 
                </Form.Item>

                <Form.Item name={'input_border_radius'} label={t('input border radius')}>
                    <Input /> 
                </Form.Item>

                <Form.Item name={'input_border_size'} label={t('input border size')}>
                    <Input /> 
                </Form.Item>


                <Form.Item valuePropName="fileList" label={t('splash page image')} name={'splash_page_image'} getValueFromEvent={getNormFile}>
                    <Upload accept={'image/*'} beforeUpload={() => false} listType={"picture"} maxCount={1}>
                        <Button type="dashed">{t('upload')}</Button>
                    </Upload>
                </Form.Item>

                <Form.Item valuePropName="fileList" label={t('mobile main logo')} name={'mobile_main_logo'} getValueFromEvent={getNormFile}>
                    <Upload accept={'image/*'} beforeUpload={() => false} listType={"picture"} maxCount={1}>
                        <Button type="dashed">{t('upload')}</Button>
                    </Upload>
                </Form.Item>

                <div style={{width:'100%'}}>
                    <Button loading={lod} type="primary" htmlType="submit">{siteTheme ? t('save') : t('submit')}</Button>
                </div>
                </S.SiteSettingsWrapper>
            </Form>
        </div>
    )
}

export default SiteSettings