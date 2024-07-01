import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Router/Router";
import Navbar from "./Components/Navbar";
import NavbarTwo from "./Components/NavbarTwo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <NavbarTwo />
    <RouterProvider router={router} />
  </React.StrictMode>
);
