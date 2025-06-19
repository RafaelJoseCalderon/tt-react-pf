import { url_base } from "./config";
import { safeFetch } from "./tools";

const categoriesServices = {
  async getAll() {
    return await safeFetch(
      /* url    */ `${url_base}/categories`,
      /* method */ { method: 'GET' }
    );
  },

};

const productsServices = {
  async getAllBy(category) {
    const categoryUrl = category ? `/category/${category}` : "";

    return await safeFetch(
      /* url    */ `${url_base}${categoryUrl}`,
      /* method */ { method: 'GET' }
    );
  },

  async getById(id) {
    return await safeFetch(
      /* url    */ `${url_base}/${id}`,
      /* method */ { method: 'GET' }
    );
  },

  async getByIdOrNull(id) {
    return;
  },

  create(product) {
    return;
  },

  update(id, product) {
    return;
  },

  remove(id) {
    return;
  },
};

export {
  categoriesServices,
  productsServices,
};