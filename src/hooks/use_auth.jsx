import { AuthContext } from "../context/auth_context";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);