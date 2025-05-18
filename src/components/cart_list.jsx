import { Card, Button } from 'react-bootstrap';

const CartList = ({ items, remove }) => {
  return (<>
    {items.map(item =>
      <Card key={item.id} className="cart">
        <Card.Img variant="left" src={item.image} />

        <Card.Body>
          <Card.Text>{item.title}</Card.Text>
          <Card.Text>${((item.price * item.quantity) / 100).toFixed(2)}</Card.Text>
        </Card.Body>

        <Button variant="danger" onClick={() => remove(item.id)}>
          <i className="bi bi-trash"></i>
        </Button>
      </Card>
    )}
  </>);
};

export default CartList;