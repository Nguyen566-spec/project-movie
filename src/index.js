import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { StyleProvider } from "@ant-design/cssinjs";
import { ToastMessage } from "./module/ToastMessage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StyleProvider hashPriority="high">
      <App />
      <ToastMessage />
    </StyleProvider>
  </Provider>
);
