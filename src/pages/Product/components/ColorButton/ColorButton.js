import React from "react";
import "./Colorbutton.scss";

function ColorButton({ setColor }) {
  return (
    <div className="colorButton">
      <button
        className="colorButton white"
        onClick={() => {
          setColor("white");
        }}
      />
      <button
        className="colorButton red"
        onClick={() => {
          setColor("red");
        }}
      />
      <button
        className="colorButton yellow"
        onClick={() => {
          setColor("yellow");
        }}
      />
    </div>
  );
}

export default ColorButton;
