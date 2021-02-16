import React,{useState} from "react";
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
function Hello3(props){
  return <p>Hello, {props.name}!</p>;
}
const el3 = <Hello3 name="David"/>;
ReactDOM.render(
  el3,
  document.getElementById('root3')
);

function App() {
  return <div>
    <Hello3 name="David" />
    <Hello3 name="James" />
    <Hello3 name="Amy" />
  </div>;
}
const el4 = <App />
ReactDOM.render(
  el4,
  document.getElementById('root4')
);

class Hello4 extends React.Component{
  render(){
    return <p>Hello, {this.props.name}!</p>;
  }
}
const el5 = <Hello4 name="Subhajit"/>
ReactDOM.render(
  el5,
  document.getElementById('root5')
);

//name and price props
function Item(props){
  return <div className="item">
  <b>Name:</b> {props.name}<br/>
  <b>Price:</b> {props.price}<br/>
  </div>;
}
ReactDOM.render(
  <Item name="Subhajit" price="156"/>,
  document.getElementById('root6')
);

//state attribute of class components
class Hello5 extends React.Component{
  state = {
    name:"James"
  }
  render(){
   return <h1>Hello {this.state.name}.</h1> 
  }
}
ReactDOM.render(
  <Hello5 />,
  document.getElementById('root7')
);

//COUNTER APP
class Counter extends React.Component{
  state = {
    counter:0
  }
  componentDidMount() {
    this.setState({counter: 42});
  }

  componentDidUpdate() {
  alert("Number of clicks: " + this.state.counter);
}

  increment = () =>{
    this.setState({
      counter: this.state.counter + 1});
  }
  render(){
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
ReactDOM.render(
  <Counter />,
  document.getElementById('Counter')
);

//COUNTER APP USING functional Components AND hooks
function Counter1() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }

  return <div>
  <p>{counter}</p>
  <button onClick={increment}>
    Increment
  </button>
  </div>;
} 
ReactDOM.render(
  <Counter1 />,
  document.getElementById('Counter1')
);
//setInterval(show, 1000);
