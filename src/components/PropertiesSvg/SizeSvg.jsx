import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const SizeSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_0_1095)">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.3595 11.9108L13.0775 10.5425C12.8414 10.2905 12.4461 10.2776 12.1941 10.5137L10.3697 12.223C10.1179 12.4589 10.1048 12.8544 10.3409 13.1064L11.6229 14.4747L10.2546 15.7567C10.0735 15.9263 10.01 16.1871 10.0927 16.4213C10.1755 16.6555 10.3891 16.8181 10.6368 16.8361L16.151 17.2368C16.3248 17.2496 16.4961 17.1888 16.6234 17.0696C16.7506 16.9504 16.8224 16.7833 16.8212 16.6089L16.7802 11.0803C16.7784 10.832 16.6298 10.6085 16.4015 10.5106C16.1734 10.4126 15.909 10.459 15.7277 10.6289L14.3595 11.9108Z" className="Icon"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.64058 8.08922L6.92254 9.45751C7.15863 9.7095 7.55396 9.72238 7.80595 9.48629L9.63034 7.77702C9.88211 7.54114 9.89522 7.1456 9.65912 6.89361L8.37717 5.52531L9.74547 4.24336C9.92654 4.07372 9.99008 3.81291 9.90729 3.57874C9.82449 3.34456 9.61091 3.18196 9.36322 3.16394L3.84907 2.7632C3.67527 2.75047 3.50394 2.81121 3.37668 2.93043C3.24943 3.04965 3.17767 3.21667 3.17884 3.39115L3.21981 8.91968C3.22167 9.16803 3.37025 9.39152 3.59854 9.48939C3.8266 9.58746 4.09099 9.54102 4.27229 9.37117L5.64058 8.08922Z" className="Icon"/>
            </g>
            <defs>
            <clipPath id="clip0_0_1095">
            <rect width="20" height="20" fill="white" transform="matrix(0 -1 1 0 0 20)"/>
            </clipPath>
            </defs>
            </svg>
            <p className="Title">Size</p>
        </S.Wrapper>
    )
}

export default SizeSvg