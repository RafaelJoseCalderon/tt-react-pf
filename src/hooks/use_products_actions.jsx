import { useContext } from "react";
import { ProductsContext } from "../context/products_context";

import { productsServices } from "../services/products";
import { useNotification } from "./use_notification";
import { useNavigate } from "react-router-dom";

export const useProductsActions = () => {
  const { products, setProducts, setLoaded, setError } = useContext(ProductsContext);
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const getById = (id) => {
    return products.filter(p => p.id == id)[0];
  };

  const notify = (error) => {
    if (error?.type === "ApiError") {
      showNotification({
        type: "danger",
        message: "Error en la operación. Código: " + error.status
      });
    } else {
      setError(error);
    }
  };

  const create = async (product) => {
    setLoaded(true);
    try {
      const data = await productsServices.create(product);
      setProducts(prev => [...prev, data]);
      navigate("/admin");
      showNotification({ type: "success", message: "se a creado correctamente" });
    } catch (error) {
      notify(error);
    } finally {
      setLoaded(false);
    }
  };

  const update = async (product) => {
    setLoaded(true);
    try {
      const data = await productsServices.update(product);
      setProducts(prev => prev.map(p => (p.id === product.id ? data : p)));
      navigate("/admin");
      showNotification({ type: "success", message: "se a actualizado correctamente" });
    } catch (error) {
      notify(error);
    } finally {
      setLoaded(false);
    }
  };

  const remove = async (id) => {
    setLoaded(true);
    try {
      await productsServices.remove(id);
      setProducts(prev => prev.filter(p => p.id !== id));
      showNotification({ type: "success", message: "se a eliminado correctamente" });
    } catch (error) {
      notify(error);
    } finally {
      setLoaded(false);
    }
  };

  return { getById, create, update, remove };
};