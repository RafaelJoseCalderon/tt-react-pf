import { CartContext } from "./cart_context";
import { usePersistentState } from "../hooks/use_persistent";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartProvider = ({ children }) => {
  const [items, setItems] = usePersistentState("cart-items", []);
  const [notify, setNotyfy] = useState({ type: null, message: "" });

  useEffect(() => {
    if (notify.type) {
      if (notify.type === "success") {
        toast.success(notify.message);
      } else if (notify.type === "info") {
        toast.info(notify.message);
      }
      setNotyfy({ type: null, message: "" });
    }
  }, [notify]);

  return (
    <CartContext.Provider value={{ items, setItems, setNotyfy }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
