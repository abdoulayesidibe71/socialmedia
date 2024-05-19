import React, { useState } from "react";
import { Avatar, Button, Drawer, Tabs } from "antd";
import { handleIsOpenUserProfileView } from "../../../redux/appLogic";
import { useDispatch, useSelector } from "react-redux";
import PosterList from "../PosterList";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Poste",
    children: (
      <div style={{height:"400px"}}>
        <PosterList />
      </div>
    ),
  },
  {
    key: "2",
    label: "Amis",
    children: "Amie",
  },
  {
    key: "3",
    label: "Paramètres",
    children: "Settings",
  },
];
const UserProfileView = () => {
  const dispatch = useDispatch();
  const IsOpenUserProfileView = useSelector(
    (state) => state.appLogic.IsOpenUserProfileView
  );

  const handleOk = () => {};
  const onClose = () => {
    dispatch(handleIsOpenUserProfileView(false));
  };
  return (
    <>
      <Drawer
        width={"50%"}
        title={
          <div style={{ display: "flex" }}>
            <Avatar
              size={50}
              style={{ marginRight: "20px" }}
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "min-content",
              }}
            >
              <span style={{ textWrap: "nowrap" }}>Abdoulaye SIDIBE</span>
              <span
                style={{
                  textWrap: "nowrap",
                  fontSize: "12px",
                  color: "gray",
                  marginLeft: "5px",
                }}
              >
                Email : abdoulaye@gmail.com
              </span>
            </div>
          </div>
        }
        onClose={onClose}
        open={IsOpenUserProfileView}
      >
        <div>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </Drawer>
    </>
  );
};
export default UserProfileView;
