import React from "react";
import { useDrag } from "react-dnd";
import usePage from "../../contexts/usePage/usePage";
import { t } from "i18next";
import { message, Tooltip } from "antd";
import { InfoConfig } from "../../api/api_config";

const {templatesSourceAppId} = InfoConfig()

const DragParent = ({name , icon , type , componnet , isTemplate}) => {
    const {addElementToPage , page , addWebBuilderTemplate} = usePage()

    // the function useDrag it will be add all page bode element
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: type,
        collect: (monitor) => ({
        isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => {
            var result = monitor.getDropResult()
            // drop_zone is the main zone for page body
            if(result?.name == 'drop_zone'){
                var newEle = {name , type , componnet}
                addElementToPage({newEle , parent: result?.parent})
            }else if(result?.name == 'drop_zone_container'){
                // drop_zone_container is every container element
                if(componnet?.content_type?.code == 'template' || componnet?.content_type?.code == 'mobile_template'){
                    if(!componnet?.related_childrens_tpl?.find(i => i?.is_root_element_tpl)){
                        message.info('there is no root element selected')
                        return
                    }
                    var newEle = {name , type , componnet}
                    var sendData = {
                        source_object_id: componnet?.related_childrens_tpl?.find(i => i?.is_root_element_tpl)?.id,
                        page: page?.id,
                        dist_parent: result?.dropEle?.id || null,
                        source_app_id: templatesSourceAppId
                    }
                    addWebBuilderTemplate(sendData)
                    return
                }
                var newEle = {name , type , componnet}
                addElementToPage({newEle , parent: result?.dropEle})
            }else if(result?.name == 'drop_zone_box'){
                // drop_zone_box is every box element
                if(componnet?.content_type?.code == 'template' || componnet?.content_type?.code == 'mobile_template'){
                    if(!componnet?.related_childrens_tpl?.find(i => i?.is_root_element_tpl)){
                        message.info('there is no root element selected')
                        return
                    }
                    var newEle = {name , type , componnet}
                    var sendData = {
                        source_object_id: componnet?.related_childrens_tpl?.find(i => i?.is_root_element_tpl)?.id,
                        page: page?.id,
                        dist_parent: result?.dropEle?.id || null,
                        source_app_id: templatesSourceAppId
                    }
                    addWebBuilderTemplate(sendData)
                    return
                }
                var newEle = {name , type , componnet}
                addElementToPage({newEle , parent: result?.dropEle})
            }
        },
        
    }),[page])
    
    return(
        <div 
        ref={dragPreview}
        className="bg-slate-800 col-span-1 flex border-blue-400 cursor-pointer overflow-hidden"
        style={{ 
            width: '120px',
            height: '100px',
            opacity: isDragging ? 0.5 : 1 , 
            boxShadow: 'var(--builder-box-shadow-color)',
            overflow: 'hidden',
            borderRadius:'8px',
            background:"var(--builder-main)"
        }}
        >
            {isTemplate ?  
                <div 
                    className="flex flex-col flex-wrap gap-2 items-center justify-center w-full text-white"
                    role="Handle" 
                    ref={drag}
                    style={{padding: !componnet?.component_image?.file_url && '5px'}}
                    >
                        {!componnet?.component_image?.file_url ?
                        <>
                            <Tooltip destroyTooltipOnHide={true} title={t(name)}>
                                <p className=".dynamic-paragraph-clamp" style={{fontSize:'12px' , textAlign:'center'}}>{t(name)}</p>
                            </Tooltip>
                            {icon}
                        </>
                        : 
                        <img style={{width:'100%' , height:'100%'}} src={componnet?.component_image?.file_url}/>
                        }
                </div>
            :
            <div 
            className="flex flex-col gap-2 items-center justify-center p-5 w-full text-white"
            role="Handle"
            ref={drag}
            >
                <Tooltip destroyTooltipOnHide={true} title={t(name)}>
                    <p className=".dynamic-paragraph-clamp" style={{fontSize:'12px' , textAlign:'center'}}>{t(name)}</p>
                </Tooltip>
                {icon}
            </div>}
        </div>
    )
}

export default DragParent