import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import NavbarTwo from "./NavbarTwo";
import Footer from "./Footer";

const Layout = () => {
  return (
    <AuthProvider>
      <NavbarTwo />
      <div className="h-screen">
        <Outlet />
      </div>
      <Footer />
    </AuthProvider>
  );
};

export default Layout;
