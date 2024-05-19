import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleUserData } from "../../redux/userSlice";
import axiosInstance from "../../axiosInstance";
import { handleActiveAuth } from "../../redux/appLogic";

const SignUp = () => {
  const dispatch = useDispatch()
  const onFinish = (values) => {  
    console.log("Success:", values);
    axiosInstance.post("signup", values)
    .then((response) => {
      console.log(response);
      dispatch(handleUserData(response.data.userData))
      dispatch(handleActiveAuth('confirmEmail'))
    })
    .catch((error) => {
      console.log(error);
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="">
      <h1>Inscription</h1>
      <Form
        name="signUp"
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish} // s'execute lors qu'on clique sur le bouton s'inscrire
        layout="vertical"
      >
        <Form.Item label="Nom complet" name="name" required={true}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" required={true}>
          <Input />
        </Form.Item>
        <Form.Item label="Mot de passe" name="password" required={true}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="Confirmer MDP" name="confirmPassword" required={true}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            S'inscrire
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignUp;
