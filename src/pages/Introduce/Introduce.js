import React from "react";
import "./Introduce.scss";

function Introduce() {
  return (
    <div className="introduce">
      <div className="introduceWrapper">
        <img
          className="company"
          src="https://images.velog.io/images/ddalkigum/post/3fb3f572-9932-43bf-b588-c9bd83aa0fb1/wecode.png"
          alt="위코드 로고"
        />
        <div className="name">이유진</div>
        <div className="position">42기</div>
      </div>
    </div>
  );
}

export default Introduce;
