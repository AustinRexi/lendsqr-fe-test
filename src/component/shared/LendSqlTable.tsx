import React from "react";
import { Table, Grid } from "antd";

interface TABLE {
  data: any[];
  columns: any[];
}
const LendSqlTable: React.FC<TABLE> = ({ data, columns }) => {
  const screens = Grid.useBreakpoint();

  columns = columns.map((col) => ({
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

export default LendSqlTable;
