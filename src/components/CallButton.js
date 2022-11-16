import React, { useState } from "react";
import Button from "./button";
function CallButton() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 2);
  };
  const reset = () => {
    setNumber(0);
  };
  return (
    <div>
      <h2>number:{number} </h2>

      <Button add={increase} minus={decrease} reset={reset} />
    </div>
  );
}

export default CallButton;
