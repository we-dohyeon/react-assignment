import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

export default function Introduce() {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/product`);
  };
  const HandleInput = (evnet) => {
    console.log("input 태그 동작");
  };

  const HandleButton = (event) => {
    console.log("button 태그 동작");
  };

  return (
    <div className="introduce-wrapper">
      <div className="introduce-box">
        <img
          className="profile"
          src="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="profile-img"
        ></img>
        <div className="information">
          <h1 className="name">이수민</h1>
          <p className="generation">42기</p>
        </div>
        <div>
          <input type="text" onChange={HandleInput} />
          <button type="submit" onClick={(goToProduct, HandleButton)}>
            클릭
          </button>
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
    </div>
  );
}
