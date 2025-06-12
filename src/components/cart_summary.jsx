import { Card, Button } from "react-bootstrap";

const SummaryCart = ({ items, removeAll }) => {
  const summation = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = (summation / 100).toFixed(2);

  const buy = () => {
    removeAll();
    alert("Compra realizada");
  };

  return (
    <Card className="summary-cart">
      <Card.Body>
        <Card.Title>Resumen</Card.Title>
        <Card.Text>Total: <strong>${total}</strong></Card.Text>
        <Button variant="success" onClick={buy} disabled={items.length === 0}>
          Finalizar Compra
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SummaryCart;