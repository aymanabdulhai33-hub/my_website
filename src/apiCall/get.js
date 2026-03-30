import { get } from "../api/get";
import { InfoConfig } from "../api/api_config";
import { getFieldCodeKey } from "../utility/fieldsConfig";
import { post } from "../api/post";

const { appId } = InfoConfig();

export const getAppModels = async () => {
  return await get({
    path: `application/${appId}/model?api_all_result=1&api_fields=id,name,tags,code,action,fields[__object__,properties[__object__],related_relation[__object__],field_options[__object__]]`,
  });
};

export const getAllWebSite = async ({ modelCode, body }) => {
  return await post({
    path:
      `application/${appId}/item_data/advanced_search?model=${modelCode}&by_field_code=1&field_name=1&result_structure_short=1&grid_unlimited_rows=1&item_data_fields=id` +
      `,page_name,is_home_page,user_permission,dropdown_display_types,icon,related_layout[__object__,related_childrens[__object__,link_to_page[id,page_name,path,is_home_page],related_events[__object__,to_page[id,path,page_name]],items[__object__],properties[__object__]]],content_type,path,` +
      `related_childrens[__object__,link_to_page[id,page_name,path,is_home_page],properties[__object__],items[__object__],related_events[__object__,to_page[id,path,page_name]]],related_variables[__object__]`,
    sendData: body,
  });
};

// export const getAllWebSite = async ({ modelCode }) => {
//   return await get({
//     path:
//       `application/${appId}/item_brief?model=${modelCode}&field_name=1&result_structure_short=1&grid_unlimited_rows=1&item_data_fields=id` +
//       `,page_name,dropdown_display_types,icon,user_permission,related_layout[__object__,related_childrens[__object__,related_events[__object__],items[__object__],properties[__object__]]],content_type,path,` +
//       `related_childrens[__object__,items[__object__],properties[__object__],related_events[__object__]],related_variables[__object__]`,
//   });
// };

export const getSiteCache = async () => {
  return await get({
    path: `application/${appId}/item_brief?model=publish_cache&field_name=1&result_structure_short=1`,
  });
};

export const getModelData = async ({ modelId, lang }) => {
  return await get({
    path: `application/${appId}/item_brief?model=${modelId}&language=${lang}&translate_original=1&api_all_result=1&field_name=1&result_structure_short=1`,
  });
};

export const getModelByCode = async ({ modelCode }) => {
  return await get({
    path: `application/${appId}/model/${modelCode}`,
  });
};

export const getPageData = async ({ pageId, modelCode, isTemplateEditor }) => {
  return await get({
    path:
      `application/${appId}/item_brief?model=${modelCode}&id=${pageId}&field_name=1&result_structure_short=1&grid_unlimited_rows=1&system_fields=1&item_data_fields=id` +
      `,page_name,is_home_page,dropdown_display_types,icon,related_layout[__object__,${getFieldCodeKey(
        { code: "related_childrens", isTemplateEditor }
      )}[__object__,${getFieldCodeKey({
        code: "items",
        isTemplateEditor,
      })}[__object__],link_to_page[id,page_name,path,is_home_page],${
        isTemplateEditor
          ? ""
          : "related_events[__object__,to_page[id,path,page_name]],"
      }${getFieldCodeKey({
        code: "properties",
        isTemplateEditor,
      })}[__object__]]],content_type,path,${getFieldCodeKey({
        code: "related_childrens",
        isTemplateEditor,
      })}[__object__,${getFieldCodeKey({
        code: "items",
        isTemplateEditor,
      })}[__object__],link_to_page[id,page_name,path,is_home_page],${getFieldCodeKey(
        {
          code: "properties",
          isTemplateEditor,
        }
      )}[__object__]${
        isTemplateEditor
          ? ""
          : ",related_events[__object__,to_page[id,path,page_name]]"
      }],related_variables[__object__]`,
  });
};

export const getElementTypes = async ({ fieldCode }) => {
  return await get({
    path: `application/${appId}/field/${fieldCode}?api_fields=id,field_options[__object__]`,
  });
};

export const getPageContentTypes = async () => {
  return await get({
    path: `application/${appId}/field/content_type?api_fields=id,field_options[__object__]`,
  });
};

export const getPageIconTypes = async () => {
  return await get({
    path: `application/${appId}/field/page_icon?api_fields=id,field_options[__object__]`,
  });
};

export const getEventActionsTypes = async () => {
  return await get({
    path: `application/${appId}/field/event_action?api_fields=id,field_options[__object__]`,
  });
};

export const getItemEventTypes = async () => {
  return await get({
    path: `application/${appId}/field/item_event?api_fields=id,field_options[__object__]`,
  });
};

export const getVariableTypes = async () => {
  return await get({
    path: `application/${appId}/field/variable_type?api_fields=id,field_options[__object__]`,
  });
};

export const getElementDisplayTypes = async ({ fieldCode }) => {
  return await get({
    path: `application/${appId}/field/${fieldCode}?api_fields=id,field_options[__object__]`,
  });
};

export const getElementIconTypes = async ({ fieldCode }) => {
  return await get({
    path: `application/${appId}/field/${fieldCode}?api_fields=id,field_options[__object__]`,
  });
};

export const getDataDisplayTypes = async () => {
  return await get({
    path: `application/${appId}/field/data_display_type?api_fields=id,field_options[__object__]`,
  });
};

export const getTextFieldInfo = async ({ fieldCode }) => {
  return await get({
    path: `application/${appId}/field/${fieldCode}?api_fields=__object__,translated_fields[__object__]`,
  });
};

export const getFormDefaultItemType = async () => {
  return await get({
    path: `application/${appId}/field/form_update_item?api_fields=id,field_options[__object__]`,
  });
};

export const getShowUserConditionField = async () => {
  return await get({
    path: `application/${appId}/field/show_if_user?api_fields=id,field_options[__object__]`,
  });
};

export const getSiteTheme = async () => {
  return await get({
    path: `application/${appId}/item_brief?model=builder_config&field_name=1&result_structure_short=1`,
  });
};

export const getAssetsModel = async () => {
  return await get({
    path: `application/${appId}/item_brief?model=assets&field_name=1&result_structure_short=1&api_all_result=true`,
  });
};

export const getModelFields = async ({ model_id }) => {
  return await get({
    path: `application/${appId}/field?model=${model_id}&api_fields=__object__,container[__object__],properties[__object__],field_options[__object__],related_relation[__object__]`,
  });
};

export const getModelDesign = async ({ model_id }) => {
  return await get({
    path: `application/${appId}/model/${model_id}/model_design`,
  });
};

export const getSearchItemData = async ({ modelId, currentItem, search }) => {
  return await get({
    path: `application/${appId}/item_data/search?model=${modelId}&keyword=${
      search || ""
    }${
      currentItem ? `&current_item=${currentItem}` : ""
    }&item_name_fields=1&field_name=1&result_structure_short=1`,
  });
};

export const getItem = async ({ id, lang, itemModelId }) => {
  return await get({
    path: `application/${appId}/item_brief?id=${id}&model=${itemModelId}&language=${lang}&translate_original=1&api_all_result=1&field_name=1&result_structure_short=1`,
  });
};

export const getItemData = async ({ id, lang }) => {
  return await get({
    path: `application/${appId}/item_data/${id}?language=${lang}&translate_original=1&api_all_result=1&field_name=1&result_structure_short=1&ignore_container=1`,
  });
};

export const getTableData = async ({ lang, itemModelId, page }) => {
  return await get({
    path: `application/${appId}/item_brief?&model=${itemModelId}&language=${lang}&translate_original=1&api_all_result=1&field_name=1&result_structure_short=1${
      page ? `&api_limit[page]=${page}` : ""
    }`,
  });
};

export const signOut = async () => {
  return await get({
    path: `sign_out`,
  });
};

export const getAdvSearchOperators = async () => {
  return await get({
    path: `adv_search_operators`,
  });
};

export const getAppReports = async () => {
  return await get({
    path: `application/${appId}/report`,
  });
};

export const getreportFieldsById = async ({ reportId }) => {
  return await get({
    path: `application/${appId}/report_field?report_id=${reportId}&api_fields=__object__,field[__object__,field_options[__object__],related_relation[__object__]]`,
  });
};

export const getReportDataById = async ({ reportId, page, filters }) => {
  return await get({
    path: `application/${appId}/report/${reportId}/report_data?api_total_count=1&api_limit[page]=${page}&api_limit[count]=10${
      filters ? filters : ""
    }`,
  });
};

export const getRemoteSiteSession = async ({ token, sId }) => {
  return await get({
    path: `get_remote_site_session?token=${token}&s_id=${sId}`,
    noMeta: true,
  });
};

export const getApplicationTranslate = async ({ langId }) => {
  return await get({
    path: `translate/structure?language=${langId}&application=${appId}`,
  });
};
