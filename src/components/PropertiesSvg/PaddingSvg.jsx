import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const PaddingSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
          <svg className="Icon" version="1.1" id="Layer_1"  width="17px" height="17px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <metadata> <sfw> <slices> </slices> <slicesourcebounds width="505" height="984" bottomleftorigin="true" x="0" y="-120"> </slicesourcebounds> </sfw> </metadata> <g> <g> <g> <g> <path d="M16,6H8C7.4,6,7,5.6,7,5s0.4-1,1-1h8c0.6,0,1,0.4,1,1S16.6,6,16,6z"/> </g> </g> <g> <g> <path d="M16,20H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S16.6,20,16,20z"/> </g> </g> <g> <g> <path d="M19,17c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1v8C20,16.6,19.6,17,19,17z"/> </g> </g> <g> <g> <path d="M5,17c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1v8C6,16.6,5.6,17,5,17z"/> </g> </g> </g> <g> <g> <path d="M23,24H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1v22C24,23.6,23.6,24,23,24z M2,22h20V2H2V22z"/> </g> </g> </g> </g>
            </svg>
            <p className="Title">Padding</p>
        </S.Wrapper>
    )
}

export default PaddingSvg