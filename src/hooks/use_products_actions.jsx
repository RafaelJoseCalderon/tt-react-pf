import { useContext } from "react";
import { ProductsContext } from "../context/products_context";

import { productsServices } from "../services/products";
import { useNotification } from "./use_notification";
import { useNavigate } from "react-router-dom";

export const useProductsActions = () => {
  const { products, loadProduct, setLoaded, setErrors } = useContext(ProductsContext);
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const getById = (id) => {
    return products.filter(p => p.id == id)[0];
  };

  const notifyOrError = (error, name) => {
    if (error?.type === "ApiError") {
      showNotification({
        type: "danger",
        message: `Error en la operación. Código: ${error.status}`
      });
    } else {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const run = async ({ cb, as }) => {
    const name = as;
    setLoaded(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: null }));

    try {
      await cb();
    } catch (error) {
      notifyOrError(error, name);
    } finally {
      setLoaded(prev => ({ ...prev, [name]: false }));
    }
  };

  const create = async (product) => {
    await run({ cb: async () => productsServices.create(product), as: "create" });
    await run({ cb: async () => await loadProduct(), as: "products" });

    showNotification({ type: "success", message: "se a creado correctamente" });
    navigate("/admin");
  };

  const update = async (product) => {
    await run({ cb: async () => productsServices.update(product), as: "update" });
    await run({ cb: async () => await loadProduct(), as: "products" });

    showNotification({ type: "success", message: "se a actualizado correctamente" });
    navigate("/admin");
  };

  const remove = async (id) => {
    await run({ cb: async () => productsServices.remove(id), as: "remove" });
    await run({ cb: async () => await loadProduct(), as: "products" });

    showNotification({ type: "success", message: "se a eliminado correctamente" });
  };

  return { getById, create, update, remove };
};