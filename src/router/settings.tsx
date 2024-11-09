import Default from "../layout/Default";
import { EmptyPage } from "../pages/EmptyPage";
import preferenceicon from "../assets/icons/preferenceicon.svg";
import feesandpricingicon from "../assets/icons/feesandpricingicon.svg";
import auditicon from "../assets/icons/auditicon.svg";
import systemmessageicon from "../assets/icons/systemmessageicon.svg";
export const settingsRoute = {
  path: "/settings",
  meta: {
    key: "settings",
    label: "SETTINGS",
    isMenu: true,
  },
  element: <Default />,
  children: [
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        isMenu: true,
        icon: preferenceicon,
        label: "Preferences",
      },
    },
    {
      path: "feesandpricing",
      element: <EmptyPage />,
      meta: {
        isMenu: true,
        icon: feesandpricingicon,
        label: "Fees and Pricing",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        isMenu: true,
        icon: auditicon,
        label: "Audit Logs",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        isMenu: true,
        icon: systemmessageicon,
        label: "System Messages",
      },
    },
  ],
};
