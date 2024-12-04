import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const AdminOrMod = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/signin" />;
  }
  if (
    user.roles.includes("ROLES_MODERATOR") ||
    user.roles.includes("ROLES_ADMIN")
  ) {
    return children;
  }
  return <Navigate to="/notallowed" />;
};

export default AdminOrMod;
