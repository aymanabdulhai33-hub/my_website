import React , {createContext, useState, useEffect} from "react";
import { getAppCashDataFromLocalStorage, getBuilderMode, getShowComponents, getTheme, saveAppCashInLocalStorage } from "../../utility/globalFun";
import { ConfigProvider, theme as antTheme } from "antd";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSiteTheme } from "../../apiCall/get";
import { StyleSheetManager, ThemeProvider as ThemeProviderStyle } from "styled-components";
import isPropValid from '@emotion/is-prop-valid'
import useLang from "../useLanguage/useLang";
export const ThemeProvider = createContext()


const ThemeContext = ({children}) => {
    const [theme , setTheme] = useState(getTheme())
    const [builderMode , setBuilderMode] = useState(getBuilderMode() || 'web')
    const [showComponents , setShowComponents] = useState(getShowComponents() || 0)
    const [lod , setLod] = useState(true)
    const {lang} = useLang()
    // const [siteTheme , setSiteTheme] = useState({})
    const [themeColor , setThemeColor] = useState({
        fontColor: '#000',
        bgColor: '#ffffff',
        bgLightColor: 'rgb(246, 249, 255)',
        ligtBtn:'#139cff',
        main: '#465B95',
        dark: '#102D45',
        boxShadowColor: 'rgba(25, 42, 89, 0.25) 0px 10px 15px 0px',
        lightgray: '#E4E8F1',
        ['builder-green']: 'rgb(82, 196, 26)',
        red: '#FF4852',
        ['builder-gray']: '#F6F9FF',
        ['builder-fontDark']: '#465B95',
        ['builder-fontLight']: '#8794BA',
    })

    const {data: siteTheme = getAppCashDataFromLocalStorage({keyName: 'builder-theme'}) , isLoading: isLoadingSiteTheme} = useQuery({
        queryKey: ['builder-theme'],
        queryFn: async () => {
            const res = await getSiteTheme()

            var props = res?.data?.data?.[0]
            if(props){
                saveAppCashInLocalStorage({data: props , keyName: 'builder-theme'})
                setPropertyCss(props)
            }
            return res?.data?.data?.[0] || null
        },
        staleTime: Infinity,
        placeholderData: keepPreviousData,
    })

    const changeTheme = () => {
        var theme = getTheme()
        setTheme(theme == "dark" ? 'light' : 'dark')
        document.documentElement.setAttribute("data-theme", theme == "dark" ? 'light' : 'dark');
        window.localStorage.setItem('theme' , theme == "dark" ? 'light' : 'dark')
    }

    const iniTheme = () => {
        var theme = getTheme()
        document.documentElement.setAttribute("data-theme", theme);
    }

    function setPropertyCss(t) {
        var r = document.querySelector(':root');
        Object.keys(t).map((key) => {
            r.style.setProperty(`--${key}`, t[key]);
        })
    }

    useEffect(() => {
        setLod(true)
            iniTheme()
        setLod(false)
        if(siteTheme){
           setPropertyCss(siteTheme)
        }
    },[])

    return(
        lod ? null : isLoadingSiteTheme && !siteTheme ? null :
        <ThemeProviderStyle theme={themeColor} >
        <ConfigProvider
            theme={{
            algorithm: theme == 'dark' ? antTheme.darkAlgorithm : false,
            token: {
                colorPrimary: themeColor.main,
                borderRadius: 2,
                fontFamily: lang == 'ar' ? 'Noto Kufi Arabic, sans-serif' : 'Roboto, sans-serif',
            },
            components: {
                Button: {
                    boxShadow: 0,
                    primaryShadow: 0,
                    colorBorder: 'lightgray'
                },
                Input: {
                    borderRadius:'4px', 
                    colorBorder: '#9babcf',
                },
                InputNumber: {
                    borderRadius:'4px', 
                    colorBorder: '#9babcf',
                    boxShadow: 'none'
                },
                DatePicker: {
                    borderRadius:'4px', 
                    colorBorder: '#9babcf',
                    boxShadow: 'none'
                },
                Timeline: {
                    borderRadius:'4px', 
                    colorBorder: '#9babcf',
                    boxShadow: 'none'
                },
                Select: {
                    colorBorder: '#9babcf',
                },
                Segmented: {
                    itemSelectedBg: themeColor.main,
                    itemSelectedColor: 'white'
                },
                Table:{
                    cellPaddingBlock: 1,
                    cellPaddingInline: 5,
                    cellPaddingBlockMD: 5,
                    cellPaddingInlineMD: 5,
                    cellPaddingBlockSM: 3,
                    cellPaddingInlineSM: 5,
                    headerBorderRadius: 12,
                    borderColor: siteTheme?.gray,
                    headerBg: siteTheme?.light_color,
                    headerColor: 'white',
                    rowHoverBg: themeColor?.lightgray,
                    headerSortHoverBg: '',
                    expandIconBg: themeColor?.lightgray,
                },
            }
            }}
        >
            <ThemeProvider.Provider 
            value={{theme , themeColor , changeTheme , setPropertyCss , isLoadingSiteTheme , siteTheme , builderMode , setBuilderMode , showComponents , setShowComponents}}
            >
                <StyleSheetManager shouldForwardProp={isPropValid}>
                    {children}
                </StyleSheetManager>
            </ThemeProvider.Provider>
        </ConfigProvider>
        </ThemeProviderStyle>
    )
}

export default ThemeContext