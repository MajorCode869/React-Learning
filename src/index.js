import React from "react";
import ReactDOM from "react-dom";

const fname = "Sajeev";
const lname = "Yadav";
let year = new Date();
ReactDOM.render(
  <div>
    <p>
      Created by {fname} {lname} !
    </p>
    <p>Copyright {year.getFullYear()}.</p>
  </div>,
  document.getElementById("root")
);
