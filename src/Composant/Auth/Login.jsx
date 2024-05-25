import { Button, Divider, Form, Input } from "antd";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../axiosInstance";
import { handleUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

//le composant login pour mettre a l'utilisateur de se connecter
const Login = () => {
  const dispatch = useDispatch();
  // on creer une instance de useNavigate
  //useNavigate sert a faire de la redirection entre les different page de notre application
  //il vient de react-router-dom
  const navigate = useNavigate();
  //on affiche est executer pour envoyer vers le backend les information de connection entrer par l'utilisateur
  const onFinish = (values) => {  
    console.log("Success:", values);
    axiosInstance.post("signin", values)
    .then((response) => {
      console.log(response);
      //le backend gere la cela, puis renvoie les informations de l'utilisateur
      //les information envoyer par le backend sont stocker dans le state userData
      //cela peut etre utiliser par exemple pour afficher le nom de l'utilisateur par exemple
       dispatch(handleUserData(response.data.userData))
       //dans les donnees envoyer, le backend envoie un attribut "isConnected"
       // pour dire si le user est connecter ou pas
       //si isConnected est egal a true alors on redirige l'utilisateur vers la page root '/'

       if(response.data.userData.isConnected === true) {
        navigate("/");
       }
      // dispatch(handleActiveAuth('confirmEmail'))
    })
    .catch((error) => {
      console.log(error);
    })
  };
  return (
    <div className="">
      <h1>Inscription</h1>
      <Form
        name="signUp"
        // s'execute lors qu'on clique sur le bouton s'inscrire
        layout="vertical"
        //onFinish est executer une fois on clique sur un bouton qui as htmlType a "submit" dans le formulaire
        onFinish={onFinish}
      >
        
        <Form.Item label="Email" name="email" required={true}>
          <Input />
        </Form.Item>
        <Form.Item label="Mot de passe" name="password" required={true}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Connexion
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
