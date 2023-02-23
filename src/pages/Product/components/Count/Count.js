import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);

  // const minusCount = () => {
  //   setCount((prev) => prev - 1);
  // };

  // const plusCount = () => {
  //   setCount((prev) => prev - 1);
  // };

  const handleCount = (event) => {
    setCount((count) => (event ? count + 1 : count - 1));
  };

  const resetCount = () => {
    setCount(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => handleCount(false)}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={() => handleCount(true)}>+</button>
      </div>
      <button className="resetBtn" onClick={resetCount}>
        reset
      </button>
    </div>
  );
};

export default Count;
