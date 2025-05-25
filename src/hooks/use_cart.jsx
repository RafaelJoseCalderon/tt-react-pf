import { CartContext } from "../context/cart_context";
import { useContext } from "react";

export const useCart = () => useContext(CartContext);
