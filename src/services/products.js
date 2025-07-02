import { url_base } from "./config";
import { controlledFetch } from "./tools";

let cont = 999;

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