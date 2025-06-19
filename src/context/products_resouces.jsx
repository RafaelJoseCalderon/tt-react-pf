import { createContext, useEffect, useState } from "react";
import { productsServices } from "../services/products";
import { categoriesServices } from "../services/categories";

export const ProductsContext = createContext();

const ProductsResouces = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState([null, null]);

  useEffect(() => {
    (async () => {
      const [product, categories] = await Promise.all([
        productsServices.getAllBy(),
        categoriesServices.getAll()
      ]);

      setProducts(product.data);
      setCategories(categories.data);
      setError([product.error, categories.error]);
      setLoaded(false);
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{
      products,
      categories,
      loaded,
      error,

      setProducts,
      setCategories,
      setError,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsResouces;
