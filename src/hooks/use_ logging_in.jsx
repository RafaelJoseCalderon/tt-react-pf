import { useContext } from "react";
import { AuthContext } from "../context/auth_context";

export const useLoggingIn = () => {
  const { loggingIn } = useContext(AuthContext);
  return { loggingIn };
};