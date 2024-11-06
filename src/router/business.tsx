import Default from "../layout/Default";
import { EmptyPage } from "../pages/EmptyPage";
import organization from "../assets/icons/switchorganisation.svg";
import loanicon from "../assets/icons/loanicon.svg";
import savingsproducticon from "../assets/icons/savingsproducticon.svg";
import feesandchargesicon from "../assets/icons/feesandchargesison.svg";
import transactionicon from "../assets/icons/transactionicons.svg";
import servicesicon from "../assets/icons/servicesicon.svg";
import serviceaccounticon from "../assets/icons/serviceaccount.svg";
import settlementicon from "../assets/icons/settlementicon.svg";
import reporticon from "../assets/icons/reporticon.svg";

export const businessRoute = {
  path: "/business",
  meta: {
    key: "business",
    label: "BUSINESSES",
    isMenu: true,
  },
  element: <Default />,
  children: [
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: organization,
        isMenu: true,
        label: "Organization",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: loanicon,
        isMenu: true,
        label: "Loan Products",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: savingsproducticon,
        isMenu: true,
        label: "Savings Product",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: loanicon,
        isMenu: true,
        label: "Loan Products",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: feesandchargesicon,
        isMenu: true,
        label: "Fees and Charges",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: transactionicon,
        isMenu: true,
        label: "Transactions",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: servicesicon,
        isMenu: true,
        label: "Services",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: serviceaccounticon,
        isMenu: true,
        label: "Service Account",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: settlementicon,
        isMenu: true,
        label: "Settlement",
      },
    },
    {
      path: "null",
      element: <EmptyPage />,
      meta: {
        icon: reporticon,
        isMenu: true,
        label: "Reports",
      },
    },
  ],
};
