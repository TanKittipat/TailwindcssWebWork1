import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddPage from "../Pages/AddPage";
import Edit from "../Pages/Edit";

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
]);

export default router;
