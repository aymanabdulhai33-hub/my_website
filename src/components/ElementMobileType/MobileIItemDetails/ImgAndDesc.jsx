import React from "react";
import usePage from "../../../contexts/usePage/usePage";
import { setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
import ElementSettingsWrapper from "../../ElementTypes/ElementSettingsWrapper/ElementSettingsWrapper";
import PrintFields from "../../DataDisplayTypes/PrintFields";
import useLang from "../../../contexts/useLanguage/useLang";
import { getAppModels } from "../../../apiCall/get";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import LoadingSection from "../../LoadingSection/LoadingSection";

const ImgAndDesc = ({element , isLayoutEle}) => {
    const {lang} = useLang()
    const {selectedElement , setSelectedElement , isView , pageData , itemData , updatePageElement , itemModelId} = usePage()

    const {data: models , isLoading , isFetching: isFetchingModels} = useQuery({
        queryKey: ['app-models'],
        queryFn: async () => {
            return await getAppModels()
        },
        placeholderData: keepPreviousData,
        staleTime: Infinity
    })


    

    const handleChangeInner = (e) => {
        var value = e.target.textContent
        if(!value || value == element?.[`text${lang != 'en' ? `_${lang}` : ''}`] || value == 'hi im Title' || isView){
            return
        }
        updatePageElement({element: element , dataObject: {
            [`${getFieldCode('text')}${lang != 'en' ? `_${lang}` : ''}`]: value
        } })
    }

    var item = itemData?.data?.[0]
    var model = models?.data?.find(i => i.id == itemModelId)
    
    return(
        <div style={{
            display:'flex',
            ...setUpDefaultMobileBuilderStyle(element , selectedElement),
            gap:'20px',
            flexWrap:'wrap'
        }}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0'}}>
                <ElementSettingsWrapper element={element} isLayoutEle={isLayoutEle} />
            </div>
            <div
            style={{display:'flex' , flexDirection:'column' , gap:'10px' , width:'100%' , padding:'0px 10px'}}
            >
                <h2
                    suppressContentEditableWarning={true}  
                    onBlur={(e) => handleChangeInner(e)}
                    contentEditable={!isView && !isLayoutEle && true}
                    style={{fontWeight:'bold' , fontSize:'20px' , marginBottom:'5px'}}
                >
                    {(lang == 'en' ? (element?.text || 'hi im Title') : (element?.[`text_${lang}`] || element?.text || 'hi im Title') )}
                </h2>
                <img 
                style={{
                    objectFit:'scale-down' , 
                    width:'100%' , 
                    height: '100px',
                    boxShadow:'0 3px 6px rgba(0, 0, 0, 0.15)',
                    borderRadius:'12px'
                }} 
                src={item?.[element?.image_field]?.file_url}
                />
                <div style={{display:'flex' , flexDirection:'column'}}>
                    {item && models?.data ? <PrintFields model={model} showTitle item={item} element={element} /> : <LoadingSection />}
                </div>
            </div>
            {/* <PrintFields item={item} element={element} /> */}
        </div>
    )
}

export default ImgAndDesc