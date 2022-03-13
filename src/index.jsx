import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./style.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);