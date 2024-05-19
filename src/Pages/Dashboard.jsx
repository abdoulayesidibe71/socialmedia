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
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get("verifyUser")
      .then((response) => {
        console.log("response", response);
        if (response.data.userData.isConnected === true) {
          dispatch(handleUserData(response.data.userData));
        }
      })
      .catch((error) => {
        navigate("/authentication");

        console.log(error);
      });
  }, []);
  return (
    <Layout className="Dashboard">
      <Sidebar />
      <div className="contentContainer">
        <div className="mainContainer">
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
