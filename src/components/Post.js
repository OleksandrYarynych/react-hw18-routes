import React, { useState } from "react";
import "../css/post.css";

export default function Post({
  uuserName,
  avatar,
  postPhoto,
  postDescription,
}) {
  const [countLikes, setCountLikes] = useState(0);
  const [isPostLiked, setIsPostLikedd] = useState(false);
  const [isPostSaved, setIsPostSavedd] = useState(false);

  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={avatar} />
        <span className="username">{uuserName}</span>
      </div>
      <div className="post-photo-block">
        <img className="post-photo" src={postPhoto} />
      </div>
      <div className="post-footer">
        <div className="post-buttons-block">
          <button
            className="btn"
            onClick={() => {
              if (isPostLiked) {
                setCountLikes(countLikes - 1);
              } else {
                setCountLikes(countLikes + 1);
              }
              setIsPostLikedd(!isPostLiked);
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-heart fa-w-16 fa-2x icon "
            >
              <path
                fill={isPostLiked ? "red" : "#ffffff"}
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                className=""
              ></path>
            </svg>
            <span className="btn-text">{countLikes}</span>
          </button>
          <button className="btn" onClick={() => setIsPostSavedd(!isPostSaved)}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bookmark"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="svg-inline--fa fa-bookmark fa-w-12 fa-3x icon  save-icon"
            >
              <path
                fill={isPostSaved ? "red" : "#ffffff"}
                d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
                class=""
              ></path>
            </svg>
          </button>
        </div>
        <p className="post-description">{postDescription}</p>
      </div>
    </div>
  );
}
