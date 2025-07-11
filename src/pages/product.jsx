import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAddToCart } from "../hooks/use_add_to_cart";

import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { ProductSEO } from "../pages_ceo";

import ErrorsPromp from "../components/error_promp";
import OverlaySpinner from "../components/overlay_spinner";
import SafeImage from "../components/safe_image";

import { productsServices } from "../services/products";
import styled from "styled-components";

const Img = styled(SafeImage)`
  max-height: 31.25rem;
  object-fit: contain;
  padding: 1.5rem;
  width: 100%;
`;

const Product = () => {
  const { id } = useParams();
  const { addItem } = useAddToCart();

  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState();

  const addToCart = () => { addItem(product); };

  useEffect(() => {
    (async () => {
      try {
        const data = await productsServices.getById(id);
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(false);
      }
    })();
  }, []);

  if (error) return <ErrorsPromp errors={[error]} />;

  return (
    <>
      <ProductSEO product={product} />
      <Container className="my-5">
        <OverlaySpinner className="flex-column" loaded={loaded}>
          {product &&
            <Row>
              <Col md={4} className="text-center">
                <Img image={product?.image} />
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
          }
        </OverlaySpinner>
      </Container>
    </>
  );
};

export default Product;