import { createContext } from "react";
import usePersistentState from "../hooks/use_persistent";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = usePersistentState("cartItems", []);

  const addItem = (product) => {
    setItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      } else {
        const cents = Math.round(product.price * 100);
        return [...prev, { ...product, price: cents, quantity: 1 }];
      }
    });
  };

  const delItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addItem, delItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
