import { useState, useEffect } from "react";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import "./Header.css"; // opcional

const Header = ({ items }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <header>
      <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg" className="py-3 sticky-top shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">TF</Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Productos</Nav.Link>
              <Nav.Link as={Link} to="/offers">Ofertas</Nav.Link>
              <Nav.Link as={Link} to="/new-arrivals">Novedades</Nav.Link>
              <Nav.Link as={Link} to="/about">Sobre nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cuenta">Cuenta</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="position-relative">
                Carrito
                <Badge className="badge-cart">{items.length}</Badge>
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/cuenta"><FaUser className="me-1" /> Cuenta</Nav.Link> */}
              {/* <Nav.Link as={Link} to="/carrito"><FaShoppingCart className="me-1" /> Carrito</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;