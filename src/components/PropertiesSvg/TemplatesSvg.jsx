import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";
import { t } from "i18next";

const TemplatesSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <svg className="Icon" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M73.8,20H26.2c-3.4,0-6.2,2.8-6.2,6.2v47.6c0,3.4,2.8,6.2,6.2,6.2h47.6c3.4,0,6.2-2.8,6.2-6.2V26.2 C80,22.8,77.2,20,73.8,20z M42.3,69.1c0,0.8-0.8,1.4-1.6,1.4H30.6h-0.2c-0.8,0-1.4-0.8-1.4-1.6V48.8c0-0.8,0.8-1.4,1.6-1.4H41 c0.8,0,1.4,0.8,1.4,1.6V69.1z M70.7,69.3c0,0.8-0.8,1.4-1.6,1.4H49.9c-0.8,0-1.4-0.8-1.4-1.6V48.8c0-0.8,0.8-1.4,1.6-1.4h19.1h0.2 c0.8,0,1.4,0.8,1.4,1.6V69.3z M70.9,39.9c0,0.8-0.8,1.4-1.6,1.4H30.6h-0.2c-0.8,0-1.4-0.8-1.4-1.6v-9c0-0.8,0.8-1.4,1.6-1.4h38.9 c0.8,0,1.4,0.8,1.4,1.6V39.9z"/> </g>
            </svg>
            <p className="Title">{t('templates')}</p>
        </S.Wrapper>
    )
}

export default TemplatesSvg