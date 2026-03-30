import Admin from "./pages/Admin/Admin";
import ViewSite from "./pages/ViewSite/ViewSite";
import PageEditor from "./pages/PageEditor/PageEditor";
import Login from "./pages/Login/Login";
import TemplateEditor from "./pages/TemplateEditor/TemplateEditor";

export const AdminPages = [
  {
    path: "/admin",
    component: Admin,
    isPrivet: false,
  },
  {
    path: "/admin/page-editor/:pageId",
    component: PageEditor,
    isPrivet: false,
  },
  {
    path: "/admin/template-editor/:pageId",
    component: TemplateEditor,
    isPrivet: false,
  },
  {
    path: "/admin/login",
    component: Login,
    isPrivet: false,
  },
];

export const ViewSitePages = [
  {
    path: "/",
    component: ViewSite,
    isPrivet: false,
  },
  {
    path: "/:pageName",
    component: ViewSite,
    isPrivet: false,
  },
];
