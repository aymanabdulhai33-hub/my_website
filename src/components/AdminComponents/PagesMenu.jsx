import React, { useEffect, useState } from "react";
import useBuilder from "../../contexts/useBuilder/useBuilder";
import LoadingSection from "../LoadingSection/LoadingSection";
import { CodeSandboxOutlined, DeleteOutlined, EditOutlined, FundProjectionScreenOutlined, MobileOutlined, MoreOutlined, PlusCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { App, Button, Dropdown, Form, Input, Menu, Modal, Switch, Upload, message } from "antd";
import { t } from "i18next";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import { createMSG, getBase64, getDevMode, getNormFile } from "../../utility/globalFun";
import { postAddNewElement, postNewComponent } from "../../apiCall/post";
import { useQueryClient } from "@tanstack/react-query";
import { putComponent } from "../../apiCall/put";
import { PageLayout, PageName, PagePath, PageType } from "../DescriptionProperties/DescriptionProperties";
import useTheme from "../../contexts/useTheme/useTheme";
import { delElement } from "../../apiCall/del";

const PagesMenu = ({data , isTemplates , isLoading , width , isPages}) => {
    const {pageId} = useParams()
    const {builderMode , themeColor} = useTheme()
    const [addNewPageModal , setAddNewPageModal] = useState(false)
    const {modal} = App.useApp()
    const [lod , setLod] = useState(false)
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { Layouts , isFetchingLayouts , elemnetTypes , pageContentTypes , pagesIconsTypes , isContentTypePage , isContentTypeMobilePage, isContentTypeTemplate , isContentTypeMobileTemplate} = useBuilder()

    const handlePage = async (values) => {
        if(values?.content_type == isContentTypePage() && !values?.path && !values?.is_home_page){
            createMSG({duration: 3 , type: 'error' , content: t('path is required for page type')})    
            return
        }
        setLod(true)
        createMSG({})
        var sendData = {...values}
        if(!sendData?.related_layout){
            sendData.related_layout = null
        }
        
        if(values?.component_image?.[0]?.originFileObj){
            const imgObj = {
                ext: values.component_image[0].type.split("/")[1],
                file: await getBase64(values.component_image[0].originFileObj)
            }
            sendData.component_image = imgObj
        }else if(!sendData.component_image?.length == 0){
            sendData.component_image = null
        }else{
            delete sendData.component_image
        }

            if(addNewPageModal != 'new'){
                const res = await putComponent({sendData , id: addNewPageModal})
                if(res){
                    setAddNewPageModal(false)
                }
            }else{
                const res = await postNewComponent({sendData})
                if(sendData?.content_type == isContentTypePage()){
                    var defaultContainer = {
                        element_type: elemnetTypes?.data?.field_options?.find(i => i.code == 'container' )?.id ,
                        related_page: res?.data?.data?.item_id
                    }
                    await postAddNewElement({sendData: defaultContainer , modelCode: 'child_elem'})
                }

                if(res){
                    setAddNewPageModal(false)
                }
            }
            queryClient.invalidateQueries({queryKey: ['components']})
            queryClient.invalidateQueries({queryKey: ['templates']})
            queryClient.invalidateQueries({queryKey: ['page']})
        setLod(false)
        createMSG({destroy: true})

    }

    const getCurrentPage = (id) => {
        return pages?.find(i => i.id == id)
    }

    const handleDeletePage = async (page) => {
        modal.confirm({
            icon: <DeleteOutlined style={{color: themeColor?.red}}/>,
            maskClosable: true,
            type: 'error',
            title: (<>{t('are you sure you want to delete this page')}: "{page?.page_name}"</>),
            onOk: async () => {
                createMSG({})
                    await delElement({id: page?.id})
                    queryClient.invalidateQueries({queryKey: ['components']})
                    queryClient.invalidateQueries({queryKey: ['templates']})
                    queryClient.invalidateQueries({queryKey: ['page']})
                    if(page?.id == pageId){
                        navigate('/admin')
                    }
                createMSG({destroy: true})
            }
        })
    }


    var pages = data

    return(
        <div style={{display:'flex' , overflow: 'hidden' , width: width || '' , flexGrow:'1'}}>
            {!pages && isLoading ? 
            <LoadingSection />
            : pages ? 
            <div style={{display:'flex' ,  maxWidth:'100%' , alignItems: 'center' , height:'40px' , gap:'10px'}}>
                {pages?.length > 0 && <Menu
                key={`${isTemplates ? 'templates-' : ""}-${pages?.length}-${pageId}`}
                activeKey={pageId}
                style={{width:'100%'}}
                mode="horizontal"
                className="builder-navbar"
                items={pages?.map((page) => {
                    return{
                        label: (
                        <>
                            <div style={{display:'flex' , gap:'5px' , color: 'var(--builder-font-color)'}}>
                                {page?.content_type?.code == 'mobile_page' ? <MobileOutlined /> : 
                                page?.content_type?.code == 'page' ? 
                                <FundProjectionScreenOutlined />
                                :
                                <CodeSandboxOutlined />
                                }
                                <h3 style={{color:'var(--builder-fontDark)' , fontWeight:'bold'}}>{page?.page_name}</h3>
                                <Dropdown
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                                trigger={['click']}
                                 menu={{
                                    items: [
                                        {
                                            key: '1',
                                            label: (
                                              <p>{t('edit')}</p>
                                            ),
                                            icon: <EditOutlined style={{ fontSize:'17px' }}/>,
                                            onClick: (e) => {
                                                e.domEvent.stopPropagation()
                                                setAddNewPageModal(page?.id)
                                            }
                                        },
                                        {
                                            key: '2',
                                            label: (
                                              <p>{t('delete')}</p>
                                            ),
                                            icon: <DeleteOutlined style={{color: themeColor?.red , fontSize:'17px'}} />,
                                            onClick: (e) => {
                                                e.domEvent.stopPropagation()
                                                handleDeletePage(page)
                                            }
                                        },
                                    ],
                                  }}
                                >  
                                    <MoreOutlined 
                                    style={{fontSize:"16px" }}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                    }}
                                    />
                                </Dropdown>
                                
                            </div>
                        </>
                        ),
                        key: page?.id,
                        onClick: () => {
                            navigate(`${page?.content_type?.code == 'template' || page?.content_type?.code == 'mobile_template' ? 'template-editor': 'page-editor'}/${page?.id}`)
                        }
                    }
                }) || []} 
                />}
                {pages?.length == 0 &&
                    <p style={{minWidth:'max-content'}}>{t('add new')} {t(isPages ? 'page' : 'component')}</p>
                }
                <PlusCircleOutlined onClick={() => setAddNewPageModal('new')} style={{cursor:'pointer' , width:'50px' , fontSize: '18px'}}/>
            </div>
            :
            null}

            <Modal
            open={addNewPageModal}
            onCancel={() => setAddNewPageModal(!addNewPageModal)}
            footer={null}
            key={addNewPageModal?.id}
            destroyOnClose={true}
            >
                {isLoading ? <LoadingSection /> :
                <Form
                key={addNewPageModal}
                layout="vertical"
                onFinish={handlePage}
                initialValues={addNewPageModal != 'new' ? {
                    page_name:  getCurrentPage(addNewPageModal)?.page_name,
                    path: getCurrentPage(addNewPageModal)?.path,
                    content_type: getCurrentPage(addNewPageModal)?.content_type?.id,
                    related_layout: getCurrentPage(addNewPageModal)?.related_layout?.id,
                    component_image: getCurrentPage(addNewPageModal)?.component_image ? [{
                        ...getCurrentPage(addNewPageModal)?.component_image,
                        url: getCurrentPage(addNewPageModal)?.component_image?.file_url
                    }] : [],
                    user_permission: getCurrentPage(addNewPageModal)?.user_permission,
                    show_in_mobile_bar: getCurrentPage(addNewPageModal)?.show_in_mobile_bar,
                    page_icon: getCurrentPage(addNewPageModal)?.page_icon?.id,
                    is_home_page: getCurrentPage(addNewPageModal)?.is_home_page,
                    hide_if_user: getCurrentPage(addNewPageModal)?.hide_if_user
                } : {}}
                >
                    <Form.Item 
                    label= {PageName}
                    name={'page_name'} rules={[{required: true}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={PageType}
                    name={'content_type'} rules={[{required: true}]}>
                        <GlobalSelect 
                            options={
                                pageContentTypes?.data?.field_options?.filter(i => getDevMode() == 0 ? (i.code != 'template' && i?.code != 'mobile_template') : true)?.map((option) => {
                                    return{
                                        label: option?.text,
                                        value: option?.id
                                    }
                                }) || []
                            }
                        />
                    </Form.Item>
                    <Form.Item
                    noStyle
                    shouldUpdate={(current , prev) => current.content_type != prev.content_type || current.path != prev.path}
                    >
                        {({getFieldValue}) => {
                            return(
                                getFieldValue('content_type') == isContentTypeMobilePage() || getFieldValue('content_type') == isContentTypePage() ?
                                <Form.Item label={PagePath} name={'path'}>
                                    <Input placeholder="path-name (no '/' required)"/>
                                </Form.Item> : null
                            )
                        }}
                    </Form.Item>
                    <Form.Item
                    noStyle
                    shouldUpdate={(current , prev) => current.content_type != prev.content_type || current.related_layout != prev.related_layout}
                    >
                        {({getFieldValue}) => {
                            return(
                                getFieldValue('content_type') == isContentTypePage() && 
                                <Form.Item 
                                label={PageLayout} name={'related_layout'}>
                                    <GlobalSelect
                                        loading={isFetchingLayouts}
                                        options={
                                            Layouts?.data?.data?.data?.map(layout => {
                                                return{
                                                    label: layout?.page_name ,
                                                    value: `${layout?.id}`
                                                }
                                            }) 
                                            || []
                                        }
                                    />
                                </Form.Item>
                            )
                        }}
                    </Form.Item>

                    <Form.Item
                    noStyle
                    shouldUpdate={(current , prev) => current.content_type != prev.content_type || current.component_image != prev.component_image}
                    >
                        {({getFieldValue}) => {
                            return(
                                getFieldValue('content_type') == isContentTypeTemplate() || getFieldValue('content_type') == isContentTypeMobileTemplate() ?
                                <Form.Item valuePropName="fileList" label={t('component image')} name={'component_image'} getValueFromEvent={getNormFile}>
                                   <Upload accept={'image/*'} beforeUpload={() => false} listType={"picture"} maxCount={1}>
                                        <Button type="dashed">{t('upload')}</Button>
                                   </Upload>
                                </Form.Item> : null
                            )
                        }}
                    </Form.Item>

                    <Form.Item
                    noStyle
                    shouldUpdate={(current , prev) => current.content_type != prev.content_type || current.show_in_mobile_bar != prev.show_in_mobile_bar}
                    >
                        {({getFieldValue}) => {
                            return(
                                getFieldValue('content_type') == isContentTypeMobilePage() ?
                                <Form.Item label={t('show in layout bar')} name={'show_in_mobile_bar'}>
                                   <Switch />
                                </Form.Item> : null
                            )
                        }}
                    </Form.Item>


                    <Form.Item
                    noStyle
                    shouldUpdate={(current , prev) => current.content_type != prev.content_type || current.show_in_mobile_bar != prev.show_in_mobile_bar || current.page_icon != prev.page_icon}
                    >
                        {({getFieldValue}) => {
                            return(
                                getFieldValue('content_type') ==  isContentTypeMobilePage() && getFieldValue('show_in_mobile_bar') == true ?
                                <Form.Item label={t('page icon')} name={'page_icon'}>
                                <GlobalSelect 
                                    options={
                                        pagesIconsTypes?.data?.field_options?.map((option) => {
                                            return{
                                                label: option?.text,
                                                value: option?.id
                                            }
                                        }) || []
                                    }
                                /> 
                                </Form.Item>
                                : null
                            )
                        }}
                    </Form.Item>
                    
                    <Form.Item
                    noStyle
                    shouldUpdate={(current , prev) => current.content_type != prev.content_type || current.is_home_page != prev.is_home_page}
                    >
                        {({getFieldValue}) => {
                            return(
                                getFieldValue('content_type') == isContentTypeMobilePage() || getFieldValue('content_type') == isContentTypePage() ?
                                <Form.Item label={t('is home page')} name={'is_home_page'}>
                                   <Switch />
                                </Form.Item> : null
                            )
                        }}
                    </Form.Item>

                    
                    
                    <Form.Item
                    noStyle
                    shouldUpdate={(current , prev) => current.content_type != prev.content_type || current.user_permission != prev.user_permission}
                    >
                        {({getFieldValue}) => {
                            return(
                                getFieldValue('content_type') == isContentTypeMobilePage() || getFieldValue('content_type') == isContentTypePage() ?
                                <Form.Item label={t('user permission')} name={'user_permission'}>
                                   <Switch />
                                </Form.Item> : null
                            )
                        }}
                    </Form.Item>


                    <Form.Item
                    noStyle
                    shouldUpdate={(current , prev) => current.content_type != prev.content_type || current.is_home_page != prev.is_home_page}
                    >
                        {({getFieldValue}) => {
                            return(
                                getFieldValue('content_type') == isContentTypeMobilePage() || getFieldValue('content_type') == isContentTypePage() ?
                                <Form.Item label={t('hide if user')} name={'hide_if_user'}>
                                   <Switch />
                                </Form.Item> : null
                            )
                        }}
                    </Form.Item>
                    
                    <div style={{width:'100%' , display:'flex' , justifyContent:'flex-end'}}>
                        <Button type="primary" loading={lod} htmlType="submit">{addNewPageModal != 'new' ? t('save') : t('add')}</Button>
                    </div>
                </Form>}
            </Modal>

        </div>
    )
}

export default PagesMenu