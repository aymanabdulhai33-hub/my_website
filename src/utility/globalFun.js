import { message } from "antd";
import { t } from "i18next";
import { FlexDirection } from "../components/PositionAndDisplay/PositionAndDisplayOptions";

export const getLanguage = () => {
  return window.localStorage.getItem("lang") || "en";
};

export const getTheme = () => {
  return window.localStorage.getItem("theme") || "light";
};

export const getDevMode = () => {
  return window.localStorage.getItem("devMode");
};

export const getShowComponents = () => {
  return window.localStorage.getItem("showComponents");
};

export const getBuilderMode = () => {
  return window.localStorage.getItem("builderMode");
};

export const saveAppCashInLocalStorage = ({ keyName, data }) => {
  window.localStorage.setItem(keyName, JSON.stringify(data));
};

export const getAppCashDataFromLocalStorage = ({ keyName }) => {
  var data = window.localStorage.getItem(keyName);
  return data ? JSON.parse(data) : null;
};

export const getPageContentType = () => {
  var page_content_type = window.localStorage.getItem("page_content_type");
  if (page_content_type) {
    return JSON.parse(page_content_type);
  }
  return null;
};

export const getAppModelsCache = () => {
  var app_models = window.localStorage.getItem("app-models");
  if (app_models) {
    return JSON.parse(app_models);
  }
  return null;
};

export const getFirstKey = (item) => {
  return Object.keys(item)[0];
};

export const findParentById = (id, parentArray) => {
  for (let i = 0; i < parentArray.length; i++) {
    const parent = parentArray[i];
    if (parent && parent.id == id) {
      return parent;
    }
    if (parent.children && parent.children?.length > 0) {
      const result = findParentById(id, parent.children);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

export const addChild = ({ parentId, newChild, array }) => {
  if (!parentId) {
    array.children.push(newChild);
    return;
  }
  // Search for the parent node
  const parentNode = findParentById(parentId, array);

  // If parent is found, add the new child
  if (parentNode) {
    if (!parentNode.children) {
      parentNode.children = [];
    }
    parentNode.children.push(newChild);
  } else {
    console.error(`Parent with ID ${parentId} not found`);
  }
};

export const createMSG = ({ duration, destroy, type, content, key }) => {
  if (destroy) {
    message.destroy(key || "loading");
    return;
  }
  message.open({
    duration: duration || 0,
    type: type || "loading",
    content: content || t("loading..."),
    key: key || "loading",
  });
};

const data = [
  { id: 1, parent: null },
  { id: 2, parent: 1 },
  { id: 3, parent: 2 },
  { id: 4, parent: 3 },
  { id: 5, parent: 4 },
  { id: 6, parent: 5 },
  { id: 7, parent: 1 },
  { id: 8, parent: 2 },
];

export const buildTree = (data, isLayout) => {
  let tree = [];
  let lookup = {};

  // Initialize lookup object
  data.forEach((item) => {
    lookup[item.id] = { ...item, related_childrens: [] };
  });

  // Build the tree structure
  data.forEach((item) => {
    if (!item.parent) {
      tree.push(lookup[item.id]);
    } else if (lookup[item.parent?.id]?.related_childrens) {
      lookup[item.parent?.id].related_childrens.push(lookup[item.id]);
    }
  });

  const reverseChildren = (node) => {
    node?.related_childrens?.reverse();
    node?.related_childrens?.forEach((child) => reverseChildren(child));
  };

  if (isLayout) {
    tree.forEach((root) => reverseChildren(root));
  }

  return tree;
};

export const setUpDefaultBuilderStyle = (
  element,
  isView,
  inLayout,
  isOver,
  canDrop,
  selectedElement,
  isMobilePage,
  isBox
) => {
  var allStyle = {};
  element?.properties?.map((pro) => {
    allStyle[pro.property_name.replace("_theme", "")] = pro?.value;
  });
  Object.keys(allStyle)?.map((key) => {
    if (allStyle[key] === "") {
      delete allStyle[key];
    }
  });
  return {
    ...(isMobilePage &&
      isBox && {
        display: "flex",
        flexDirection: "column",
      }),
    ...allStyle,
    ...(!isView &&
    (!allStyle?.padding ||
      allStyle?.padding.includes("0px") ||
      allStyle?.padding == "0" ||
      allStyle?.padding == "0px")
      ? {
          padding: isMobilePage ? "5px" : "20px",
        }
      : {}),
    ...(!isView
      ? {
          border: "1px solid var(--builder-main)",
        }
      : {}),
    ...(!inLayout && isOver && canDrop
      ? {
          backgroundColor: "lightgreen",
        }
      : {}),
    ...(selectedElement?.id == element?.id
      ? {
          border: "2px solid red",
        }
      : {}),
    ...(!isView
      ? {
          overflow: "visible",
        }
      : {}),
    position: "relative",
  };
};

export const setUpDefaultMobileBuilderStyle = (element, selectedElement) => {
  var allStyle = {};
  element?.properties?.map((pro) => {
    allStyle[pro.property_name] = pro?.value;
  });
  return {
    ...allStyle,
    ...(selectedElement?.id == element?.id
      ? {
          border: "2px solid red",
        }
      : {}),
    position: "relative",
  };
};

export function getParentIds(array, targetId) {
  let result = [];
  let visited = new Set(); // To track visited nodes and prevent infinite loops

  // Helper function to traverse the array
  function traverse(node, path, depth = 0) {
    if (visited.has(node.id)) {
      // If we have visited this node before, exit to prevent infinite loops
      return false;
    }

    // Add the node to the set of visited nodes
    visited.add(node.id);

    // If the current node matches the target ID, we return the path (parent IDs)
    if (node.id == targetId) {
      result = path;
      return true;
    }

    // If the current node has children, we traverse each child
    if (node.related_childrens) {
      for (let child of node.related_childrens) {
        // Recursively traverse the child, adding the current node's ID to the path
        if (traverse(child, [...path, node.id], depth + 1)) {
          return true;
        }
      }
    }

    return false;
  }

  // Traverse the array starting from each root element
  for (let root of array) {
    if (traverse(root, [])) {
      break;
    }
  }

  return result;
}

export const getElementHideSize = ({
  siteTheme,
  element,
  mainDivWidth,
  width,
}) => {
  return (
    (!element?.hide_on_size && !element?.show_on_size) ||
    siteTheme?.show_element_anyway ||
    (mainDivWidth && mainDivWidth != "" && element?.show_on_size
      ? mainDivWidth < element?.show_on_size
      : element?.show_on_size && width < element?.show_on_size) ||
    (mainDivWidth && mainDivWidth != "" && element?.hide_on_size
      ? mainDivWidth > element?.hide_on_size
      : element?.hide_on_size && width > element?.hide_on_size)
  );
};

export const getBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(
        reader.result.replace(/^data:(image|application)\/.*;base64,/, "")
      );
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export const getNormFile = (e) => {
  return e.fileList;
};

export const langId = (key) => {
  if (key == "lang") {
    return 1;
  } else if (key == "ar") {
    return 6;
  } else {
    return 1;
  }
};

export const convertTobase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(
        reader.result.replace(/^data:(image|application)\/.*;base64,/, "")
      );
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export const getLocalStorageData = (key) => {
  var LocalStorageData = window.localStorage.getItem(key);
  if (LocalStorageData) {
    LocalStorageData = JSON.parse(LocalStorageData);
  }

  return LocalStorageData || null;
};

export const getRelatedFieldValue = (field) => {
  var valuetext = "";
  if (field) {
    Object.keys(field).map((value, index) => {
      if (
        value !== "is_active" &&
        typeof field[value] != "object" &&
        value !== "item_model_id" &&
        value !== "id"
      ) {
        valuetext += `${index == 0 ? " " : field[value] ? " / " : ""}${
          field[value]
        }`;
      }
    });
  }

  return valuetext;
};

export const isHtmlString = (input) => {
  if (typeof input !== "string") return false;
  const s = input.trim();
  if (!s.includes("<") || !s.includes(">")) return false;
  // if (/&lt;|&gt;/.test(s)) return false;

  const tagLike = /<\s*\/?\s*([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*>/;
  const alsoMeta = /<!doctype|<!--/i;

  if (!tagLike.test(s) && !alsoMeta.test(s)) return false;

  try {
    const doc = new DOMParser().parseFromString(s, "text/html");
    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
    return walker.nextNode() !== null;
  } catch {
    return false;
  }
};

export const isInternalLink = (url) => {
  try {
    const link = new URL(url, window.location.origin);
    return link.hostname === window.location.hostname;
  } catch (e) {
    return false; // invalid URL
  }
};
