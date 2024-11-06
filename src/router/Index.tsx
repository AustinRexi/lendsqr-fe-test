import { createBrowserRouter } from "react-router-dom";
import { usersRoute } from "./users";
import Auth from "../layout/Auth";
import { authRoutes } from "./auth";
import { settingsRoute } from "./settings";
import { businessRoute } from "./business";
import dashboard from "../assets/icons/home.svg";
import { EmptyPage } from "../pages/EmptyPage";
import organization from "../assets/icons/switchorganisation.svg";

const routes = [
  {
    path: "/",
    element: <Auth />,
    menu: {
      isMenu: false,
    },
    children: [...authRoutes],
  },
  {
    path: "/switch-org",
    element: <EmptyPage />,
    meta: {
      icon: organization,
      key: "switch-org",
      label: "Switch Organization",
      isMenu: true,
    },
  },
  {
    path: "/dashboard",
    element: <EmptyPage />,
    meta: {
      icon: dashboard,
      key: "dashboard",
      label: "Dashboard",
      isMenu: true,
    },
  },
  usersRoute,
  businessRoute,
  settingsRoute,
];

export const getSideBarMenu = () => {
  const routesitems: any = [...routes].filter((x: any) => x.meta?.isMenu);
  const newMenus = routesitems.reduce((acc: any, curr: any) => {
    const childrenFormatted = (curr.children || []).filter((x: any) => x.meta.isMenu);
    if (curr.meta.isMenu || childrenFormatted.length > 0) {
      acc.push({
        ...curr,
        children: childrenFormatted,
      });
    }
    return acc;
  }, []);
  return newMenus;
};

const router = createBrowserRouter(routes);

export default router;
