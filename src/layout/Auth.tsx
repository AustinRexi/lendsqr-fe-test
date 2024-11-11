import React, { useEffect } from "react";
import { Row, Col, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

import logo from ".././assets/logos/logo.svg";
import loginlogo from "../assets/logos/login.svg";
import { User } from "../types/users.types";

const Auth: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRawData = localStorage.getItem("user");
    if (userRawData) {
      const user: User = JSON.parse(userRawData);
      if (user && user?.id && user?.username) {
        // redirect user to dashboard cause they are already loggedin
        navigate("/customers/users");
      }
    }
  }, [navigate]);
  return (
    <>
      <Row style={{ height: "900px", width: "100%", padding: 20 }}>
        <Col xs={0} md={12} lg={12}>
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
        <Col xs={24} md={12} lg={12}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Auth;
