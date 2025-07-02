import { url_base } from "./config";
import { controlledFetch } from "./tools";

const categoriesServices = {
  async getAll() {
    return await controlledFetch(
      /* url    */ `${url_base}/categories`,
      /* method */ { method: 'GET' }
    );
  },
};

export { categoriesServices };