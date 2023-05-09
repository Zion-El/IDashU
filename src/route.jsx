import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export default Router