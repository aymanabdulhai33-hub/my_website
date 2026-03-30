import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const TransformSvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
        <svg className="Icon" width="17px" height="17px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        <g id="SVGRepo_iconCarrier">
        <path d="M14,12a2,2,0,1,1-2-2A2,2,0,0,1,14,12Zm5.965-4.173A.915.915,0,0,1,20,8v8a.915.915,0,0,1-.035.173,2.992,2.992,0,1,1-3.792,3.792A.915.915,0,0,1,16,20H8a.915.915,0,0,1-.173-.035,2.992,2.992,0,1,1-3.792-3.792A.915.915,0,0,1,4,16V8a.915.915,0,0,1,.035-.173A2.992,2.992,0,1,1,7.827,4.035.915.915,0,0,1,8,4h8a.915.915,0,0,1,.173.035,2.992,2.992,0,1,1,3.792,3.792ZM18,16V8a.915.915,0,0,1,.035-.173,2.986,2.986,0,0,1-1.862-1.862A.915.915,0,0,1,16,6H8a.915.915,0,0,1-.173-.035A2.986,2.986,0,0,1,5.965,7.827.915.915,0,0,1,6,8v8a.915.915,0,0,1-.035.173,2.986,2.986,0,0,1,1.862,1.862A.915.915,0,0,1,8,18h8a.915.915,0,0,1,.173.035,2.986,2.986,0,0,1,1.862-1.862A.915.915,0,0,1,18,16Z"/>
        </g>
        </svg>
        <p className="Title">Transform</p>
        </S.Wrapper>
    )
}

export default TransformSvg