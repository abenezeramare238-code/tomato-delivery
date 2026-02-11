import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import StoreContextProvider from "./context/StoreContext";

const basePath =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basePath}>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>,
);
