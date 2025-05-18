import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";

import Loading from "./loading";
import ProductCard from "./product_card";
import { productsServices } from '../services/products';

const ProductsList = ({ title, category, addItem }) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(null);

  // seria conveniente usar el gancho de react router para
  // no hacer dos solicitudes a la api, en el modo desarrollo
  useEffect(() => {
    productsServices(category).then(({ data, error }) => {
      setProducts(data);
      setError(error);
      setLoaded(false);
    });
  }, []);

  if (loaded) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <Container className="my-4">
      <h1>{title}</h1>
      <div className="box-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addItem={addItem} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsList;