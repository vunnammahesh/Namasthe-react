import React from "react";
import ReactDOM from "react-dom/client";

const Heading = ()=><h1>hello</h1>
const Comp = ()=>(
  <div>
    <Heading/>
    <p>paragraph</p>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp/>);