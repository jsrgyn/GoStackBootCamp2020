// const soma = (a, b) => {
//   return a + b;
// };

// import { soma } from "./soma";
// console.log(soma(5, 3));
import React from "react";
import { render } from "react-dom";

// JSX: HTML dentro do JavaScript (Javascript XML)

import App from "./App";

// render(<h1>Hello World</h1>, document.getElementById("app"));
render(<App />, document.getElementById("app"));
