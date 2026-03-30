import React , {createContext, useState, useEffect} from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next"
import ar from '../../languages/ar/ar.json'
import en from '../../languages/en/en.json'
import { getAppCashDataFromLocalStorage, getLanguage, langId, saveAppCashInLocalStorage } from "../../utility/globalFun";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getApplicationTranslate } from "../../apiCall/get";

const allLanguages = {ar , en}

export const LanguageProvider = createContext()
var symbol = getLanguage()
i18n.use(initReactI18next).init({
    resources: {
        [symbol] : {
            translation: allLanguages[symbol]
        }
    },
    interpolation: {
        escapeValue: false
    },
    lng: [symbol],
})

const LanguageContext = ({children}) => {
    const [lang , setLang] = useState(getLanguage())
    const [lod , setLod] = useState(true)

    const changeLanguage = (newLang) => {
        setLang(newLang || 'en')
        window.localStorage.setItem('lang' , newLang)
    }

    const setBodyDir = (symbol) => {
        var body = document.querySelector('body');
        body.style.direction = symbol == 'ar' ? 'rtl' : 'ltr'
        body.style.fontFamily = symbol == 'ar' ? 'Noto Kufi Arabic, sans-serif' : 'Open Sans, sans-serif'
    }

    const Initi18next = (symbol) => {
        i18n.use(initReactI18next).init({
            resources: {
                [symbol] : {
                    translation: allLanguages[symbol]
                }
            },
            interpolation: {
                escapeValue: false
            },
            lng: [symbol],
        })
    }


    const {data: apptranslate = getAppCashDataFromLocalStorage({keyName: `app_translate_${lang}`}) , isLoading : appTranslateIsLoading} = useQuery({
        queryKey: ['apptranslate' , {lang: lang}],
        queryFn: async () => {
            const res = await getApplicationTranslate({langId: langId(lang)})
            if(res?.data){
                saveAppCashInLocalStorage({data: res?.data , keyName: `app_translate_${lang}`})
            }
            return res?.data
        },
        staleTime: Infinity,
        placeholderData: keepPreviousData,
    })

    const appTranslation = ({key , type , callBack}) => {
        return apptranslate?.[type]?.[key]?.name || callBack || ''
    }

    useEffect(() => {
        setLod(true)
        setBodyDir(lang)
        Initi18next(lang)
        var doc = window.document.body
        doc.style.fontFamily = lang == 'ar' ? 'Noto Kufi Arabic, sans-serif' : 'Roboto, sans-serif',
        setLod(false)
    },[lang])

    return(
        !lod && <I18nextProvider i18n={i18n}>
            <LanguageProvider.Provider 
            value={{lang , setLang , changeLanguage , appTranslation}}
            >
                {children}    
            </LanguageProvider.Provider>
        </I18nextProvider>
    )
}

export default LanguageContext