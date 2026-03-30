import { Button, Result } from "antd";
import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {

    return(
        <div className="flex justify-center w-full items-center">
            <Result
                status="404"
                title="404"
                subTitle={t("sorry the page you visited does not exist")}
                extra={<Link to={'/'}><Button type="primary">{t('back home')}</Button></Link>}
            />
        </div>
    )
}

export default NotFound