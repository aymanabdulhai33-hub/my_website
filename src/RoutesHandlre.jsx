import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { AdminPages , ViewSitePages } from "./routers";
import NotFound from "./pages/404/404";
import useUser from "./contexts/useUser/useUser";
import Login from "./pages/Login/Login";
import { useTranslation } from "react-i18next";
import useLang from "./contexts/useLanguage/useLang";
import ViewSite from "./pages/ViewSite/ViewSite";
const RoutesHandlre = () => {
    const {t} = useTranslation()
    const {userAdmin} = useUser()
    return(
        <Routes>
            <Route path="/">
                {ViewSitePages.map((page , index) => {
                    return(
                        <Route path={page.path} Component={page.component} key={`${index}-${page.path}`} />
                    )
                })}
                <Route path={'*'} Component={ViewSite} />
            </Route>

            <Route path="/admin" element={<Layout />}>
                {userAdmin && AdminPages.map((page , index) => {
                    return(
                        <Route path={page.path} Component={page.component} key={index} />
                    )
                })}
                <Route path={'*'} Component={NotFound} />
            </Route>

            {!userAdmin &&
            <Route path={'/admin/login'} Component={Login} />
            }
        </Routes>
    )
}

export default RoutesHandlre