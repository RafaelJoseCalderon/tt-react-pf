import { createContext } from "react";
import { usePersistentState } from "../hooks/use_persistent";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = usePersistentState("cart-items", []);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
