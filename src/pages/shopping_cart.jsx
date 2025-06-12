import { useCart } from "../hooks/use_cart";

import { Container, Row, Col } from "react-bootstrap";

import NotItems from "../components/Not_Items";
import CartList from "../components/cart_list";
import SummaryCart from "../components/cart_summary";

const ShopingCart = () => {
  const { items, delItem, delAll } = useCart();

  return (
    <Container className="my-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <Row>
        <Col md={8} className="cart-container">
          {items?.length <= 0 ? <NotItems /> :
            <CartList items={items} remove={delItem} />
          }
        </Col>
        <Col md={4}>
          <SummaryCart items={items} removeAll={delAll} />
        </Col>
      </Row>
    </Container>
  );
};

export default ShopingCart;
