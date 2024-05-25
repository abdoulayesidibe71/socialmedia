import React, { useEffect } from "react";

import { Layout } from "antd";
import "../Styles/Suggestion.css";
import "../Styles/Dashboard.css";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import Sidebar from "./../Composant/App/Sidebar";
import Header from "./../Composant/App/Header";
import PosterList from "./../Composant/App/PosterList";
import Suggestion from "./../Composant/App/Suggestion";
import UserProfileView from "./../Composant/App/UserProfile/UserProfileView";
import axiosInstance from "../axiosInstance";
import { handleUserData } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

//le composant Dashboard, est le composant principal qui gere la page de notre application
//une fois le user connecter

const Dashboard = () => {
  const dispatch = useDispatch();
  //on creer une instance de useNavigate
  //qui nous permet de naviguer entre les différentes pages de notre application
  const navigate = useNavigate();

  // le hook useEffect est utiliser pour envoyer une requete http vers notre backend
  // la requete sert a verifier si le user est connecter
  //le backend verifie la session, les token dans les cookies,
  // si tout est bon alors cela signifie que la session est bon et que le user est connecter
  //sinon le user n'est pas connecter
  useEffect(() => {
    axiosInstance
      .get("verifyUser")
      .then((response) => {
        console.log("response", response);
        //le backend envoie isConnected a true et les informations de l'utilisateur, 
        //si tel est le cas cela signifie que le user est bien connecter
        //dans ce cas on stocke les informations de l'utilisateur dans le state userData
        if (response.data.userData.isConnected === true) {
          dispatch(handleUserData(response.data.userData));
        }
      })
      .catch((error) => {
        //si jamais il ya un soucis alors on redirige l'utilisateur ver la page d'authentification
        //pour que le user se reconnecte
        navigate("/authentication");

        console.log(error);
      });
  }, []);
  return (
    <Layout className="Dashboard">
      <Sidebar />
      <div className="contentContainer">
        <div className="mainContainer">
          {/* on affiche le composant Header, PosterList, Suggestion et UserProfileView */}
          <Header />
          <PosterList />
        </div>
        <Suggestion />
        <UserProfileView />
      </div>
    </Layout>
  );
};

export default Dashboard;
