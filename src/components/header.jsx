import { useState, useEffect } from "react";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = ({ items }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <header>
      <Navbar expanded={expanded} bg="light" variant="light" expand="lg" className="py-3 sticky-top shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src="/logo_black.svg" alt="" />
          </Navbar.Brand>

          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">

            <Nav className="me-auto">

              <Nav.Link as={Link} to="/">
                <i className="d-lg-none icon bi bi-basket"></i>
                <span className="mx-2">Productos</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/offers">
                <i className="d-lg-none icon bi bi-tag"></i>
                <span className="mx-2">Ofertas</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/new-arrivals">
                <i className="d-lg-none icon bi bi-stars"></i>
                <span className="mx-2">Novedades</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                <i className="d-lg-none icon bi bi-people"></i>
                <span className="mx-2">Sobre nosotros</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                <i className="d-lg-none icon bi bi-envelope"></i>
                <span className="mx-2">Contacto</span>
              </Nav.Link>

            </Nav>

            <Nav>

              <Nav.Link as={Link} to="/cuenta">
                <i className="icon bi bi-person"></i>
                <span className="d-lg-none mx-2">Iniciar sesión</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/cart">
                <i className="icon bi bi-cart2">
                  <Badge className="badge-cart">{items.length}</Badge>
                </i>
                <span className="d-lg-none mx-2">Carrito</span>

              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;