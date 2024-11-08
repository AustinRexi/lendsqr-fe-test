import React, { useState, useEffect } from "react";
import { Table } from "antd";

interface TABLE {
  data: any[];
  columns: any[];
}

const LendSqlTable: React.FC<TABLE> = ({ data, columns }) => {
  const [tableStyle, setTableStyle] = useState({
    width: "100%",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "17px",
    marginTop: 30,
  });

  // Function to update styles based on screen size
  const updateTableStyle = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 576) {
      // Extra-small screens
      setTableStyle({
        width: "100%",
        fontSize: "10px",
        fontWeight: 500,
        lineHeight: "17px",
        marginTop: 20,
      });
    } else if (screenWidth <= 768) {
      // Medium screens
      setTableStyle({
        width: "100%",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "17px",
        marginTop: 30,
      });
    } else {
      setTableStyle({
        width: "100%",
        fontSize: "14px",
        // height: "640px",
        fontWeight: 500,
        lineHeight: "17px",
        marginTop: 30,
      });
    }
  };

  // Add a resize event listener
  useEffect(() => {
    updateTableStyle(); // Initial check
    window.addEventListener("resize", updateTableStyle);
    return () => {
      window.removeEventListener("resize", updateTableStyle);
    };
  }, []);

  // Adjust columns style for responsive design
  const responsiveColumns = columns.map((col) => ({
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
    <Table
      columns={responsiveColumns}
      dataSource={data}
      pagination={false}
      style={tableStyle}
      scroll={{ x: true }} // Enable horizontal scroll for overflow on small screens
    />
  );
};

export default LendSqlTable;
