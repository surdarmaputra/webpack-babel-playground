import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const domContainer = document.querySelector('#app');
const root = ReactDom.createRoot(domContainer);
root.render(<App />);