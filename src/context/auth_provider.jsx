import { useRef, useState } from "react";
import { AuthContext } from "./auth_context";
import { usePersistentState } from "../hooks/use_persistent";

const AuthProvider = ({ children }) => {
  const [user, setUser] = usePersistentState("auth-user", {});
  const [loggingIn, setLoggingIn] = useState();
  const redirect = useRef(null);

  return (
    <AuthContext.Provider value={{ user, setUser, redirect, loggingIn, setLoggingIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
