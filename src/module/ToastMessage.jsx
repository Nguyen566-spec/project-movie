// import { message } from "antd";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastMessage = () => {
  const toastClone = {
    error: (message) => toast(message, { type: "error" }),
    success: (message) => toast(message, { type: "success" }),
    info: (message) => toast(message, { type: "info" }),
  };
  Object.assign(message, toastClone);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export const message = {};
