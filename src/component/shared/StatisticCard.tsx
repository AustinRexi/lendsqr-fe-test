import React, { useState } from "react";
import { Avatar, Typography, Tabs, Card, Row, Col } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { EmptyPage } from "../../pages/EmptyPage";
import UserProfile from "../../component/shared/UserProfile";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

interface StatisticCardProps {
  userImage: string;
  userName: string;
  userID: string;
  userTier: number;
  accountBalance: string;
  accountDetails: string;
  lineIcon: string;
  titleStyles?: React.CSSProperties;
  textStyles?: React.CSSProperties;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  userImage,
  userName,
  userID,
  userTier,
  accountBalance,
  accountDetails,
  lineIcon,
  titleStyles = {},
  textStyles = {},
}) => {
  const [activeTab, setActiveTab] = useState("1"); // State for active tab

  // Function to handle tab change
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Card style={{ maxWidth: 900, margin: "0 auto", minHeight: "210px" }}>
      <Row align="middle" style={{ marginTop: 10 }}>
        <Col xs={0} md={0} lg={2}>
          <Avatar size={64} src={userImage} />
        </Col>
        <Col md={5} xs={6}>
          <Title level={4} style={{ ...titleStyles }}>
            {userName}
          </Title>
          <Text style={{ ...textStyles }}>{userID}</Text>
        </Col>
        <Col md={0} xs={0} lg={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignContent: "center",
            }}
          >
            <img src={lineIcon} alt="" />
            <div style={{ marginTop: 10 }}>
              <Text style={{ ...textStyles }}>User's Tier</Text>
              <div>
                {[...Array(3)].map((_, index) => (
                  <StarOutlined
                    key={index}
                    style={{ color: index < userTier ? "#FAAD14" : "#D9D9D9" }}
                  />
                ))}
              </div>
            </div>
            <img src={lineIcon} alt="" />
          </div>
        </Col>
        <Col xs={2} md={0}></Col>
        <Col md={4} xs={7}>
          <Title level={4} style={{ ...titleStyles }}>
            {accountBalance}
          </Title>
          <Text style={textStyles}>{accountDetails}</Text>
        </Col>
      </Row>
      <Tabs
        defaultActiveKey="1"
        activeKey={activeTab} // Control the active tab
        onChange={handleTabChange}
        tabBarGutter={70}
        style={{
          paddingTop: 40,
        }}
      >
        <TabPane tab="General Details" key="1" style={textStyles}>
          {activeTab === "1" && <UserProfile userName={userName} />}{" "}
          {/* Render UserProfile */}
        </TabPane>
        <TabPane tab="Documents" key="2" style={textStyles}>
          {activeTab === "2" && <EmptyPage />} {/* Render EmptyPage */}
        </TabPane>
        <TabPane tab="Bank Details" key="3" style={textStyles} />
        <TabPane tab="Loans" key="4" style={textStyles} />
        <TabPane tab="Savings" key="5" style={textStyles} />
        <TabPane tab="App and System" key="6" style={textStyles} />
      </Tabs>
    </Card>
  );
};

export default StatisticCard;
