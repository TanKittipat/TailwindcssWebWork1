import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddPage from "../Pages/AddPage";
import Edit from "../Pages/Edit";
import RegisterForm from "../Components/RegisterForm";
import LoginForm from "../Components/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddPage />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/signup",
    element: <RegisterForm />,
  },
  {
    path: "/signin",
    element: <LoginForm />,
  },
]);

export default router;
