import { useContext } from "react";
import { ProductsContext } from "../context/products_resouces";

import { productsServices } from "../services/products";
import { useNotification } from "./use_notification";

export const useProductsActions = () => {
  const { products, setProducts, setError } = useContext(ProductsContext);
  const { showNotification } = useNotification();

  const getById = (id) => {
    return products.filter(p => p.id == id)[0];
  };

  const notify = (error, okMessage) => {
    if (!error) {
      showNotification({ type: "success", message: okMessage });
    }

    if (error?.type === "ApiError") {
      showNotification({
        type: "danger",
        message: "Error en la operación. Código: " + res.status
      });
    } else {
      setError(error);
    }
  };

  const create = async (product) => {
    const { data, error } = await productsServices.create(product);

    setProducts(prev => [...prev, data]);
    notify(error, "se a creado correctamente");
  };

  const update = async (product) => {
    const { data, error } = await productsServices.update(product);

    setProducts(prev => prev.map(p => (p.id === product.id ? data : p)));
    notify(error, "se a actualizado correctamente");
  };

  const remove = async (id) => {
    const { error } = await productsServices.remove(id);

    if (!error) setProducts(prev => prev.filter(p => p.id !== id));
    notify(error, "se a eliminado correctamente");
  };

  return { getById, create, update, remove };
};