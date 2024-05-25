import { Input } from "antd";
import React from "react";
import UserProfileCard from "./UserProfileCard";
import AddPostModal from "./Post/AddPostModal";
//composant pour le header de notre application
// affiche le composant AddPostModal qui afficher le bouton  "Creer un post"
// affiche le composant UserProfileCard qui afficher la photo et le nom de l'utilisateur

const Header = () => {
  return (
    <div className="Header">
      <Input.Search
        placeholder="input search text"
        allowClear
        //onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <div>
        <AddPostModal />
      </div>
      <UserProfileCard />
    </div>
  );
};

export default Header;
