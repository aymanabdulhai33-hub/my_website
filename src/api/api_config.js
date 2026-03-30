import { ONEDAY_CONFIG } from "../onedayConfig/OneDayApiConfig";

const {
  Authorization,
  appId,
  mainUrl,
  templatesSourceAppId,
  TemplatesAppAuthorization,
} = ONEDAY_CONFIG();

export const Info = {
  mainUrl: mainUrl,
  Authorization: Authorization,
  appId: appId,
  templatesSourceAppId: templatesSourceAppId,
  TemplatesAppAuthorization: TemplatesAppAuthorization,
};

export const TestEnv = process.env.NODE_ENV == "development";

export const InfoConfig = () => {
  return Info;
};
