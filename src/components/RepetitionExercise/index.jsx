import React, { useState } from "react";
import "./index.css";

function Screen1({ exerciseName }) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="main-container">
        <h1>EXERCISE HERO</h1>
        <h1>{exerciseName}</h1>
        <h2 style={{ fontSize: "4rem" }} className='value'>{String(count).padStart(2, "0")}</h2>
        <div className="button-container">
          <button className="my-button" onClick={increaseCount}>
            +1
          </button>
          <button className="my-button" onClick={decreaseCount}>
            -1
          </button>
          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Screen1;
