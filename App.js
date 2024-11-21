import React from "react";
import ReactDOM from "react-dom";

// Create react element
// heading is an object
//React.createElement => create ReactElement- JS object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World React!"
);

console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // object is converted code that browser understandable(HTMLDOM)

//=====================================
//=====================================
// JSX - It is like HTML, XML syntax
// Create JSX element
// JSX => React.createElement => create ReactElement- JS object => HTMLElement(render)

const jsxHeading = <h1 id="heading">Hello React!</h1>;

console.log(jsxHeading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); // object is converted code that browser understandable(HTMLDOM)

