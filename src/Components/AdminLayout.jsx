import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export default AdminLayout;
