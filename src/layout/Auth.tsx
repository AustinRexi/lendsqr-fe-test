import React from "react";
import { Row, Col, Layout } from "antd";
import { Outlet } from "react-router-dom";

import logo from ".././assets/logos/logo.svg";
import loginlogo from "../assets/logos/login.svg";

const Auth: React.FC = () => {
  return (
    <>
      <Row style={{ height: "900px", width: "100%", padding: 20 }}>
        <Col xs={12}>
          <Layout style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "138px",
                height: "36px",
              }}
            />
            <img
              src={loginlogo}
              alt="loginlogo"
              style={{ minHeight: "337.5px", marginTop: 120 }}
            />
          </Layout>
        </Col>
        <Col xs={12}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Auth;
