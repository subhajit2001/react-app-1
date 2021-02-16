import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

/*let counter = 0;

function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(el, document.getElementById("root"));
}*/

//Functional Components
function Hello(){
  return <h1>Hello World</h1>;
}
const el = <Hello />;
ReactDOM.render(
  el,
  document.getElementById('root')
);

//Class Components
class Hello1 extends React.Component{
  render(){
    return <h1>Hello First time react.</h1>;
  }
}
const el1 = <Hello1 />

ReactDOM.render(
  el1,
  document.getElementById('root1')
);

//props - arguments to Functional Components


//setInterval(show, 1000);
