import { useEffect, useState } from "react";
import { usePaginatedSearch } from "../hooks/use_paginated_search";
import { ProductsContext } from "./products_context";

import { productsServices } from "../services/products";
import { categoriesServices } from "../services/categories";

const ProductsResouces = ({ children }) => {
  const { query, pagination, actions, init } = usePaginatedSearch(5);
  const { page, limit, totalPages } = pagination;

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState({});
  const [errors, setErrors] = useState({});

  const loadCategory = async () => {
    const data = await categoriesServices.getAll();
    setCategories(data);
  };

  const loadProduct = async (query, page, limit) => {
    const data = await productsServices.getBy(
      null, query, page, limit
    );

    if (data?.totalPages !== totalPages) {
      init.setTotalPages(data?.totalPages);
    }

    setProducts(data?.products);
  };

  const run = ({ cb, as }) => {
    const name = as;
    setLoaded(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: null }));

    try {
      cb();
    } catch (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    } finally {
      setLoaded(prev => ({ ...prev, [name]: false }));
    }
  };

  useEffect(() => {
    run({ cb: () => loadCategory(), as: "category" });
  }, []);

  useEffect(() => {
    run({ cb: () => loadProduct(query, page, limit), as: "products" });
  }, [query, page, limit]);

  return (
    <ProductsContext.Provider value={{
      products,
      categories,
      loaded: loaded["category"] && loaded["products"],
      errors: Object.values(errors),

      loadCategory,
      loadProduct,
      setLoaded,
      setErrors,

      paginatior: { query, pagination, actions }
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsResouces;
