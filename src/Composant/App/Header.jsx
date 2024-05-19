import { Input } from "antd";
import React from "react";
import UserProfileCard from "./UserProfileCard";
import AddPostModal from "./Post/AddPostModal";

const Header = () => {
  return (
    <div className="Header">
      <Input.Search
        placeholder="input search text"
        allowClear
        //onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <div>
        <AddPostModal />
      </div>
      <UserProfileCard />
    </div>
  );
};

export default Header;
