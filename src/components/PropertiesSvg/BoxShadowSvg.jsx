import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const BoxShadowSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
        <svg className="Icon" style={{marginTop:"3px"}} width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        <g id="SVGRepo_iconCarrier">
        <g id="SVGRepo_iconCarrier"> <path className="Icon" d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"/> </g>
        </g>
        </svg>
        <p className="Title">Box Shadow</p>
        </S.Wrapper>
    )
}

export default BoxShadowSvg