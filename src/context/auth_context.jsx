import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import usePersistentState from "../hooks/use_persistent";
import { loginServices, logoutServices } from "../services/users";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = usePersistentState("auth-user", {});
  const navigate = useNavigate();

  const login = (username, password) => {
    return loginServices(username, password)
      .then(({ data, error }) => {
        if (!error) {
          setUser(data);
          navigate("/admin");
        };

        return { data, error };
      });
  };

  const logout = () => {
    logoutServices(user)
      .then(({ data, error }) => {
        if (!error) {
          setUser(data);
          navigate("/login");
        } else {
          alert("no fue posible cerrar cession, intentelo nuevamente");
        }
      });
  };

  const isAuth = Object.keys(user).length > 0;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
