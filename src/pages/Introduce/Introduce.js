import React from "react";
import "./Introduce.scss";

const Introduce = () => {
  return (
    <div className="introduceWrap">
      <img src="./images/HeinImg.jpg" className="introduce-img" alt="HeinImg" />
      <p className="introduce-text">
        <span className="introduce-name">이해인</span>42기
      </p>
    </div>
  );
};

export default Introduce;
