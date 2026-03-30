import React from "react";
import no_image from '../../../assets/images/no_image.jpg'
import ElementSettingsWrapper from "../../ElementTypes/ElementSettingsWrapper/ElementSettingsWrapper";
import usePage from "../../../contexts/usePage/usePage";
import { Link } from "react-router-dom";
import { setUpDefaultMobileBuilderStyle } from "../../../utility/globalFun";
const MobileImage = ({element , parent , isLayoutEle}) => {
    const {setSelectedElement , selectedElement , isView} = usePage()

    const ImageProp = {}
    ImageProp.width = setUpDefaultMobileBuilderStyle(element , selectedElement)?.width
    ImageProp.height = setUpDefaultMobileBuilderStyle(element , selectedElement)?.height
    var ParentProp = {}
    ParentProp = {...setUpDefaultMobileBuilderStyle(element , selectedElement)}
    delete ParentProp.width
    delete ParentProp.height

    return(
        <div style={{
            display:'flex',
            ...ParentProp
        }}
        onClick={(e)=>{
            if(!isView && !isLayoutEle){
                setSelectedElement(element)
                e.stopPropagation()
            }
        }}
        >
            <div style={{position: 'absolute' , top:'-0px' , right:'0' ,}}>
                <ElementSettingsWrapper parent={parent} element={element} isLayoutEle={isLayoutEle} />
            </div>
            <Link to={isView && element?.href ? element?.href: ''} target={isView && element?.is_blank ? '_blank' : ''}>
                <img style={{...ImageProp}} src={element?.image_url || no_image}/>
            </Link>
        </div>
    )
}

export default MobileImage