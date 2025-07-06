import { useContext, useMemo } from "react";
import { CartContext } from "../context/cart_context";

import { toast } from "react-toastify"; // <-- importá toast
import { filterProducts } from "../tools/filter_products";

import { usePaginatedSearch } from "./use_paginated_search";

export const useCart = () => {
  const { items, setItems } = useContext(CartContext);
  const { query, actions: { search } } = usePaginatedSearch();

  const addItem = (product) => {
    setItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        toast.info("Este producto ya está en el carrito");
        return prev;
      } else {
        const cents = Math.round(product.price * 100);
        toast.success(`${product.title} agregado al carrito`);
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

  const filteredItems = useMemo(() => {
    if (!query) return items;
    return filterProducts(items, query);
  }, [items, query]);

  return {
    items,
    addItem,
    delItem,
    delAll,

    filtered: { items: filteredItems, query, search, }
  };
};
