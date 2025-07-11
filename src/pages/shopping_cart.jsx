import { useCart } from "../hooks/use_cart";

import { Container, Row, Col } from "react-bootstrap";
import { ShopingCartSEO } from "../pages_ceo";

import NotItems from "../components/not_items";
import CartList from "../components/cart_list";
import SummaryCart from "../components/cart_summary";
import SearchBar from "../components/search_bar";

const ShopingCart = () => {
  const { items, delItem, delAll, filtered, } = useCart();

  return (
    <>
      <ShopingCartSEO />
      <Container className="my-5">
        <h2 className="mb-4">Carrito de Compras</h2>

        <SearchBar query={filtered.query} onChange={filtered.search} />

        <Row className="mt-2">
          <Col md={8} className="cart-container">
            {(!filtered.items || items?.length === 0) ? <NotItems /> :
              <CartList items={filtered.items} remove={delItem} />
            }
          </Col>
          <Col md={4}>
            <SummaryCart items={items} removeAll={delAll} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopingCart;
