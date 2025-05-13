import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import "./Header.css"; // opcional

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 sticky-top shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">TiendaFerpecta</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Productos</Nav.Link>
            <Nav.Link as={Link} to="/offers">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/new-arrivals">Novedades</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cuenta">Cuenta</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
            {/* <Nav.Link as={Link} to="/cuenta"><FaUser className="me-1" /> Cuenta</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/carrito"><FaShoppingCart className="me-1" /> Carrito</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;