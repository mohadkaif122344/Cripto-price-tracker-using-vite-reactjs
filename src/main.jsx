import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CoinProvider } from "./context/CoinContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CoinProvider>
    <App />
  </CoinProvider>
);
