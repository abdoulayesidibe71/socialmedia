import React, { useState } from "react";
import {
  CaretLeftOutlined,
  CaretRightOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Dices, Home, Newspaper, PlusCircle } from "lucide-react";
const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider trigger={null}  collapsible collapsed={collapsed}>
      <div>
        <Button
          type="text"
          icon={collapsed ?  <CaretRightOutlined /> : <CaretLeftOutlined /> }
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            color:"white"
          }}
        />
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <Home />,
            label: "Accueil",
          },
          {
            key: "2",
            icon: <Newspaper />,
            label: "Last News",
          },
          {
            key: "3",
            icon: <Dices />,
            label: "Aléatoire",
          },
        ]}
      />
    </Sider>
  );
};
export default Sidebar;
