import React, { useEffect, useState } from "react";
import {
  DeleteOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Avatar, Button, List, Space } from "antd";
import PosteMoreDetailModal from "./Post/PosteMoreDetailModal";
import { useDispatch, useSelector } from "react-redux";
import {
  handleIsOpenPosterDetail,
  handleIsOpenUserProfileView,
} from "../../redux/appLogic";
import axiosInstance from "../../axiosInstance";

const IconText = ({ icon, text, onClick }) => (
  <Space style={{ cursor: "pointer" }} onClick={onClick}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const PosterList = () => {
  const [data, setdata] = useState();
  const dispatch = useDispatch();
  const IsOpenPosterDetail = useSelector(
    (state) => state.appLogic.IsOpenPosterDetail
  );
  const viewUserProfile = () => {
    dispatch(handleIsOpenUserProfileView(true));
  };

  //le hook useState est executer a chaque rendu du composant
  //ici nous l'utilisons pour recuperer les postes des amis de l'utilisateur
  useEffect(() => {

    //on envoie une requete http vers le backend avec l'instance axios que nous avons cree
    axiosInstance
      .get("getFollowerPost")
      .then((response) => {
        console.log(response);
        //Une fois les poste envoyer par le backend,
        //on stocke les poste dans le state data avec setdata()
        setdata(response.data.followerPost);
      })
      .catch((error) => {
        //sinon, s'il ya des erreur on affiche l'erreur dans la console pour le debug
        console.log(error);
      });

  }, []);
  return (
    <div className="PosterList">

    
{/*      
      Ici nous avons le composant List qui viens de antd pour affiche en liste des données
      Dans notre cas nous l'utilisons pour afficher les postes */}
      <List
        //  itemLayout: prend soit "vertical" pour dire que les donnee soit afficher verticalement soit "horizontal" pour afficher en horizontal
        itemLayout="vertical"

        // size: pour specifer la taille, nous avons "default", "small" et "large"
        size="large"
        // dataSource: comme le nom indique sert a specifier la source des données, dans notre cas c'est le state data
        dataSource={data}

        // footer: sert a mettre le contenue qui sera afficher en a la fin de la liste par exemple "Aucun d'autre poste a afficher"
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        // renderItem: c'est dans le renderItem que nous allons mettre le contenue qui sera afficher pour chaque item(ou poste dans notre cas)
        renderItem={(item) => (

          <List.Item
          // key permet a reactjs de pouvoir identifier chaque element de maniere unique
            key={item.title}
            style={{ marginBottom: "20px" }}

            //  actions permet de specifier des boutons d'afficher, dans notre cas nous avons mis les boutons "Commenter" et "Like"
            actions={[
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                onClick={() => dispatch(handleIsOpenPosterDetail(true))}
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{ cursor: "pointer" }}
                  onClick={viewUserProfile}
                  // src={item.avatar}
                />
              }
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => viewUserProfile()}
                    href={item.href}
                  >
                    {item.PostUser.name}
                  </span>
                  <Button icon={<DeleteOutlined />} />
                </div>
              }
            />
            <div style={{ display: "flex", textAlign: "start" }}>
              {item.poste}
            </div>
          </List.Item>
        )}
      />
      {/* le composant modal qui sera afficher lorsqu'on vas cliquer sur un poste */}
      <PosteMoreDetailModal />
    </div>
  );
};
export default PosterList;
