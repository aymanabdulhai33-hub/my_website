import { message } from "antd";
import { InfoConfig } from "./api_config";
const { mainUrl, Authorization } = InfoConfig();

export const put = async ({ path, sendData }) => {
  var user = window.localStorage.getItem("user");
  var userAdmin = window.localStorage.getItem("user-admin");

  var headers = {
    "Content-Type": "application/json",
    ...(window.location.pathname.startsWith("/admin")
      ? {}
      : {
          Authorization: Authorization,
        }),
  };

  if (userAdmin && window.location.pathname.startsWith("/admin")) {
    userAdmin = JSON.parse(userAdmin);
    headers.s_id = userAdmin?.s_id;
    headers.jwt = userAdmin?.jwt;
  }

  if (user && !window.location.pathname.startsWith("/admin")) {
    user = JSON.parse(user);
    headers.s_id = user?.s_id;
    headers.jwt = user?.jwt;
  }

  try {
    const res = await fetch(`${mainUrl}${path}`, {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(sendData),
    });
    const data = await res.json();
    if (!res.ok) {
      if (data.meta && data.meta.errors) {
        Object.keys(data.meta.errors).map((err) => {
          message.error(`${err}: ${data.meta.errors[err]}`);
        });
      } else {
        message.error("failed");
      }
      return null;
    }

    if (data && data.meta && data.meta.message) {
      message.success(data.meta.message);
    }

    return { data, res };
  } catch (e) {
    message.error("server error !");
    return null;
  }
};
