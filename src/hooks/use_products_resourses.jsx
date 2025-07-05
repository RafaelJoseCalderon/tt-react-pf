import { useContext } from "react";
import { ProductsContext } from "../context/products_context";

export const useProductsResources = () => {
  const { products, categories, loaded, errors, paginatior } = useContext(ProductsContext);
  return { products, categories, loaded, errors, paginatior };
};