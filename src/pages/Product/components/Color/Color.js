import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" />
        white
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => {}} />
        <button className="colorButton red" onClick={() => {}} />
        <button className="colorButton yellow" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Color;
