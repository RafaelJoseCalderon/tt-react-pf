import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/use_auth";
import { useLoggingIn } from "../hooks/use_ logging_in";

const PrivateRute = ({ role, children }) => {
  const { isAuth, hasRole, setAfterLogin } = useAuth();
  const { loggingIn } = useLoggingIn();
  const { pathname } = useLocation();

  if (!isAuth && !loggingIn) {
    setAfterLogin(pathname);
    return (<Navigate to="/login" />);
  }

  if (hasRole !== role) {
    return (<Navigate to="/unauthorized" />);
  }

  return children;
};

export default PrivateRute;