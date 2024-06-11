import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import {AuthContextProvider} from "./context/authContext";
import {WorkoutContextProvider} from "./context/workoutContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <RouterProvider router={router} />
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
