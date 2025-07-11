import { useContext, useMemo } from "react";
import { usePaginatedSearch } from "./use_paginated_search";

import { CartContext } from "../context/cart_context";
import { filterProducts } from "../tools/filter_products";

export const useCart = () => {
  const { items, setItems } = useContext(CartContext);
  const { query, actions: { search } } = usePaginatedSearch();

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

  const exist = (id) => {
    return items.some(p => p.id === id);
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
    exist,

    filtered: { items: filteredItems, query, search, }
  };
};