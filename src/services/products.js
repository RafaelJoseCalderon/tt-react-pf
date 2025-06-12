const url_base = "https://fakestoreapi.com/products";

const getdata = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return ({ data: data, error: null });
  } catch (error) {
    return ({ data: null, error: error });
  }
};

const categoriesServices = {
  async getAll() {
    return await getdata(`${url_base}/categories`);
  },

};

const productsServices = {
  async getAllBy(category) {
    const categoryUrl = category ? `/category/${category}` : "";
    return await getdata(`${url_base}${categoryUrl}`);
  },

  async getById(id) {
    return await getdata(`${url_base}/${id}`);
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