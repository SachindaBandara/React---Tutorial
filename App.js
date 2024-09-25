// heading is an object
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World React!"
);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // object is converted code that browser understandable
