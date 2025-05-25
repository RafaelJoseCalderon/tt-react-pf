import { useContext } from "react";
import { CartContext } from "./cart_context";

export const useCart = () => useContext(CartContext);