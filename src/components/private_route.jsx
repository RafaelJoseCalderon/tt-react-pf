import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use_auth";

const PrivateRute = ({ children }) => {
  const { isAuth } = useAuth();

  return (
    isAuth ? children : <Navigate to="/login" />
  );
};

export default PrivateRute;