import React, { useEffect, useState } from "react";
import { Avatar, Button, Divider, Input, List, Modal, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleIsOpenPosterDetail } from "../../../redux/appLogic";
import {CommentOutlined, LikeOutlined } from '@ant-design/icons'

const PosteMoreDetailModal = () => {
  //pour creer une instance useDispatch
  // l'instance useDispatch permet de mettre a jour les contenue de nos states redux
  const dispatch = useDispatch();
  // state redux pour gerer si  notre modal qui sert a afficher en detail un post est cacher ou afficher
  const IsOpenPosterDetail = useSelector(
    (state) => state.appLogic.IsOpenPosterDetail
  );
// nothing
  const handleOk = () => {};
  // fonction une fois executer met a jour le state redux IsOpenPosterDetail a "false"
  // ce qui vas en retour cacher notre modal
  const handleCancel = () => {
    dispatch(handleIsOpenPosterDetail(false));
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  //on y reviendra
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  console.log(IsOpenPosterDetail);
  return (
    <>
      <Modal
        title={
          <div className="PosterMoreDetailHeader">
            <Avatar
              size={50}
              style={{ marginRight: "20px" }}
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
            />
            <span style={{ textWrap: "wrap" }}>Abdoulaye SIDIBE</span>
          </div>
        }
        open={IsOpenPosterDetail}
        centered
        onOk={handleOk}
        width={"80%"}
        style={{ height: "" }}
        rootClassName="PosterMoreDetail"
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ height: "100%"}}>
          <div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between", width: "60%", height:"30%" }}>
            <p style={{marginLeft: "40px"}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates soluta libero consequuntur laborum maxime facere
              mollitia non labore sequi beatae, voluptatem sint vero ullam
              repellat exercitationem repudiandae ipsa laudantium consequatur.
            </p>
            <div>
            <Button  icon={<LikeOutlined />}/> <span>40 like</span>
            </div>
          </div>
          <div
          className="posterDetailComment"
            style={{boxSizing:"border-box", height: "calc((100% - 40%) - 70px)", overflowY: "scroll",}}
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
               
                </List.Item>
              )}
            />

          </div>
          <div style={{ height:"10%" }}>
          <Input style={{ height:"10%" }} addonAfter={<CommentOutlined />} placeholder="input search text" allowClear />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PosteMoreDetailModal;
