import { useNavigate } from "react-router-dom";
import { Col, Card, Button, Stack } from "react-bootstrap";

import SafeImage from "./safe_image";
import styled from "styled-components";

const CardImg = styled(Card.Img)`
  height: 14.5rem;
  padding: 1.5rem;
  object-fit: contain;
`;

const CardProd = styled(Card)`
  box-shadow: 0 .25rem .25rem rgba(0, 0, 0, .15);

  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  transition: transform 0.2s;
  transition-timing-function: linear;

  &:hover {
    -webkit-transform: scale(1.025);
    -ms-transform: scale(1.025);
    transform: scale(1.025);
  }
`;

const JustifiedStack = styled(Stack)`
  justify-content: space-between;
`;

const ProductCard = ({ product, addItem }) => {
  const navigate = useNavigate();
  const { id } = product;

  const moreDetails = () => { navigate(`/product/${id}`); };
  const addToCart = () => { addItem(product); };

  return (
    <Col xs={12} md={6} lg={4}>
      <CardProd className="h-100 d-flex flex-column">
        <CardImg as={SafeImage} variant="top" image={product?.image} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-auto">{product.title}</Card.Title>
          <Card.Text className="mt-3"><strong>Precio:</strong> ${product.price}</Card.Text>
          <JustifiedStack direction="horizontal" gap={3}>
            <Button onClick={moreDetails} variant="primary">Más detalles</Button>
            <Button onClick={addToCart} variant="success">Agregar</Button>
          </JustifiedStack>
        </Card.Body>
      </CardProd>
    </Col>
  );
};

export default ProductCard;