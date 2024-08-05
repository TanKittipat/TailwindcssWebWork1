import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Router/Router";
import Navbar from "./Components/Navbar";
import NavbarTwo from "./Components/NavbarTwo";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <Navbar /> */}
      <NavbarTwo />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
