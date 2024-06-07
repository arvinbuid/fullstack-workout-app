import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
