import React, { useEffect } from "react";
import { Layout, Row, Col } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../component/layout/Navbar";
import Sidebar from "../component/layout/Sidebar";
import { User } from "../types/users.types";
const { Sider, Content } = Layout;

const Default: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRawData = localStorage.getItem("user");
    if (userRawData) {
      const user: User = JSON.parse(userRawData);
      if (!user || !user?.id || !user?.username) {
        // redirect user to dashboard cause they are already loggedin
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <Layout>
        <Row>
          <Col xs={24} md={24} lg={24}>
            <Navbar />
          </Col>
        </Row>
        <Layout>
          <Row gutter={[16, 16]}>
            <Col xs={0} md={0} lg={4}>
              {" "}
              <Sider style={{ width: "280px" }}>
                <Sidebar />
              </Sider>
            </Col>
            <Col xs={24} md={20} lg={20}>
              <Content style={{ padding: 60 }}>
                <Outlet />
              </Content>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </>
  );
};

export default Default;
