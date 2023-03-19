import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
