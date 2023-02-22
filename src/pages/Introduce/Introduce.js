import React from "react";
import "./Introduce.scss";

const Introduce = () => {
  const handleInput = () => {
    console.log("input태그 동작");
  };
  const handleButton = () => {
    console.log("botton 태그 동작");
  };

  return (
    <div className="introduceWrap">
      <img src="./images/HeinImg.jpg" className="introduce-img" alt="HeinImg" />
      <p className="introduce-text">
        <span className="introduce-name">이해인</span>42기
      </p>
      <div className="introduce-input-wrap">
        <input
          className="introduce-input"
          onChange={handleInput}
          type="text"
        ></input>
        <button onClick={handleButton} className="input-btn">
          클릭
        </button>
      </div>
    </div>
  );
};

export default Introduce;
