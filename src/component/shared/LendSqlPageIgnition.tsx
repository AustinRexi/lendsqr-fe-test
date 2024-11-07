import React from "react";
import { Pagination, Select, Row, Col } from "antd";

const { Option } = Select;

interface PageIgnitionProps {
  itemsPerPage: number;
  currentPage: number;
  onItemsPerPageChange: (value: number) => void;
  onPageChange: (page: number) => void;
}

const LendSqlPageIgnition: React.FC<PageIgnitionProps> = ({
  itemsPerPage,
  currentPage,
  onItemsPerPageChange,
  onPageChange,
}) => {
  const totalItems = 100; // Total number of items
  const itemsPerPageOptions = [20, 50, 100]; // Page size options

  const handleItemsPerPageChange = (value: number) => {
    onItemsPerPageChange(value); // Use the prop function to update items per page
  };

  return (
    <Row>
      <Col lg={6} xs={0} md={12}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#545F7D",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "17px",
          }}
        >
          <span>Showing</span>
          <Select
            value={itemsPerPage}
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

      <Col span={10} md={0} lg={10}></Col>
      <Col span={6} xs={0} md={10} lg={4}>
        <Pagination
          showSizeChanger={false}
          current={currentPage}
          total={totalItems}
          pageSize={itemsPerPage}
          onChange={onPageChange}
        />
      </Col>
    </Row>
  );
};

export default LendSqlPageIgnition;
