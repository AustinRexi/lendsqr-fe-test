import React from "react";
import { Table, Dropdown, MenuProps, Grid } from "antd";
import activeicon from "../../assets/icons/activeicon.svg";
import inactiveicon from "../../assets/icons/inactiveicon.svg";
import pendingicon from "../../assets/icons/pendingicon.svg";
import blacklistedicon from "../../assets/icons/blacklistedicon.svg";
import descendinfiltericon from "../../assets/icons/descendinfiltericon.svg";
import { MoreOutlined } from "@ant-design/icons";
import eyeicon from "../../assets/icons/eyeicon.svg";
import blacklistedusericon from "../../assets/icons/blacklistedusericon.svg";
import activeusericon from "../../assets/icons/activeusericon.svg";
import { useNavigate } from "react-router-dom";
interface User {
  key: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Inactive" | "Pending" | "Active" | "Blacklisted";
}
const UserTable: React.FC = () => {
  const screens = Grid.useBreakpoint();
  const navigate = useNavigate();

  const data: User[] = [
    {
      key: "1",
      organization: "Lendsqr",
      username: "Adedeji",
      email: "Adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      key: "2",
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phoneNumber: "08167080928",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Pending",
    },
    {
      key: "3",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07067080922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      key: "4",
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "07003039226",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Pending",
    },
    {
      key: "5",
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07067080922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Active",
    },
    {
      key: "6",
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07067080922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Active",
    },
    {
      key: "7",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07067080922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      key: "8",
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      key: "9",
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
  ];

  const actionMenuItems: MenuProps["items"] = [
    {
      key: "view",
      label: "View Details",
      icon: <img src={eyeicon} alt="view" />,
      onClick: () => navigate("/customers/id"),
    },
    {
      key: "blacklist",
      label: "Blacklist User",
      icon: <img src={blacklistedusericon} alt="blacklist" />,
    },
    {
      key: "activate",
      label: "Activate User",
      icon: <img src={activeusericon} alt="activate" />,
    },
  ];

  const columns = [
    {
      title: (
        <div>
          ORGANIZATION{" "}
          <img
            src={descendinfiltericon}
            alt="filter"
            style={{ marginLeft: 4 }}
          />
        </div>
      ),
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: (
        <div>
          USERNAME{" "}
          <img
            src={descendinfiltericon}
            alt="filter"
            style={{ marginLeft: 4 }}
          />
        </div>
      ),
      dataIndex: "username",
      key: "username",
    },
    {
      title: (
        <div>
          EMAIL{" "}
          <img
            src={descendinfiltericon}
            alt="filter"
            style={{ marginLeft: 4 }}
          />
        </div>
      ),
      dataIndex: "email",
      key: "email",
    },
    {
      title: (
        <div>
          PHONE NUMBER{" "}
          <img
            src={descendinfiltericon}
            alt="filter"
            style={{ marginLeft: 4 }}
          />
        </div>
      ),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: (
        <div>
          DATE JOINED{" "}
          <img
            src={descendinfiltericon}
            alt="filter"
            style={{ marginLeft: 4 }}
          />
        </div>
      ),
      dataIndex: "dateJoined",
      key: "dateJoined",
    },
    {
      title: (
        <div>
          STATUS{" "}
          <img
            src={descendinfiltericon}
            alt="filter"
            style={{ marginLeft: 4 }}
          />
        </div>
      ),
      dataIndex: "status",
      key: "status",
      render: (status: User["status"]) => {
        let iconSrc;
        switch (status) {
          case "Active":
            iconSrc = activeicon;
            break;
          case "Pending":
            iconSrc = pendingicon;
            break;
          case "Blacklisted":
            iconSrc = blacklistedicon;
            break;
          case "Inactive":
            iconSrc = inactiveicon;
            break;
        }
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={iconSrc} alt={`${status} icon`} />
          </div>
        );
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Dropdown
          menu={{ items: actionMenuItems }}
          trigger={["click"]}
          placement="bottom"
        >
          <MoreOutlined style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      ),
    },
  ].map((col) => ({
    ...col,
    onHeaderCell: () => ({
      style: {
        backgroundColor: "#ffffff",

        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "14.08px",
        textAlign: "left",
        color: "#545F7D",
      },
    }),
    onCell: () => ({
      style: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "17px",
        textAlign: "left",
        color: "#545F7D",
      },
    }),
  }));

  return (
    <>
      {screens.md ? (
        <Table
          columns={columns as any}
          dataSource={data}
          pagination={false}
          style={{
            width: "1037px",
            height: "640px",

            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "17px",
            marginTop: 30,
          }}
        />
      ) : (
        <div style={{ marginTop: 20 }}>
          No table available on small screens.
        </div>
      )}
    </>
  );
};

export default UserTable;
