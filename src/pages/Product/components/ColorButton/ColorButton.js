import React from "react";
import "./ColorButton.scss";

export default function ColorButton({ setColor }) {
  return (
    <>
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
    </>
  );
}
