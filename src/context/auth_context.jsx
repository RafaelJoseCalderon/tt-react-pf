import { createContext, useState } from "react";
import usePersistentState from "../hooks/use_persistent";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = usePersistentState("auth-user", {});
  const [loggingIn, setLoggingIn] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser, loggingIn, setLoggingIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
