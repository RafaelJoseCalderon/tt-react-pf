import { url_base } from "./config";
import { controlledFetch } from "./tools";

import { filterProducts } from "../tools/filter_products";
import { paginateProducts } from "../tools/paginate_products";

let cont = 999;
let cache = { url: null, data: [] };

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

    const requestUrl = `${url_base}${categoryUrl.get(category)}`;

    if (cache.url !== requestUrl) {
      console.log(cache);

      cache.url = requestUrl;
      cache.data = await controlledFetch(
      /* url    */ requestUrl,
      /* method */ { method: 'GET' }
      );
    }


    const filtered = filterProducts(cache.data, query);
    const paginated = paginateProducts(filtered, page, limit);

    return paginated;
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