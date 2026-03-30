import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const MarginSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <svg className="Icon" version="1.1" id="Layer_1"  width="17px" height="17px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <metadata> <sfw> <slices> </slices> <slicesourcebounds width="505" height="984" bottomleftorigin="true" x="0" y="-120"> </slicesourcebounds> </sfw> </metadata> <g> <g> <g> <path d="M19,2H5C4.4,2,4,1.6,4,1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S19.6,2,19,2z"/> </g> </g> <g> <g> <path d="M19,24H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S19.6,24,19,24z"/> </g> </g> <g> <g> <path d="M23,20c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1s1,0.4,1,1v14C24,19.6,23.6,20,23,20z"/> </g> </g> <g> <g> <path d="M1,20c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1s1,0.4,1,1v14C2,19.6,1.6,20,1,20z"/> </g> </g> <g> <g> <path d="M19,20H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1v14C20,19.6,19.6,20,19,20z M6,18h12V6H6V18z"/> </g> </g> </g> </g>
            </svg>
            <p className="Title">Margin</p>
        </S.Wrapper>
    )
}

export default MarginSvg