import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const BoxSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <p className="Title">Box</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 10H14C12.9 10 12 10.9 12 12V18C12 19.1 12.9 20 14 20H18C19.1 20 20 19.1 20 18V12C20 10.9 19.1 10 18 10Z" className="Icon"/>
            <path d="M8 2H4C2.9 2 2 2.9 2 4V10C2 11.1 2.9 12 4 12H8C9.1 12 10 11.1 10 10V4C10 2.9 9.1 2 8 2Z" className="Icon"/>
            <path d="M18 2H14C12.9 2 12 2.9 12 4V6C12 7.1 12.9 8 14 8H18C19.1 8 20 7.1 20 6V4C20 2.9 19.1 2 18 2Z" className="Icon"/>
            <path d="M8 14H4C2.9 14 2 14.9 2 16V18C2 19.1 2.9 20 4 20H8C9.1 20 10 19.1 10 18V16C10 14.9 9.1 14 8 14Z" className="Icon"/>
            </svg>
        </S.Wrapper>
    )
}

export default BoxSvg