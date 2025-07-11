import { url_base } from "./config";
import { controlledFetch } from "./tools";

const categoriesServices = {
  async getAll() {
    return (
      await controlledFetch(
      /* url    */ `${url_base}/api/categories`,
      /* method */ { method: 'GET' }
      )
    ).map(c => c.name);
  },
};

export { categoriesServices };