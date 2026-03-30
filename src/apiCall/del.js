import { del } from "../api/delete";
import { InfoConfig } from "../api/api_config";

const { appId } = InfoConfig();

export const delElement = async ({ id }) => {
  return await del({
    path: `application/${appId}/item_data/${id}?hook=WebsiteBuilderChildren`,
  });
};
