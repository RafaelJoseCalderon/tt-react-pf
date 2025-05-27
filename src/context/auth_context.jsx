import { createContext } from "react";
import usePersistentState from "../hooks/use_persistent";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = usePersistentState("auth-user", {});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
