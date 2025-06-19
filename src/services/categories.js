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

export { categoriesServices };