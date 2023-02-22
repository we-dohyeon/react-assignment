import React from "react";
import "./Introduce.scss";

export default function Introduce() {
  return (
    <div className="introduce-wrapper">
      <div className="introduce-box">
        <img
          className="profile"
          src="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="profile-img"
        ></img>
        <h1 className="name">이수민</h1>
        <p className="generation">42기</p>
      </div>
    </div>
  );
}
