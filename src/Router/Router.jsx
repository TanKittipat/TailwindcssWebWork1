import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddPage from "../Pages/AddPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddPage />,
  },
]);

export default router;
