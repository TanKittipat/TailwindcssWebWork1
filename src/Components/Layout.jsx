import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <AuthProvider>
      <Navbar />
      <div className="my-9">
        <Outlet />
      </div>
      <Footer />
    </AuthProvider>
  );
};

export default Layout;
