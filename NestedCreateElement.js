import React from "react";
import ReactDOM from "react-dom/client";

{
  /* 
    <div id= "root">

         <div id="parent">
            <div id="child1">
                 <h1>I am sachinda</h1>
                 <h2>I am ravindu</h2>
            </div>
        </div>

        <div id="parent">
            <div id="child2">
                 <h1>I am sachinda</h1>
                 <h2>I am ravindu</h2>
            </div>
        </div>

    </div>

*/
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am sachinda"),
    React.createElement("h2", {}, "I am ravindu"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am sachinda"),
    React.createElement("h2", {}, "I am ravindu"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
