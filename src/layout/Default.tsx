import React from "react";
import { Layout, Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import Navbar from "../component/layout/Navbar";
import Sidebar from "../component/layout/Sidebar";
const { Sider, Content } = Layout;

const Default: React.FC = () => {
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
