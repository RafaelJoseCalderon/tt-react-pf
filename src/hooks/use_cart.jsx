import { CartContext } from "../context/cart_context";
import { useContext } from "react";

export const useCart = () => {
  const { items, setItems } = useContext(CartContext);

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

  const delAll = () => {
    setItems([]);
  };

  return { items, addItem, delItem, delAll };
};
