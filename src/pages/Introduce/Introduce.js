import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const handleInput = () => {
    console.log("input태그 동작");
  };
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate(`/product`);
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
        <button onClick={goToProduct} className="input-btn">
          클릭
        </button>
      </div>
      <Link to="/product"> Product 페이지로 이동</Link>
    </div>
  );
};

export default Introduce;
