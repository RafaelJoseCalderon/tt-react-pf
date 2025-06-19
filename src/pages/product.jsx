import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../hooks/use_cart";

import { Container, Row, Col, Button, Badge } from "react-bootstrap";

import Loading from "../components/loading";
import SafeImage from "../components/safe_image";

import { productsServices } from "../services/products";
import ErrorsPromp from "../components/error_promp";

const Product = () => {
  const { id } = useParams();
  const { addItem } = useCart();

  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState();

  const addToCart = () => { addItem(product); };

  useEffect(() => {
    (async () => {
      const { data, error } = await productsServices.getById(id);

      setProduct(data);
      setError(error);
      setLoaded(false);
    })();
  }, []);

  if (loaded) return <Loading />;
  if (error) return <ErrorsPromp errors={[error]} />;

  return (
    <Container className="my-5">
      <Row>
        <Col md={4} className="text-center">
          <SafeImage image={product?.image} className="product-image" />
        </Col>

        <Col md={8}>
          <h2>{product.title}</h2>
          <h4 className="text-success mb-3">${product.price.toFixed(2)}</h4>
          <Badge bg="secondary" className="mb-2">{product.category}</Badge>
          <p className="mt-3">{product.description}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} opiniones)</p>
          <Button onClick={addToCart} variant="primary" size="lg">Agregar al carrito</Button>
        </Col>

      </Row>
    </Container>
  );
};

export default Product;