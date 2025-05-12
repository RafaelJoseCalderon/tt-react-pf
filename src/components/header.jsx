import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import './Header.css'; // opcional

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 sticky-top shadow">
      <Container>
        <Navbar.Brand href="/">TiendaFerpecta</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/ofertas">Ofertas</Nav.Link>
            <Nav.Link href="/novedades">Novedades</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cuenta">Cuenta</Nav.Link>
            <Nav.Link href="/carrito">Carrito</Nav.Link>
            {/* <Nav.Link href="/cuenta"><FaUser className="me-1" /> Cuenta</Nav.Link> */}
            {/* <Nav.Link href="/carrito"><FaShoppingCart className="me-1" /> Carrito</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;