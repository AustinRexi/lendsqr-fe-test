import React from "react";
import { Card, Row, Col } from "antd";
import users from "../../assets/images/users.svg";
import activeuser from "../../assets/images/activeusers.svg";
import usersloan from "../../assets/images/usersloan.svg";
import userssavings from "../../assets/images/userssavings.svg";

type CardData = {
  title: string;
  count: number;
  icon: React.ReactNode;
  iconColor: string;
};

const cardData: CardData[] = [
  {
    title: "USERS",
    count: 2453,
    icon: <img src={users} alt="users icon" />,
    iconColor: "#a64dff",
  },
  {
    title: "ACTIVE USERS",
    count: 2453,
    icon: <img src={activeuser} alt="active users icon" />,
    iconColor: "#a64dff",
  },
  {
    title: "USERS WITH LOANS",
    count: 12453,
    icon: <img src={usersloan} alt="users with loans icon" />,
    iconColor: "#ff4d4f",
  },
  {
    title: "USERS WITH SAVINGS",
    count: 102453,
    icon: <img src={userssavings} alt="users with savings icon" />,
    iconColor: "#ff4d4f",
  },
];

const Cards: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      {cardData.map((data, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card
            style={{
              marginTop: 8,
              minWidth: "200px",
              textAlign: "center",
              minHeight: "160px",
              border: "0px 0px 0px 0px solid #213F7D0F",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                color: data.iconColor,
                marginBottom: "8px",
              }}
            >
              {data.icon}
            </div>
            <div
              style={{ fontSize: "14px", fontWeight: "bold", color: "#595959" }}
            >
              {data.title}
            </div>
            <h2 style={{ color: "#1890ff", fontSize: "24px", margin: 0 }}>
              {data.count.toLocaleString()}
            </h2>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
