import React, { useState, useEffect, useMemo } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Grid,
  Button,
  Menu,
  Drawer,
  Space,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logos/logo.svg";
import bellicon from "../../assets/icons/bellicon.svg";
import profile from "../../assets/images/profileimage.svg";
import navdropicon from "../../assets/icons/navdropicon.svg";

import TextField from "../input/TextField";
import { getSideBarMenu } from "../../router/Index";
import { User } from "../../types/users.types";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const Navbar: React.FC = () => {
  const screens = useBreakpoint();
  const menuItems = useMemo(() => getSideBarMenu(), []);

  const [userDetails, setUser] = useState<User | null>(null);
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      setUser(user);
    }
  }, []);

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  return (
    <Card
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        height: "75px",
      }}
    >
      <Row gutter={[16, 16]} style={{ padding: 0 }}>
        {/* Logo */}
        <Col span={6}>
          <img src={logo} alt="logo" />
        </Col>

        {screens.lg && (
          <>
            {/* Search Field */}
            <Col span={8}>
              <TextField />
            </Col>
            <Col span={3} />

            {/* Profile and Icons */}
            <Col span={7}>
              <Row justify="space-evenly" align="middle">
                <Text
                  underline
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#213F7D",
                  }}
                >
                  Docs
                </Text>
                <img src={bellicon} alt="notifications" />
                <img src={profile} alt="profileimage" />
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#213F7D",
                  }}
                >
                  {userDetails?.username}{" "}
                  <img src={navdropicon} alt="dropdown" />
                </Text>
              </Row>
            </Col>
          </>
        )}

        {/* Hamburger Menu on XS and SM screens */}
        {!screens.lg && (
          <Col
            span={15}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              icon={<MenuOutlined />}
              type="text"
              onClick={toggleDrawer}
            />
          </Col>
        )}
      </Row>

      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        visible={isDrawerVisible}
      >
        <Menu mode="inline">
          {menuItems.map((menuItem: any) =>
            menuItem.children?.length > 0 ? (
              <Menu.SubMenu key={menuItem.meta.key} title={menuItem.meta.label}>
                {menuItem.children.map((subItem: any) => (
                  <Menu.Item key={subItem.meta.key}>
                    <NavLink to={subItem.meta.link}>
                      <Space>
                        <img src={subItem.meta.icon} alt={subItem.meta.label} />
                        {subItem.meta.label}
                      </Space>
                    </NavLink>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={menuItem.meta.key}
                icon={
                  <img src={menuItem.meta.icon} alt={menuItem.meta.label} />
                }
              >
                <NavLink to={menuItem.meta.link}>{menuItem.meta.label}</NavLink>
              </Menu.Item>
            )
          )}
        </Menu>
      </Drawer>
    </Card>
  );
};

export default Navbar;
