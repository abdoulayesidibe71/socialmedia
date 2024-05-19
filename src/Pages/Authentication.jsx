import React, { useState } from "react";

import "../Styles/Authentication.css";
import SignUp from "../Composant/Auth/SignUp";
import { Segmented } from "antd";
import Login from "../Composant/Auth/Login";

import { handleActiveAuth } from "../redux/appLogic";
import { useDispatch, useSelector } from 'react-redux';
import ConfirmEmail from "../Composant/Auth/ConfirmEmail";
const Authentication = () => {
  const dispatch = useDispatch();
  //recuperer ActiveAUth depuis le store
  const ActiveAuth = useSelector(state => state.appLogic.ActiveAuth); 
  const [ActiveAuths, setActiveAuth] = useState("Connexion");
  console.log(ActiveAuth);
  return (
    
    <div className="Auth">
      <div className="FormMainContainer">
        <Segmented
          className="Segmented"
          mode="horizontal"
          defaultValue="Connexion" // la valeur par defaut qui est active
          options={["Connexion", "Inscription"]} // les element notre segemented
          // onChange s'execute quand value change et met a jour le state ActiveAuth
          onChange={(value) => {
            //mettre a jour ActiveAuth
            dispatch(handleActiveAuth(value));
          }}
        />
        {/* Le composant Login s'affiche uniquement si ActiveAuth est egal a "Connexion" */}

        {ActiveAuth === "Connexion" && <Login />}

        {/* Le composant SignUp s'affiche uniquement si ActiveAuth est egal a "Inscription" */}
        {ActiveAuth === "Inscription" && <SignUp />}
       {ActiveAuth === "confirmEmail" && <ConfirmEmail />}
      </div>
    </div>
  );
};

export default Authentication;
