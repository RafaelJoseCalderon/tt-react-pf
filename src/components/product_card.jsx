import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="shadow-sm box">
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-auto">{product.title}</Card.Title>
        <Card.Text className="mt-3"><strong>Precio:</strong> ${product.price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary">Más detalles</Button>
          <Button variant="success">Agregar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;