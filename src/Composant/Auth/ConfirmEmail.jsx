import { Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../axiosInstance";
import { handleActiveAuth } from "../../redux/appLogic";

//le composant qui sert pour confirmer le mail de l'utilisateur
// ce composant est appeler apres l'inscription et l'envoie du code de confirmation pour le backend
const ConfirmEmail = () => {
   const dispatch = useDispatch()
    const userData = useSelector((state) => state.user.UserData)
  //onChange est executer pour envoyer vers le backend le code de confirmation entrer par l'utilisateur
  const onChange = (text) => {
    const data = {email:userData.email, confirmCode:text}
    axiosInstance.post("/confirm-email",data).then((response) => {
        console.log(response);
        if(response.status === 200){
            dispatch(handleActiveAuth(handleActiveAuth("Connexion")))
        }
    }).catch((error) => {
        console.log(error)
    })
  };
  const sharedProps = {
    onChange,
  };
  return (
    <div>
      <h3 style={{margin:"10px"}}>Confirmation Mail</h3>
      <Input.OTP length={8} {...sharedProps} />
    </div>
  );
};

export default ConfirmEmail;
