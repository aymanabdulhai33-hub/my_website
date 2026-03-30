import { put } from "../api/put";
import { InfoConfig } from "../api/api_config";

const { appId } = InfoConfig();

export const putComponent = async ({ sendData, id }) => {
  return await put({
    path: `application/${appId}/item_data/${id}?model=wsb_pages&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putEditElementProperty = async ({ sendData, id, modelCode }) => {
  return await put({
    path: `application/${appId}/item_data/${id}?model=${modelCode}&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putEditElement = async ({ sendData, id, modelCode }) => {
  return await put({
    path: `application/${appId}/item_data/${id}?model=${modelCode}&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putEditElementSort = async ({ sendData, id, modelCode }) => {
  return await put({
    path: `application/${appId}/item/${id}?model=${modelCode}&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putEditPageVariable = async ({ sendData, id, modelCode }) => {
  return await put({
    path: `application/${appId}/item/${id}?model=${modelCode}&hook=WebsiteBuilder&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putEditElementItem = async ({ sendData, id, modelCode }) => {
  return await put({
    path: `application/${appId}/item_data/${id}?model=${modelCode}&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putEditModelItem = async ({ sendData, id, model_id }) => {
  return await put({
    path: `application/${appId}/item_data/${id}?model=${model_id}&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putEditSettings = async ({ sendData, id }) => {
  return await put({
    path: `application/${appId}/item_data/${id}?model=builder_config&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putEditEvent = async ({ sendData, id }) => {
  return await put({
    path: `application/${appId}/item_data/${id}?model=element_events&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const putUpdateCache = async ({ sendData, id }) => {
  return await put({
    path: `application/${appId}/item_data/${id}?model=publish_cache&ignore_container=1&by_field_code=1`,
    sendData,
  });
};
