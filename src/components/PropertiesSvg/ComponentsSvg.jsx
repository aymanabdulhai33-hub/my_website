import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";
import { t } from "i18next";

const ComponentsSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11113)"> <path d="M12 2.99994L15 5.99994L12 8.99994L9 5.99994L12 2.99994Z"
            className="IconStroke" strokeWidth="2.5" strokeLinejoin="round"/> <path d="M12 14.9999L15 17.9999L12 20.9999L9 17.9999L12 14.9999Z"
            className="IconStroke" strokeWidth="2.5" strokeLinejoin="round"/> <path d="M18 8.99994L21 11.9999L18 14.9999L15 11.9999L18 8.99994Z" 
            className="IconStroke" strokeWidth="2.5" strokeLinejoin="round"/> 
            <path d="M6 8.99994L9 11.9999L6 14.9999L3 11.9999L6 8.99994Z" className="IconStroke" strokeWidth="2.5" strokeLinejoin="round"/> </g> <defs>
            <clipPath id="clip0_429_11113"> <rect width="24" height="24" fill="white"/> </clipPath> 
            </defs> </g>
            </svg>
            <p className="Title">{t('components')}</p>
        </S.Wrapper>
    )
}

export default ComponentsSvg