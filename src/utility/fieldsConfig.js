const allFields = [
  { field_code: "wsb_pages", template_field_code: "wsb_pages" },
  { field_code: "parent", template_field_code: "parent_tpl" },
  { field_code: "element_type", template_field_code: "element_type_tpl" },
  {
    field_code: "ele_mobile_type_code",
    template_field_code: "ele_mobile_type_code_tpl",
  },
  { field_code: "child_elem", template_field_code: "child_elem_tpl" },
  { field_code: "related_page", template_field_code: "related_page_tpl" },
  {
    field_code: "related_childrens",
    template_field_code: "related_childrens_tpl",
  },
  { field_code: "container", template_field_code: "container_tpl" },
  { field_code: "box", template_field_code: "box_tpl" },
  { field_code: "button", template_field_code: "button_tpl" },
  { field_code: "text", template_field_code: "text_tpl" },
  { field_code: "link", template_field_code: "link_tpl" },
  { field_code: "image", template_field_code: "image_tpl" },
  { field_code: "dropdown", template_field_code: "dropdown_tpl" },
  { field_code: "component", template_field_code: "component_tpl" },
  { field_code: "element_items", template_field_code: "element_items_tpl" },
  { field_code: "child_prop_val", template_field_code: "child_prop_val_tpl" },
  { field_code: "variables", template_field_code: "variables" },
  { field_code: "hide_on_size", template_field_code: "hide_on_size_tpl" },
  { field_code: "show_on_size", template_field_code: "show_on_size_tpl" },
  { field_code: "text", template_field_code: "text_tpl" },
  { field_code: "text_ar", template_field_code: "text_ar_tpl" },
  { field_code: "icon", template_field_code: "icon_tpl" },
  { field_code: "settings", template_field_code: "settings_tpl" },
  { field_code: "global", template_field_code: "global_tpl" },
  { field_code: "currency", template_field_code: "currency_tpl" },
  { field_code: "menu", template_field_code: "menu_tpl" },
  { field_code: "href", template_field_code: "href_tpl" },
  { field_code: "is_blank", template_field_code: "is_blank_tpl" },
  { field_code: "image_url", template_field_code: "image_url_tpl" },
  {
    field_code: "dropdown_display_types",
    template_field_code: "dropdown_display_types_tpl",
  },
  { field_code: "drop_button", template_field_code: "drop_button_tpl" },
  { field_code: "drop_text", template_field_code: "drop_text_tpl" },
  { field_code: "item_name", template_field_code: "item_name_tpl" },
  { field_code: "item_name_ar", template_field_code: "item_name_ar_tpl" },
  { field_code: "item_value", template_field_code: "item_value_tpl" },
  { field_code: "item_code", template_field_code: "item_code_tpl" },
  { field_code: "element_items", template_field_code: "element_items_tpl" },
  { field_code: "related_parent", template_field_code: "related_parent_tpl" },
  { field_code: "items", template_field_code: "items_tpl" },
  { field_code: "property_name", template_field_code: "property_name_tpl" },
  {
    field_code: "related_children",
    template_field_code: "related_children_tpl",
  },
  { field_code: "value", template_field_code: "value_tpl" },
  { field_code: "properties", template_field_code: "properties_tpl" },
  { field_code: "value", template_field_code: "value_tpl" },
  { field_code: "data_code", template_field_code: "data_code" },
];

export const getFieldCodeKey = ({ code, isTemplateEditor }) => {
  return isTemplateEditor
    ? allFields?.find((i) => i.field_code == code)?.template_field_code || code
    : allFields?.find((i) => i.field_code == code)?.field_code || code;
};

export const getFieldByTemplateCode = (code) => {
  return allFields?.find((i) => i.template_field_code == code)?.field_code;
};
