import React, { FC, useEffect, useState } from "react";
import Cards from "../../component/shared/Cards";
import LendSqlTable from "../../component/shared/LendSqlTable";

import Buttons from "../../component/input/Buttons";

import FormModal from "../../component/shared/FormModal";
import { Dropdown, Row, Col } from "antd";
import activeicon from "../../assets/icons/activeicon.svg";
import inactiveicon from "../../assets/icons/inactiveicon.svg";
import pendingicon from "../../assets/icons/pendingicon.svg";
import blacklistedicon from "../../assets/icons/blacklistedicon.svg";
import descendinfiltericon from "../../assets/icons/descendinfiltericon.svg";
import { MoreOutlined } from "@ant-design/icons";
import eyeicon from "../../assets/icons/eyeicon.svg";
import blacklistedusericon from "../../assets/icons/blacklistedusericon.svg";
import activeusericon from "../../assets/icons/activeusericon.svg";
import { User } from "../../types/users.types";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../services/http/users";
import LendSqlPageIgnition from "../../component/shared/LendSqlPageIgnition";

export const Users: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const [allUsers, setAllUsers] = useState<User[]>([]);

  async function handleGetAllUsers() {
    const allUsersData = await getAllUsers();
    setAllUsers(allUsersData);
  }

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  // Function to show the modal
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const navigate = useNavigate();

  const actionMenuItems = (user: User) => {
    return [
      {
        key: "view",
        label: "View Details",
        icon: <img src={eyeicon} alt="view" />,
        onClick: () => navigate(`/customers/${user.id}`),
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
  };

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

      key: "action",
      render: (user: User) => (
        <Dropdown
          menu={{ items: actionMenuItems(user) }}
          trigger={["click"]}
          placement="bottom"
        >
          <MoreOutlined style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      ),
    },
  ];
  const paginatedUsers = allUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <Row>
        <Col md={22} lg={22} xs={18}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "28.15px",
              color: "#213F7D",
            }}
          >
            Users
          </h2>
        </Col>

        <Col xs={2} md={2} lg={2}>
          <Buttons text="Filter" onClick={handleOpenModal} />
        </Col>
      </Row>

      {isModalVisible && (
        <div
          style={{
            position: "absolute",
            top: "300px",
            left: "40px",
            zIndex: 1000,
          }}
        >
          <FormModal onClose={handleCloseModal} />
        </div>
      )}
      <Cards />
      <Row gutter={[16, 16]}>
        <Col md={24} lg={24}>
          <LendSqlTable columns={columns} data={paginatedUsers} />
        </Col>
        <Col md={20} lg={24}>
          <LendSqlPageIgnition
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onItemsPerPageChange={(value) => {
              setItemsPerPage(value);
              setCurrentPage(1);
            }}
            onPageChange={setCurrentPage}
          />
        </Col>
      </Row>
    </>
  );
};
