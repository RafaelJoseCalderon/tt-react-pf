import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Loading from "../components/loading";
import { productServices } from '../services/products';

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(false);

  // seria conveniente usar el gancho de react router para
  // no hacer dos solicitudes a la api, en el modo desarrollo
  useEffect(() => {
    productServices(id).then(({ data, error }) => {
      setProduct(data);
      setError(error);
      setLoaded(false);
    });
  }, []);

  if (loaded) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="text-center">
          <img src={product.image} alt={product.title} className="img-fluid product-image" />
        </Col>

        <Col md={6}>
          <h2>{product.title}</h2>
          <h4 className="text-success mb-3">${product.price.toFixed(2)}</h4>
          <Badge bg="secondary" className="mb-2">{product.category}</Badge>
          <p className="mt-3">{product.description}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} opiniones)</p>
          <Button variant="primary" size="lg">Agregar al carrito</Button>
        </Col>

      </Row>
    </Container>
  );
};

export default Product;