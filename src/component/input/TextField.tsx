import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const TextField: React.FC = () => {
  return (
    <Input.Search
      placeholder="search for anything"
      enterButton={
        <Button
          type="primary"
          style={{
            backgroundColor: "green",
            borderColor: "green",
          }}
          icon={<SearchOutlined />}
        />
      }
      style={{
        width: "80%",
      }}
    />
  );
};

export default TextField;
