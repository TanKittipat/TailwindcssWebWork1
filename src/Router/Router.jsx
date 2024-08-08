import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddPage from "../Pages/AddPage";
import Edit from "../Pages/Edit";
import RegisterForm from "../Pages/RegisterForm";
import LoginForm from "../Pages/LoginForm";
import Layout from "../Components/Layout";
import AdminLayout from "../Components/AdminLayout";

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
        element: <AddPage />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "signup",
        element: <RegisterForm />,
      },
      {
        path: "signin",
        element: <LoginForm />,
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
