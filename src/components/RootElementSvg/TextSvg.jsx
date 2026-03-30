import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const TextSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <p className="Title">Text</p>
            <svg className="Icon" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z"/> </g>
            </svg>
        </S.Wrapper>
    )
}

export default TextSvg