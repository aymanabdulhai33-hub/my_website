import { useContext } from "react";
import { ThemeProvider } from "./useThemeContext";


const useTheme = () => useContext(ThemeProvider)

export default useTheme