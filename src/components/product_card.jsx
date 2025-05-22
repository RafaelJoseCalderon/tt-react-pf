import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addItem }) => {
  const navigate = useNavigate();
  const { id } = product;

  const moreDetails = () => { navigate(`/product/${id}`); };
  const addToCart = () => { addItem(product); };

  return (
    <Card className="shadow-sm box">
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-auto">{product.title}</Card.Title>
        <Card.Text className="mt-3"><strong>Precio:</strong> ${product.price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button onClick={moreDetails} variant="primary">Más detalles</Button>
          <Button onClick={addToCart} variant="success">Agregar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;