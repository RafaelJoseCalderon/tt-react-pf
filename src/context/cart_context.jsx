import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev;
      } else {
        const cents = Math.round(product.price * 100);
        return [...prev, { ...product, price: cents, quantity: 1 }];
      }
    });
  };

  const delItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext value={{ items, addItem, delItem }}>
      {children}
    </CartContext>
  );
};

export default CartProvider;