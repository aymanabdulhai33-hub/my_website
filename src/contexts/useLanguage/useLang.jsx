import { useContext } from "react"
import { LanguageProvider } from "./useLanguage"

const useLang = () =>  useContext(LanguageProvider)

export default useLang