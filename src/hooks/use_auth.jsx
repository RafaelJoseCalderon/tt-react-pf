import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth_context";
import { loginServices, logoutServices } from "../services/users";

export const useAuth = () => {
  const { user, setUser, redirect, setLoggingIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setLoggingIn(true);

    try {
      const data = await loginServices(username, password);
      setUser(data);

      if (redirect.current !== null) {
        navigate(redirect.current, { replace: true });
        redirect.current = null;
      } else if (data?.role === "admin") {
        navigate("/admin", { replace: true });
      } else if (data?.role === "user") {
        navigate("/", { replace: true });
      }

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
      // TODO: error de sincronismo,
      // la navegacion llega despues del cerrar sesion,
      // lo que ocaciona que las rutas protegidas me envien a login
      navigate("/", { replace: true });
      setUser(data);
    } catch (error) {
      alert("no fue posible cerrar cession, intentelo nuevamente");
    } finally {
      setLoggingIn(false);
    }
  };

  const setAfterLogin = (path) => {
    redirect.current = path;
  };

  const isAuth = Object.keys(user).length > 0;
  const isAdmin = isAuth && user?.role === "admin";
  const isUser = isAuth && user?.role === "user";
  const hasRole = user?.role;

  return {
    user,

    login,
    logout,

    isAuth,
    isAdmin,
    isUser,
    hasRole,

    setAfterLogin
  };
};