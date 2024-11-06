import React from "react";
import { Pagination, Select, Row, Col } from "antd";

import "antd/dist/reset.css";

const { Option } = Select;

const UserPageIgnition: React.FC = () => {
  const totalItems = 100; // Total number of items
  const itemsPerPageOptions = [20, 50, 100];
  const [itemsPerPage, setItemsPerPage] = React.useState<number>(100); // Default items per page

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
  };

  return (
    <>
      <Row>
        <Col span={6} xs={0} md={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: " #545F7D",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "17px",
            }}
          >
            <span>Showing</span>
            <Select
              defaultValue={itemsPerPage}
              onChange={handleItemsPerPageChange}
              style={{
                marginLeft: 8,
                marginRight: 8,
                width: 70,
                color: "#213F7D",
              }}
            >
              {itemsPerPageOptions.map((option) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <span>Out of {totalItems}</span>
          </div>
        </Col>

        <Col span={10} md={4}></Col>
        <Col span={6} xs={0} md={4}>
          <Pagination showSizeChanger={false} defaultCurrent={3} total={160} />
        </Col>
      </Row>
    </>
  );
};

export default UserPageIgnition;
