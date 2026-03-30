import { InfoConfig } from "./api_config";
const { mainUrl, Authorization } = InfoConfig();

export const get = async ({ path, sendRes, signal, noMeta }) => {
  var headers = {
    ...(window.location.pathname.startsWith("/admin")
      ? {}
      : {
          Authorization: Authorization,
        }),
  };

  var user = window.localStorage.getItem("user");
  var userAdmin = window.localStorage.getItem("user-admin");

  if (userAdmin && window.location.pathname.startsWith("/admin") && !noMeta) {
    userAdmin = JSON.parse(userAdmin);
    headers.s_id = userAdmin?.s_id;
    headers.jwt = userAdmin?.jwt;
  }

  if (user && !window.location.pathname.startsWith("/admin") && !noMeta) {
    user = JSON.parse(user);
    headers.s_id = user?.s_id;
    headers.jwt = user?.jwt;
  }

  try {
    const res = await fetch(`${`${mainUrl}${path}`}`, {
      headers: headers,
      signal,
    });
    const data = await res.json();
    if (!res.ok) {
      return null;
    }

    if (sendRes && data) {
      return { res, data };
    } else if (data) {
      return data;
    }
  } catch (e) {
    return null;
  }
};
