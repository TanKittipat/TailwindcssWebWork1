import { useAuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const UserRedirect = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default UserRedirect;
