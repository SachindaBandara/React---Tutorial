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

//const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); // object is converted code that browser understandable(HTMLDOM)


//=====================================
//=====================================
// React Functional Component
// method 1
const HeadingComponent = () => {
  return <h1>Hello world React!</h1>;
}
// method 2
const HeadingComponent2 = () => <h1>Hello world React!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>); //functional component rendering


// display react element using {}
      const title = (
        <h1>Hello React</h1>
      );

      const Title1 = () => (
        <h1>Hello React</h1>
      ); 

      const HeadingComponent3 = () => {
        <div>
          {title}
          {Title1()}
          <Title1/>
          <h1>Hi I am Sachinda</h1>
        </div>
      };
      //  {Title1()} = <Title1/>



