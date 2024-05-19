import { Button, Divider, Form, Input } from "antd";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../axiosInstance";
import { handleUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {  
    console.log("Success:", values);
    axiosInstance.post("signin", values)
    .then((response) => {
      console.log(response);
       dispatch(handleUserData(response.data.userData))
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
