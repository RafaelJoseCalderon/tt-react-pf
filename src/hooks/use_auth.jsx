import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth_context";
import { loginServices, logoutServices } from "../services/users";

export const useAuth = () => {
  const { user, setUser, setLoggingIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setLoggingIn(true);

    const { data, error } = await loginServices(username, password);
    if (!error) {
      setUser(data);
      navigate("/admin");
    }

    setLoggingIn(false);
    return { data, error };
  };

  const logout = async () => {
    setLoggingIn(true);

    const { data, error } = await logoutServices(user);

    if (!error) {
      setUser(data);
      navigate("/login");
    } else {
      alert("no fue posible cerrar cession, intentelo nuevamente");
    }

    setLoggingIn(false);
  };

  const isAuth = Object.keys(user).length > 0;

  return { user, login, logout, isAuth };
};