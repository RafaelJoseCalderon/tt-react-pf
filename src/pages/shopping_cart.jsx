import { CartContext } from "../context/cart_context";
import { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import CartList from "../components/cart_list";
import SummaryCart from "../components/cart_summary";

const ShopingCart = () => {
  const { items, delItem } = useContext(CartContext);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <Row>
        <Col md={8} className="cart-container">
          <CartList items={items} remove={delItem} />
        </Col>
        <Col md={4}>
          <SummaryCart items={items} remove={delItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default ShopingCart;
