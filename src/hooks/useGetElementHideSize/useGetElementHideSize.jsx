import React from "react";
import { getElementHideSize } from "../../utility/globalFun";
import usePage from "../../contexts/usePage/usePage";
import useTheme from "../../contexts/useTheme/useTheme";
import useWindowSize from "../useWindowSize/useWindowSize";
import useUser from "../../contexts/useUser/useUser";


const useGetElementHideSize = ({element}) => {
    const {mainDivWidth} = usePage()
    const {siteTheme} = useTheme()
    const {width} = useWindowSize()
    const {user} = useUser()
    var ifUser = siteTheme?.ignore_user_condition ? true : element?.show_if_user?.code == 'is_user' ? user ? true : false : element?.show_if_user?.code == 'if_is_not_user' ? !user ? true : false : true
    //24683
    // if(element?.id == 24697){
    //     console.log('im in' , element?.show_if_user?.code , user)
    // }
    
    return {visible : getElementHideSize({element , mainDivWidth , siteTheme , width}) && ifUser }
}

export default useGetElementHideSize