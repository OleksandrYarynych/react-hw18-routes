import React from "react";
import Post from "./Post";
import usersPosts from "../dataFiles/postArr";

export default function Posts() {
  return (
    <div className="post-wrapper">
      <Post
        uuserName={usersPosts[0].userName}
        avatar={usersPosts[0].avatar}
        postPhoto={usersPosts[0].postPhoto}
        postDescription={usersPosts[0].postDescription}
        key={0}
      />
      <Post         
        uuserName={usersPosts[1].userName}
        avatar={usersPosts[1].avatar}
        postPhoto={usersPosts[1].postPhoto}
        postDescription={usersPosts[1].postDescription}
        key={0} 
      />
    </div>
  );
}
