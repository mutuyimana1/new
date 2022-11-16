import React from "react";
import "../components/calculate.css";
function Calculate() {
  return (
    <div>
      <div className="container">
        <div>
          <label>enter amsdjcdount</label>
          <input type="number" id="amaunt" />
        </div>

        <button>deposit</button>
        <button>withdraw</button>
        <div>
          <label>Total</label>
          <input type="number" id="tt" />
        </div>
      </div>
    </div>
  );
}

export default Calculate;
