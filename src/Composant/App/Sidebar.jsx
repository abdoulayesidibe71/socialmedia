import React, { useState } from "react";
import {
  CaretLeftOutlined,
  CaretRightOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Dices, Home, Newspaper, PlusCircle } from "lucide-react";
const { Header, Sider, Content } = Layout;

//le composant pour afficher le menu vertical de notre application
const Sidebar = () => {
  //state pour gerer si notre menu vertical diminuer ou entierement affiche
  const [collapsed, setCollapsed] = useState(false);
  //on recupere les couleur et la taille des element de notre theme
 // useToken viens de antd pour gerer le theming des composant antd
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider trigger={null}  collapsible collapsed={collapsed}>
      <div>
        <Button
          type="text"
          // ici si collapsed est true pour l'icon notre bouton on affichera "CaretRightOutlined"(fleche gauche)
          // sinon, si collapsed est false on affichera "CaretLeftOutlined"(fleche droit)
          icon={collapsed ?  <CaretRightOutlined /> : <CaretLeftOutlined /> }
          // si le bouton est cliquer, ceci est executer setCollapsed(!collapsed),
          //si collapsed est true, alors ont le met en false, sinon si il est en false, on le met en true
          //en javascript "!", avec les boolean nous retour le contraire du boolean
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
        // l'item par defaut active de notre menu
        // dans notre cas c'est l'item qui le key "1"
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
