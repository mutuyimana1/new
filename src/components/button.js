import React, { useState } from "react";

function Button(props) {
  const [firstName, setFirstName] = useState("");

  return (
    <>
      {/* <div>
        <button onClick={props.add}>+</button>
        <button onClick={props.minus}>-</button>
        <h3 onClick={props.reset}>reset</h3>
      </div> */}

      <div style={{ background: "red", width: "500px" }}>
        <input onChange={setFirstName} id="input" placeholder="firstname" />

        <label>firstName: {firstName}</label>
      </div>
    </>
  );
}

export default Button;
