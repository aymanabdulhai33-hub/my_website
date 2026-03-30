import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import RoutesHandlre from "./RoutesHandlre";
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import LanguageContext from "./contexts/useLanguage/useLanguage";
import ThemeContext from "./contexts/useTheme/useThemeContext";
import UserContext from "./contexts/useUser/useUserContext";
import WebSiteContext from "./contexts/useWebSite/useWebSiteContext";
import { App as AntApp } from 'antd';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App = () => {

  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <LanguageContext>
            <ThemeContext>
              <UserContext>
                <WebSiteContext>
                  <AntApp>
                    <RoutesHandlre />
                  </AntApp>
                </WebSiteContext>
              </UserContext>
            </ThemeContext>
          </LanguageContext>
        </QueryParamProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App