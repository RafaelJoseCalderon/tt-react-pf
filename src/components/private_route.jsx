import { Navigate } from "react-router-dom";

const PrivateRute = ({ children }) => {
  const auth = localStorage.getItem("auth") === "true";

  return (
    auth ? children : <Navigate to="/login" />
  );
};

export default PrivateRute;