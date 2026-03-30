import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const ItemListDetils = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <p className="Title">Item List Detils</p>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" 
            className="IconStroke" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
            </svg>
        </S.Wrapper>
    )
}

export default ItemListDetils