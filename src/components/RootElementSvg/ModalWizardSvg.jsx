import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const ModalWizardSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <p className="Title">Modal Wizard</p>
            <svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path className="Icon" d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"/> </g>
            </svg>
        </S.Wrapper>
    )
}

export default ModalWizardSvg