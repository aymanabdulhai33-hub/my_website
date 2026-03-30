import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const FontSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 4.25C12.5 3.97386 12.7239 3.75 13 3.75H18.25C18.5261 3.75 18.75 3.97386 18.75 4.25V5.75C18.75 6.02614 18.5261 6.25 18.25 6.25H13C12.7239 6.25 12.5 6.02614 12.5 5.75V4.25Z" className="Icon"/>
            <path d="M18.75 9.25C18.75 8.97386 18.5261 8.75 18.25 8.75H14.875C14.5989 8.75 14.375 8.97386 14.375 9.25V10.75C14.375 11.0261 14.5989 11.25 14.875 11.25H18.25C18.5261 11.25 18.75 11.0261 18.75 10.75V9.25Z" className="Icon"/>
            <path d="M16.25 14.25C16.25 13.9739 16.4739 13.75 16.75 13.75H18.25C18.5261 13.75 18.75 13.9739 18.75 14.25V15.75C18.75 16.0261 18.5261 16.25 18.25 16.25H16.75C16.4739 16.25 16.25 16.0261 16.25 15.75V14.25Z" className="Icon"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.25464 16.25L6.15723 3.75H8.84263L13.7452 16.25H11.0598L10.0793 13.75H4.92056L3.94005 16.25H1.25464ZM7.49993 7.17346L9.09878 11.25H5.90109L7.49993 7.17346Z" className="Icon"/>
            </svg>
            <p className="Title">Font</p>
        </S.Wrapper>
    )
}

export default FontSvg