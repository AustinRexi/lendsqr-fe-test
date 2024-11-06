import React, { FC, useState } from "react";
import Cards from "../../component/shared/Cards";
import UserTable from "../../component/shared/UserTable";
import { Row, Col } from "antd";
import Buttons from "../../component/input/Buttons";
import UserPageIgnition from "../../component/shared/UserPageIgnition";
import FormModal from "../../component/shared/FormModal";

export const Users: FC = () => {
  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show the modal
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Row>
        <Col span={22}>
          <h2
            style={{
              //: "Work Sans",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "28.15px",
              color: "#213F7D",
            }}
          >
            Users
          </h2>
        </Col>

        <Col xs={0} md={0} lg={2}>
          {/* Add onClick to toggle the modal */}
          <Buttons text="Filter" onClick={handleOpenModal} />
        </Col>
      </Row>

      {/* FormModal positioned absolutely on the left */}
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
      <UserTable />
      <UserPageIgnition />
    </>
  );
};
