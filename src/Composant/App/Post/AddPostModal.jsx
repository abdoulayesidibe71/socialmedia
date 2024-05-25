import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axiosInstance from "../../../axiosInstance";
import axios from "axios";
const AddPostModal = () => {
  //state pour gerer l'affichage de notre modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  //state pour stocker le contenu de notre textArea
  const [post, setpost] = useState();

  // la fonction utiliser pour mettre isModalOpen a "true"
  //si isModalOpen est a true, le modal sera afficher
  const showModal = () => {
    setIsModalOpen(true);
  };

  //la fonction qui sera executer lorsqu'on vas cliquer le bouton OK
  //dans notre cas la fonction sera utiliser pour envoyer au backend les donnees qui sont dans le state post  
  const handleOk = () => {
    console.log("l'ajout du post en cours")
    axiosInstance.post("addPost", { post }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error);
    });
  };

  //la fonction qui sera executer lorsqu'on vas cliquer le bouton Cancel
  //cela vas juste servir pour mettre le state ModalOpen a false se qui vas permettre de cacher le modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // la fonction qui sera executer a chaque fois que le contenu du textArea change
  //ici nous l'utilisons pour stocker dans le state post ce que l'utilisateur vas ecrire comme poste
  const onChangePost = (e) => {
    console.log(e.target.value);
    setpost(e.target.value);
  };
  

  return (
    <>
    {/* Cet bouton "Creer un poste", une fois cliquer, vas executer la fonction "showModal"
    ce qui vas servir a afficher le modal qui est cacher */}
      <Button type="primary" onClick={showModal}>
        <PlusOutlined />
        Creer un poste
      </Button>

      {/* le modal viens de antd, permet d'afficher de modal */}
      <Modal

        title="Basic Modal"
        //open sert a gerer l'affiche du modal
        // si open est false, le modal est cacher, si il est true, le modal est afficher
        open={isModalOpen}
        //pour specifier la fonction qui sera executer si on clique sur le bouton Ok ou Cancel
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Ecrivez votre poste ici</p>
        {/* //ici nous avons un textArea qui permet d'ecrire le poste */}
        <Input.TextArea
          size="middle"
          onChange={(e) => onChangePost(e)}
        ></Input.TextArea>
      </Modal>
    </>
  );
};
export default AddPostModal;
