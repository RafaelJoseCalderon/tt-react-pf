import { Card, Button } from 'react-bootstrap';

const SummaryCart = ({ items }) => {
  const summation = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = (summation / 100).toFixed(2);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Resumen</Card.Title>
        <Card.Text>Total: <strong>${total}</strong></Card.Text>
        <Button variant="success" disabled={items.length === 0}>
          Finalizar Compra
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SummaryCart;