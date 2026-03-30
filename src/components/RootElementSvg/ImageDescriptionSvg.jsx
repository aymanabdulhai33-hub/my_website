import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const ImageDescriptionSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <p className="Title">item details image description</p>
            <svg className="Icon" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M44,4H8C5.8,4,4,5.8,4,8v36c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V8C48,5.8,46.2,4,44,4z M12,14 c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v10c0,0.6-0.4,1-1,1H13c-0.6,0-1-0.4-1-1V14z M36,40c0,0.6-0.4,1-1,1H13c-0.6,0-1-0.4-1-1v-2 c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V40z M40,32c0,0.6-0.4,1-1,1H13c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h26c0.6,0,1,0.4,1,1V32z M40,24c0,0.6-0.4,1-1,1H29c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1V24z M40,16c0,0.6-0.4,1-1,1H29 c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1V16z"/> </g>
            </svg>
        </S.Wrapper>
    )
}

export default ImageDescriptionSvg