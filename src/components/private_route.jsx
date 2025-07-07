import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/use_auth";

const PrivateRute = ({ role, children }) => {
  const { hasRole, setAfterLogin } = useAuth();
  const { pathname } = useLocation();

  if (hasRole !== role) {
    setAfterLogin(pathname);
    return (<Navigate to="/login" />);
  }

  return (children);
};

export default PrivateRute;