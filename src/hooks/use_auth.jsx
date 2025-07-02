import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth_context";
import { loginServices, logoutServices } from "../services/users";

export const useAuth = () => {
  const { user, setUser, setLoggingIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setLoggingIn(true);

    try {
      const data = await loginServices(username, password);
      setUser(data);
      navigate("/admin");
    } catch (error) {
      throw error;
    } finally {
      setLoggingIn(false);
    }
  };

  const logout = async () => {
    setLoggingIn(true);

    try {
      const data = await logoutServices(user.token);
      setUser(data);
      navigate("/login");
    } catch (error) {
      alert("no fue posible cerrar cession, intentelo nuevamente");
    } finally {
      setLoggingIn(false);
    }
  };

  const isAuth = Object.keys(user).length > 0;
  const isAdmin = isAuth && user?.role === "admin";

  return { user, login, logout, isAuth, isAdmin };
};