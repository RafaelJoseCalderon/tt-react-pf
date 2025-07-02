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
      const errors = [];

      try {
        const [product, categories] = await Promise.allSettled([
          productsServices.getAllBy(),
          categoriesServices.getAll()
        ]);

        if (product.status === 'rejected') {
          errors.push(product.reason);
        }

        if (categories.status === 'rejected') {
          errors.push(categories.reason);
        }

        if (errors.length === 0) {
          setProducts(product.value);
          setCategories(categories.value);
        } else {
          setError(errors);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(false);
      }
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
      setLoaded,
      setError,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsResouces;
