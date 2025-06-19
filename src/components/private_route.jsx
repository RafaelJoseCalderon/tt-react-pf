import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use_auth";

const PrivateRute = ({ children }) => {
  const { isAdmin } = useAuth();

  return (
    isAdmin ? children : <Navigate to="/login" />
  );
};

export default PrivateRute;