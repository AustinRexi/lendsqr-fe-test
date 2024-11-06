import React, { useMemo } from "react";
import { Layout, Menu, Space } from "antd";
import { NavLink } from "react-router-dom"; // Import NavLink
import dropicon from "../../assets/icons/dropicon.svg";
import { getSideBarMenu } from "../../router/Index";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const menuItems = useMemo(() => getSideBarMenu(), []);

  console.log("menuItems", menuItems);

  return (
    <Sider width={250} style={{ height: "100vh", background: "#ffffff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["customers", "businesses", "settings"]}
        style={{
          height: "100%",
          borderRight: 0,
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "18.77px",
          textAlign: "left",
          color: "#213F7D",
        }}
      >
        {menuItems.map((menuItem: any) =>
          (menuItem.children || []).length > 0 ? (
            <Menu.SubMenu
              key={menuItem.meta.key}
              title={
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "18.77px",
                    textAlign: "left",
                    color: "#213F7D",
                  }}
                >
                  {menuItem.meta.label}
                </span>
              }
            >
              {menuItem.children.map((subItem: any) => (
                <Menu.Item key={subItem.meta.key}>
                  <NavLink key={subItem.meta.key} to={subItem.meta.link}>
                    <Space>
                      <img src={subItem.meta?.icon} alt={subItem.meta.label} />{" "}
                      {subItem.meta.label}
                    </Space>
                  </NavLink>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item
              key={menuItem.meta?.key}
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "18.77px",
                textAlign: "left",
                color: "#213F7D",
              }}
              icon={
                <img src={menuItem.meta?.icon} alt={menuItem.meta?.label} />
              }
            >
              <NavLink key={menuItem.meta.key} to={menuItem.meta.link}>
                {menuItem?.meta?.label}
              </NavLink>
              {((menuItem.children || []) > 0 ||
                menuItem.meta.key === "switch-org") && (
                <img
                  src={dropicon}
                  alt="dropicon"
                  style={{ marginLeft: 4, marginTop: 2 }}
                />
              )}
            </Menu.Item>
          )
        )}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
