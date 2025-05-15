import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Loading from "./loading";
import ProductCard from "./product_card";

const ProductsList = ({ title, category }) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${category ? `category/${category}` : ""}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoaded(false);
      })
      .catch((error) => {
        setError(error);
        setLoaded(true);
      });
  }, []);

  if (loaded) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <Container className="my-4">
      <h1>{title}</h1>
      <div className="box-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsList;