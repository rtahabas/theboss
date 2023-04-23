import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const root = ReactDOM.createRoot(document.getElementById("root"));

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

root.render(
  <React.StrictMode>
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </NextUIProvider>
    </NextThemesProvider>
  </React.StrictMode>
);
