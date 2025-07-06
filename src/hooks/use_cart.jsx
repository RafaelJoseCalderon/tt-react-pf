import { useCallback, useContext, useMemo } from "react";
import { usePaginatedSearch } from "./use_paginated_search";

import { CartContext } from "../context/cart_context";
import { filterProducts } from "../tools/filter_products";

export const useCart = () => {
  const { items, setItems, setNotyfy } = useContext(CartContext);
  const { query, actions: { search } } = usePaginatedSearch();

  const addItem = useCallback((product) => {
    setItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        setNotyfy({ type: "info", message: "Este producto ya está en el carrito" });
        return prev;
      } else {
        const cents = Math.round(product.price * 100);
        setNotyfy({ type: "success", message: `${product.title} agregado al carrito` });
        return [...prev, { ...product, price: cents, quantity: 1 }];
      }
    });
  }, [setItems, setNotyfy]);

  const delItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, [setItems]);

  const delAll = useCallback(() => {
    setItems([]);
  }, [setItems]);

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
