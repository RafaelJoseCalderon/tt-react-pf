import { useAuth } from './use_auth';
import { useCart } from './use_cart';

import { toast } from "react-toastify";

export function useAddToCart() {
  const { isUser } = useAuth();
  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    if (isUser) {
      addItem(product);
    } else {
      toast.info("debes estar registrado para agregar productos al carrito");
    }
  };

  return { addItem: handleAddToCart };
}
