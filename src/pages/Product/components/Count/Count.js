import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);

  const minusCount = () => {
    // if (count > 1) {
    //   setCount((count) => count - 1);
    // }
    count > 1 && setCount((count) => count - 1);
  };

  const plusCount = () => {
    setCount((count) => count + 1);
  };

  //합친 것
  // const handleCount = (event) => {
  //   setCount((count) => (event ? count + 1 : count - 1));
  // };

  const resetCount = () => {
    setCount(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minusCount}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={plusCount}>+</button>
      </div>
      <button className="resetBtn" onClick={resetCount}>
        reset
      </button>
    </div>
  );
};

export default Count;
