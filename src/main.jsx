// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Functins from "./Components/Functins";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Functins>
      <App />
    </Functins>
  </React.StrictMode>
);
