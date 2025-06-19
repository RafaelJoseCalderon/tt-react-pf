import { useState, useEffect } from "react";
import { useCart } from "../hooks/use_cart";

import { Container } from "react-bootstrap";

import Loading from "../components/loading";
import NotItems from "../components/not_items";
import ProductCard from "../components/product_card";

import { productsServices } from "../services/products";

const Products = ({ title, category }) => {
  const { addItem } = useCart();

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoaded(true);

    (async () => {
      const { data, error } = await productsServices.getAllBy(category);

      setProducts(data);
      setError(error);
      setLoaded(false);
    })();
  }, [category]);

  if (loaded) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <Container className="my-4">
      <h1>{title}</h1>

      {products?.length <= 0 ? <NotItems /> :
        <div className="box-container">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>
      }
    </Container>
  );
};

export default Products;