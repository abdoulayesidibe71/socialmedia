import React, { useState } from "react";
import { DeleteOutlined, LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, List, Space } from "antd";
import PosteMoreDetailModal from "./Post/PosteMoreDetailModal";
import { useDispatch, useSelector } from "react-redux";
import { handleIsOpenPosterDetail, handleIsOpenUserProfileView } from "../../redux/appLogic";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));
const IconText = ({ icon, text, onClick }) => (
  <Space style={{ cursor:"pointer" }} onClick={onClick}>
    {React.createElement(icon)}
    {text}
  </Space>
);
const PosterList = () => {
  const dispatch = useDispatch();
  const IsOpenPosterDetail = useSelector(
    (state) => state.appLogic.IsOpenPosterDetail
  );
  const viewUserProfile = () => {
    dispatch(handleIsOpenUserProfileView(true));
  };

  return (
    <div className="PosterList">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            style={{ marginBottom: "20px" }}
            actions={[
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                onClick={() => dispatch(handleIsOpenPosterDetail(true))}
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar style={{ cursor:"pointer" }} onClick={viewUserProfile} src={item.avatar} />}
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span style={{ cursor:"pointer" }} onClick={() =>viewUserProfile()} href={item.href}>{item.title}</span>
                  <Button  icon={<DeleteOutlined />}/>
                </div>
              }
            />
            <div style={{ display: "flex", textAlign: "start" }}>
              {item.content}
            </div>
          </List.Item>
        )}
      />
      <PosteMoreDetailModal />
    </div>
  );
};
export default PosterList;
