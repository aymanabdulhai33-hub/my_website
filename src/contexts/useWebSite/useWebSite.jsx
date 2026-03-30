import { useContext } from "react";
import { WebSiteProvider } from "./useWebSiteContext";


const useWebSite = () => useContext(WebSiteProvider)

export default useWebSite