import { UserDetails } from "../pages/users/Details";
import { Users } from "../pages/users/Index";
import Default from "../layout/Default";
import { EmptyPage } from "../pages/EmptyPage";
import guarantoricon from "../assets/icons/guarantoricon.svg";
import decisionicon from "../assets/icons/decisionmodelsicon.svg";
import savingsicon from "../assets/icons/savingsicon.svg";
import loanicon from "../assets/icons/loanicon.svg";
import loanrequesticon from "../assets/icons/loanrequesticon.svg";
import whitelisticon from "../assets/icons/whitelisticon.svg";
import karmaicon from "../assets/icons/karmaicon.svg";
import usericon from "../assets/icons/usericon.svg";

export const usersRoute = {
  path: "/customers",
  meta: {
    key: "users",
    label: "CUSTOMERS",
    isMenu: true,
  },
  element: <Default />,
  children: [
    {
      path: "users",
      element: <Users />,
      meta: {
        icon: usericon,
        isMenu: true,
        label: "Users",
        link: "/customers/users",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: guarantoricon,
        isMenu: true,
        label: "Guarantors",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: loanicon,
        isMenu: true,
        label: "Loans",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: decisionicon,
        isMenu: true,
        label: "Decision Model",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: savingsicon,
        isMenu: true,
        label: "Savings",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: loanrequesticon,
        isMenu: true,
        label: "Loan Request",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: whitelisticon,
        isMenu: true,
        label: "Whiteelist",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: karmaicon,
        isMenu: true,
        label: "Karma",
      },
    },
    {
      path: ":id",
      element: <UserDetails />,
      meta: {
        isMenu: false,
      },
    },
  ],
};
