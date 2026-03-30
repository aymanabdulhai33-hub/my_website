import React, { useState } from "react";
import { Radio, Form, Input, Button, Card, Space } from "antd";
import FormByEmailType from "./FormByEmailType";
import FormByMobileType from "./FormByMobileType";
import { t } from "i18next";

const LoginType = ({configData}) => {
  var sign_in_email_opt = configData?.sign_in_email_opt?.code
    // 'guest_sign_email_pass_otp_both_req'
    // 'guest_sign_email_pass_only'
    // 'guest_sign_email_otp_only' 
    // 'guest_sign_email_pass_otp_eith'
    // 'guest_sign_email_none'

    var sign_in_mobile_opt = configData?.sign_in_mobile_opt?.code
    // 'guest_sign_mobile_pass_otp_both_req'
    // 'guest_sign_mobile_pass_only'
    // 'guest_sign_mobile_otp_only'
    // 'guest_sign_mobile_pass_otp_eith'
    // 'guest_sign_mobile_none'

  const defaultLoginType =
    sign_in_email_opt != "guest_sign_email_none"
      ? "email"
      : sign_in_mobile_opt != "guest_sign_mobile_none"
      ? "mobile"
      : null;

  const [loginType, setLoginType] = useState(defaultLoginType);

  return (
    <>
      {defaultLoginType && (
        <Radio.Group
          onChange={(e) => setLoginType(e.target.value)}
          value={loginType}
        >
          {sign_in_email_opt !== "guest_sign_email_none" && (
            <Radio value="email">{t('email')}</Radio>
          )}

          {sign_in_mobile_opt !== "guest_sign_mobile_none" && (
            <Radio value="mobile">{t('mobile')}</Radio>
          )}
        </Radio.Group>
      )}

      {loginType === "email" && <FormByEmailType sign_in_email_opt={sign_in_email_opt}/>}
      {loginType === "mobile" && <FormByMobileType sign_in_mobile_opt={sign_in_mobile_opt}/>}
    </>
  );
};

export default LoginType;