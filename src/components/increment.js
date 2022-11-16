import React, { useState } from "react";

function Increment() {
  const [number, setNumber] = useState(0);
  const increaseByOne = () => {
    setNumber(number + 5);
  };
  const decreament = () => {
    setNumber(number - 5);
  };
  const reset = () => {
    setNumber(0);
  };
  return (
    <>
      <div>
        <h2>number:{number}</h2>
        <div>
          <button onClick={increaseByOne}>+</button>
        </div>
        <button onClick={decreament}>-</button>

        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}

export default Increment;
