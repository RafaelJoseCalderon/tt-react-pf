const url_base = "https://fakestoreapi.com/products";

const productsServices = (category) => {
  return fetch(`${url_base}${category ? `/category/${category}` : ""}`)
    .then(response => response.json())
    .then(data => ({ data: data, error: null }))
    .catch(error => ({ data: null, error: error }));
};

const productServices = (id) => {
  return fetch(`${url_base}/${id}`)
    .then(response => response.json())
    .then(data => ({ data: data, error: null }))
    .catch(error => ({ data: null, error: error }));
};

export { productsServices, productServices };