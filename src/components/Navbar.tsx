import React, { useState } from "react";
import { HomeFilled, LoginOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeFilled />,
  },
  {
    label: "Login",
    key: "login",
    icon: <LoginOutlined />,
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        onClick={onClick}
        selectedKeys={[current]}
      />
    </Header>
  );
};

export default App;
