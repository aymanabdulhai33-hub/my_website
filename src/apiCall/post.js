import { post } from "../api/post";
import { InfoConfig } from "../api/api_config";

const { appId, templatesSourceAppId } = InfoConfig();

export const postSignIn = async ({ sendData }) => {
  return await post({
    path: `sign_in`,
    sendData: sendData,
  });
};

export const postGetPagesByType = async ({ type }) => {
  return await post({
    path: `application/${appId}/item_data/advanced_search?model=wsb_pages&field_name=1&result_structure_short=1&by_field_code=1`,
    sendData: {
      ["content_type"]: type,
    },
  });
};

export const getAllMobilePages = async ({ modelCode }) => {
  return await post({
    path:
      `application/${appId}/item_data/advanced_search?model=${modelCode}&field_name=1&result_structure_short=1&by_field_code=1&item_data_fields=id,` +
      `page_name,dropdown_display_types,icon,related_layout[__object__,related_childrens[__object__,items[__object__],related_events[__object__],properties[__object__]]],content_type,path,related_childrens[__object__,items[__object__],properties[__object__],related_events[__object__]],related_variables[__object__]`,
    sendData: {
      ["content_type"]: 35,
    },
  });
};

export const postNewComponent = async ({ sendData }) => {
  return await post({
    path: `application/${appId}/item_data?model=wsb_pages&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const postPublishSite = async ({ sendData }) => {
  return await post({
    path: `application/${appId}/item_data?model=publish_cache&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const postAddNewElement = async ({ sendData, modelCode }) => {
  return await post({
    path: `application/${appId}/item_data?model=${modelCode}&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const postAddNewElementProperty = async ({ sendData, modelCode }) => {
  return await post({
    path: `application/${appId}/item_data?model=${modelCode}&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const postAddNewElementItem = async ({ sendData, modelCode }) => {
  return await post({
    path: `application/${appId}/item_data?model=${modelCode}&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const postAddNewEvent = async ({ sendData }) => {
  return await post({
    path: `application/${appId}/item_data?model=element_events&hook=WebsiteBuilderChildren&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const postAddNewPageVariable = async ({ sendData }) => {
  return await post({
    path: `application/${appId}/item_data?model=variables&hook=WebsiteBuilder&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const postGetComponent = async ({ type }) => {
  return await post({
    path:
      `application/${appId}/item_data/advanced_search?model=wsb_pages&field_name=1&result_structure_short=1` +
      `&item_data_fields=__object__,related_variables,related_childrens[__object__]&by_field_code=1`,
    sendData: {
      ["content_type"]: type,
    },
  });
};

export const postGetTemplates = async ({ body }) => {
  return await post({
    path:
      `application/${templatesSourceAppId}/item_data/advanced_search?model=wsb_pages&field_name=1&result_structure_short=1` +
      `&item_data_fields=id,page_name,content_type,component_image,category,related_childrens_tpl[id,is_root_element_tpl]&by_field_code=1`,
    sendData: body,
    is_templates: true,
  });
};

export const postGetTemplatesMenu = async ({ body }) => {
  return await post({
    path:
      `application/${appId}/item_data/advanced_search?model=wsb_pages&field_name=1&result_structure_short=1` +
      `&item_data_fields=id,page_name,content_type,component_image,related_childrens_tpl[id,is_root_element_tpl]&by_field_code=1`,
    sendData: body,
  });
};

export const postGetPagesModel = async ({ modelCode, type }) => {
  return await post({
    path: `application/${appId}/item_data/advanced_search?model=${modelCode}&field_name=1&result_structure_short=1&join_operator=and&by_field_code=1`,
    sendData: [
      {
        field: "content_type",
        operator: "not_equal",
        value: type,
      },
    ],
  });
};

export const postAddNewSettings = async ({ sendData }) => {
  return await post({
    path: `application/${appId}/item_data?model=builder_config&ignore_container=1&by_field_code=1`,
    sendData,
  });
};

export const CopyWebBuilderTemplate = async ({ sendData }) => {
  return await post({
    path: `application/${appId}/copy_web_builder_template`,
    sendData,
  });
};

export const CopyWebBuilderTemplateCrossApps = async ({ sendData }) => {
  // copy_web_builder_template_cross_apps
  return await post({
    path: `application/${appId}/copy_web_builder_template_cross_servers`,
    sendData,
  });
};

export const postAddNewModelItem = async ({ sendData, model_id, hideMSG }) => {
  return await post({
    path: `application/${appId}/item_data?model=${model_id}&ignore_container=1&by_field_code=1`,
    sendData,
    hideMSG,
  });
};

export const postLogin = async ({ sendData }) => {
  return await post({
    path: `application/${appId}/sign_in_guest`,
    sendData: {
      ...sendData,
    },
    noMeta: true,
  });
};

export const postSignup = async ({ sendData }) => {
  return await post({
    path: `application/${appId}/sign_up_guest`,
    sendData: {
      ...sendData,
    },
    noMeta: true,
  });
};

export const getGridDataByFieldId = async ({ body, modelId, page }) => {
  return await post({
    path: `application/${appId}/item_data/advanced_search?system_fields=1&is_active=1&model=${modelId}&field_name=1&result_structure_short=1${
      page ? `&api_limit[page]=${page}` : ""
    }`,
    sendData: body,
  });
};

export const getSearchData = async ({ body, modelId, page, lang, props }) => {
  return await post({
    path: `application/${appId}/item_data/advanced_search?system_fields=1&is_active=1&language=${
      lang || "en"
    }&model=${modelId}&field_name=1&result_structure_short=1${
      page ? `&api_limit[page]=${page}` : ""
    }${props ? props : ""}`,
    sendData: body,
  });
};

export const publishTemplate = async ({ source_page_id }) => {
  return await post({
    path: `application/${templatesSourceAppId}/copy_original_web_builder_template`,
    sendData: {
      source_page_id,
      source_app_id: appId,
    },
  });
};

export const postGenerateAppointment = async ({ data }) => {
  return await post({
    path: `application/${appId}/appointment_component`,
    sendData: data,
    hideMSG: true,
  });
};

export const postPayment = async ({ order_id }) => {
  return await post({
    path: `application/${appId}/tappayments_charge?order_id=${order_id}`,
    sendData: {},
  });
};
