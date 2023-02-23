import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ setColor }) => {
  return (
    <div className="colorHandler">
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
};

export default ColorButton;
