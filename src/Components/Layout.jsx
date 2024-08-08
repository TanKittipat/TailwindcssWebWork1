import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import NavbarTwo from "./NavbarTwo";
import Footer from "./Footer";

const Layout = () => {
  return (
    <AuthProvider>
      <NavbarTwo />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export default Layout;
