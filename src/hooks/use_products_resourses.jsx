import { useContext } from "react";
import { ProductsContext } from "../context/products_resouces";

export const useProductsResources = () => {
  const { products, categories, loaded, error } = useContext(ProductsContext);
  return { products, categories, loaded, error };
};