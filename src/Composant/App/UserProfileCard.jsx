import { Avatar } from "antd";
import { User } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
//composant qui afficher la photo de profil et le nom de l'utilisateur actuellement connecter
const UserProfileCard = () => {
  const userData = useSelector((state) => state.user.UserData);
  return (
    <div>
      {" "}
      <Avatar size={35} icon={<User />} />
      <span style={{ marginLeft: "8px" }}>{userData?.name}</span>
    </div>
  );
};

export default UserProfileCard;
