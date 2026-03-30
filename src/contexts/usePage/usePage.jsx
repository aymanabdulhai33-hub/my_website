import { useContext } from "react";
import { PageProvider } from "./usePageContext";

const usePage = () => useContext(PageProvider)

export default usePage