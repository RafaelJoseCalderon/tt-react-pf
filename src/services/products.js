import { url_base } from "./config";
import { controlledFetch } from "./tools";

const setPrice = (item, product) => {
  if (typeof product?.price === 'string') {
    product.price = product.price.replace(',', '.').trim();
  }

  const num = parseFloat(product?.price);
  item.price = isNaN(num) ? null : num;
};

const setImage = (item, product) => {
  if (product?.image) {
    item.image = product?.image;
  }
};

const productsServices = {
  async getBy(category, query, page, limit) {
    const url = new URL("api/products", url_base);

    if (category) url.pathname += `/${category}`;

    if (query) url.searchParams.append("query", query);
    if (page) url.searchParams.append("page", page);
    if (limit) url.searchParams.append("limit", limit);

    const response = await controlledFetch(
      url.toString(), {
      method: 'GET'
    });

    return response;
  },

  async getById(id) {
    const response = await controlledFetch(
      `${url_base}/api/products/${id}`, {
      method: 'GET'
    });

    // parseImage(response);
    return response;
  },

  async create(product) {
    const item = {};

    item.title = product?.title || "";
    item.description = product?.description || "";
    item.category = product?.category || "";
    item.rating = { rate: 0.0, count: 0 };

    setPrice(item, product);
    setImage(item, product);

    return await controlledFetch(
      `${url_base}/api/products/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
  },

  async update(product) {
    const item = {};

    item.id = product?.id;
    item.title = product?.title;
    item.description = product?.description;
    item.category = product?.category;
    item.rating = { rate: 0.0, count: 0 };

    setPrice(item, product);
    setImage(item, product);

    return await controlledFetch(
      `${url_base}/api/products/update/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
  },

  async remove(id) {
    return await controlledFetch(
      `${url_base}/api/products/delete/${id}`, {
      method: 'DELETE'
    });
  },
};

export { productsServices };