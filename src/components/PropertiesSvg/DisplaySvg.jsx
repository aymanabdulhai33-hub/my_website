import react from "react";
import * as S from './styled'
import { useLocation } from "react-router-dom";

const DisplaySvg = () => {

    const location = useLocation();
    const Path = location.pathname
    return(
        <S.Wrapper>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4 3H4.6C2.62 3 1 4.575 1 6.5V13.5C1 15.425 2.62 17 4.6 17H15.4C17.38 17 19 15.425 19 13.5V6.5C19 4.575 17.38 3 15.4 3ZM17.2 13.5C17.2 14.4625 16.39 15.25 15.4 15.25H4.6C3.61 15.25 2.8 14.4625 2.8 13.5V6.5C2.8 5.5375 3.61 4.75 4.6 4.75H15.4C16.39 4.75 17.2 5.5375 17.2 6.5V13.5Z" className="Icon"/>
            <path d="M14.9502 9.12506H9.5502C8.8302 9.12506 8.2002 9.73756 8.2002 10.4376V13.0626C8.2002 13.7626 8.8302 14.3751 9.5502 14.3751H14.9502C15.6702 14.3751 16.3002 13.7626 16.3002 13.0626V10.4376C16.3002 9.73756 15.6702 9.12506 14.9502 9.12506Z" className="Icon"/>
            </svg>
            <p className="Title">Display</p>
        </S.Wrapper>
    )
}

export default DisplaySvg