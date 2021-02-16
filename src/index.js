import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

let counter = 0;

function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(el, document.getElementById("root"));
}

setInterval(show, 1000);
