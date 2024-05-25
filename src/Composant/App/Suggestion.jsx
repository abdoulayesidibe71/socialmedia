import React, { useEffect, useState } from "react";
import { Avatar, Button, Input, List, message, Spin } from "antd";
import VirtualList from "rc-virtual-list";
import "../../Styles/Suggestion.css";
import axiosInstance from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { handleAllUsers } from "../../redux/userSlice";

const ContainerHeight = 400;
// le composant qui gere la partie qui affiche les personnes a suivre
const Suggestion = () => {
  const dispatch = useDispatch();
  //state pour gerer si la recuperation des données est terminer ou non
  const [isReady, setisReady] = useState(false);
  //state dans lequel nous allons stocker les données concernant les personnes a suivre
  const [data, setData] = useState([]);
  //state redux dans lequel on stocke la liste de tous les utilisateur inscrit de notre application
  const allUsers = useSelector((state) => state.user.allUsers);
  //le state dans lequel on stocke les informations de l'utilisateur qui est connecter
  const UserData = useSelector((state) => state.user.UserData);

  //le hook useEffect est executer a chaque rendu du composant
  //ici nous l'utilisons pour recuperer la liste des personnes que notre utilisateur pourra suivre
  //on envoie une requete http vers le backend avec l'instance axios que nous avons cree
  //on recupere la liste des personnes a suivre et on met a jour le state redux allUsers et le state Data avec la liste des personnes a suivre
  //on met a jour le state isReady a true pour dire que la recuperation des donnees est terminee
  useEffect(() => {
    console.log(allUsers);
    axiosInstance
      .get("getUserToFollow")
      .then((response) => {
        console.log(response);
        dispatch(handleAllUsers(response.data.allUsers));
        setisReady(true);
        setData(response.data.allUsers)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [UserData]);

// le composant gere le bouton "suivre"
// si le  bouton suivre est cliquer cet fonction est executer
//pour envoyer une requete vers le backend
//la requete envoyer l'id de la personne qui as été suivi
//le backend gere cela, puis met a jour la liste des personnes a suivre
//ici nous recuperons la nouvelle liste et met a jour allUsers et le state Data
  const handleFollow = (friendId) => {
    axiosInstance.post("followUser", { friendId }).then((response) => {
      console.log(response)
      dispatch(handleAllUsers(response.data.allUsers));
      setisReady(true);
      setData(response.data.allUsers)
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="Suggestion">
      <div className="SuggestionHeader">
        <span style={{ marginBottom: "10px" }}>Personnnes a suivre</span>
        <Input.Search
          placeholder="input search text"
          allowClear
          //onSearch={onSearch}
          style={{
            width: "100%",
          }}
        />
      </div>
      {/* // si isReady est true, il affiche la liste sinon, le spin sera afficher */}
      {isReady ? (
        <List>
          <VirtualList
            data={data}
            height={ContainerHeight}
            itemHeight={47}
            itemKey="email"
            // onScroll={onScroll}
          >
            {(item) => (
              <List.Item
                key={item.email}
                actions={[<Button key="list-loadmore-more" onClick={() => handleFollow(item.id)}>Suivre</Button>]}
              >
                <List.Item.Meta
                  avatar={<Avatar />}
                  title={<span>{item.name}</span>}
                />
              </List.Item>
            )}
          </VirtualList>
        </List>
      ) : (
        <Spin />
      )}
    </div>
  );
};
export default Suggestion;
