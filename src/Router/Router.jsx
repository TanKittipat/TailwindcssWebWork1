import { createBrowserRouter } from "react-router-dom";
// lazy คือตัวที่นำมาใช้โหลดตัว animation มาแสดงก่อน
import { lazy } from "react";

// เปลี่ยนวิธี import มาใช้ lazy
const Home = lazy(() => import("../Pages/Home"));
const AddPage = lazy(() => import("../Pages/AddPage"));
const Edit = lazy(() => import("../Pages/Edit"));
const RegisterForm = lazy(() => import("../Pages/RegisterForm"));
const LoginForm = lazy(() => import("../Pages/LoginForm"));
const Layout = lazy(() => import("../Components/Layout"));
const AdminLayout = lazy(() => import("../Components/AdminLayout"));
const AdminOrMod = lazy(() => import("./AdminOrMod"));
const NotPermitted = lazy(() => import("../Pages/NotPermitted"));

// import Home from "../Pages/Home";
// import AddPage from "../Pages/AddPage";
// import Edit from "../Pages/Edit";
// import RegisterForm from "../Pages/RegisterForm";
// import LoginForm from "../Pages/LoginForm";
// import Layout from "../Components/Layout";
// import AdminLayout from "../Components/AdminLayout";
// import AdminOrMod from "./AdminOrMod";
// import NotPermitted from "../Pages/NotPermitted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: (
          <AdminOrMod>
            <AddPage />
          </AdminOrMod>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <AdminOrMod>
            <Edit />
          </AdminOrMod>
        ),
      },
      {
        path: "signup",
        element: <RegisterForm />,
      },
      {
        path: "signin",
        element: <LoginForm />,
      },
      {
        path: "notallowed",
        element: <NotPermitted />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <AdminLayout />,
    children: [{ path: "user", element: <div>User Dashboard</div> }],
  },
]);

export default router;
