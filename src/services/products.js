import { url_base } from "./config";
import { controlledFetch } from "./tools";

import { filterProducts } from "../tools/filter_products";
import { paginateProducts } from "../tools/paginate_products";

let cont = 999;
let cache;

const productsServices = {
  async getAllBy(category) {
    const categoryUrl = new Map([
      [undefined, ""],
      ["offers", "/category/men's clothing"],
      ["new-arrivals", "/category/jewelery"]
    ]);

    return await controlledFetch(
      /* url    */ `${url_base}${categoryUrl.get(category)}`,
      /* method */ { method: 'GET' }
    );
  },

  async getBy(category, query, page, limit) {
    const categoryUrl = new Map([
      [undefined, ""],
      ["offers", "/category/men's clothing"],
      ["new-arrivals", "/category/jewelery"]
    ]);

    if (!cache) {
      cache = await controlledFetch(
      /* url    */ `${url_base}${categoryUrl.get(category)}`,
      /* method */ { method: 'GET' }
      );
    }

    const filteredProduct = filterProducts(cache, query);
    const paginatedProducts = paginateProducts(filteredProduct, page, limit);

    return paginatedProducts;
  },

  async getById(id) {
    return await controlledFetch(
      /* url    */ `${url_base}/${id}`,
      /* method */ { method: 'GET' }
    );
  },


  async create(product) {
    return new Promise((resolve) => {
      console.log(product);
      cont = cont + 1;
      resolve({ ...product, id: cont });
    });
  },

  async update(product) {
    return new Promise((resolve) => {
      console.log(product);
      resolve({ ...product });
    });
  },

  async remove(id) {
    return new Promise((resolve) => {
      console.log(id);
      resolve({});
    });
  },
};

export { productsServices };