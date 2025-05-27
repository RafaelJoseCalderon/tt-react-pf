import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth_context";
import { loginServices, logoutServices } from "../services/users";

export const useAuth = () => {
  const { user, setUser, setLoggingIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (username, password) => {
    setLoggingIn(true);

    return loginServices(username, password)
      .then(({ data, error }) => {
        if (!error) {
          setUser(data);
          navigate("/admin");
        };

        setLoggingIn(false);
        return { data, error };
      });
  };

  const logout = () => {
    setLoggingIn(true);

    logoutServices(user)
      .then(({ data, error }) => {
        if (!error) {
          setUser(data);
          navigate("/login");
        } else {
          alert("no fue posible cerrar cession, intentelo nuevamente");
        }

        setLoggingIn(false);
      });
  };

  const isAuth = Object.keys(user).length > 0;

  return { user, login, logout, isAuth };
};