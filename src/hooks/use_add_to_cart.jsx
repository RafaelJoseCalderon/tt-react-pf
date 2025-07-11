import { useEffect, useRef } from "react";
import { useAuth } from './use_auth';
import { useCart } from './use_cart';

import { toast } from "react-toastify";

export function useAddToCart() {
  const { isUser } = useAuth();
  const { items, exist, addItem } = useCart();
  const title = useRef(null);

  const handleAddToCart = (product) => {
    if (!isUser) {
      toast.info("Debes estar registrado para agregar productos al carrito");
      return;
    }

    if (exist(product.id)) {
      toast.info("Este producto ya está en el carrito");
      return;
    }

    title.current = product.title;
    addItem(product);
  };

  useEffect(() => {
    if (title.current !== null) {
      toast.success(`${title.current} agregado al carrito`);
      title.current = null;
    }
  }, [items]);

  return { addItem: handleAddToCart };
}