import { url_base } from "./config";
import { safeFetch } from "./tools";

let cont = 999;

const productsServices = {
  async getAllBy(category) {
    const categoryUrl = new Map([
      [undefined, ""],
      ["offers", "/category/men's clothing"],
      ["new-arrivals", "/category/jewelery"]
    ]);

    return await safeFetch(
      /* url    */ `${url_base}${categoryUrl.get(category)}`,
      /* method */ { method: 'GET' }
    );
  },

  async getById(id) {
    return await safeFetch(
      /* url    */ `${url_base}/${id}`,
      /* method */ { method: 'GET' }
    );
  },


  async create(product) {
    return new Promise((resolve) => {
      console.log(product);
      cont = cont + 1;
      resolve({ data: { ...product, id: cont }, error: null });
    });
  },

  async update(product) {
    return new Promise((resolve) => {
      console.log(product);
      resolve({ data: { ...product }, error: null });
    });
  },

  async remove(id) {
    return new Promise((resolve) => {
      console.log(id);
      resolve({ data: {}, error: null });
    });
  },
};

export { productsServices };