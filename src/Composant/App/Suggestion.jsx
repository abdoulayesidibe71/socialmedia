import React, { useEffect, useState } from "react";
import { Avatar, Button, Input, List, message, Spin } from "antd";
import VirtualList from "rc-virtual-list";
import "../../Styles/Suggestion.css";
import axiosInstance from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { handleAllUsers } from "../../redux/userSlice";

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;
const Suggestion = () => {
  const dispatch = useDispatch();
  const [isReady, setisReady] = useState(false);
  const [data, setData] = useState([]);
  const allUsers = useSelector((state) => state.user.allUsers);
  const UserData = useSelector((state) => state.user.UserData);
  useEffect(() => {
    console.log(allUsers);
    axiosInstance
      .get("getAllUser")
      .then((response) => {
        console.log(response);
        dispatch(handleAllUsers(response.data.allUsers));
        setisReady(true);
        setData(response.data.allUsers)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [UserData]);
  // const onScroll = (e) => {
  //   // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
  //   if (
  //     Math.abs(
  //       e.currentTarget.scrollHeight -
  //         e.currentTarget.scrollTop -
  //         ContainerHeight
  //     ) <= 1
  //   ) {
  //     appendData();
  //   }
  // };
  return (
    <div className="Suggestion">
      <div className="SuggestionHeader">
        <span style={{ marginBottom: "10px" }}>Personnnes a suivre</span>
        <Input.Search
          placeholder="input search text"
          allowClear
          //onSearch={onSearch}
          style={{
            width: "100%",
          }}
        />
      </div>
      {isReady ? (
        <List>
          <VirtualList
            data={data}
            height={ContainerHeight}
            itemHeight={47}
            itemKey="email"
            // onScroll={onScroll}
          >
            {(item) => (
              <List.Item
                key={item.email}
                actions={[<Button key="list-loadmore-more">Suivre</Button>]}
              >
                <List.Item.Meta
                  avatar={<Avatar />}
                  title={<span>{item.name}</span>}
                />
              </List.Item>
            )}
          </VirtualList>
        </List>
      ) : (
        <Spin />
      )}
    </div>
  );
};
export default Suggestion;
