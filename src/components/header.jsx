import { useState, useEffect } from "react";
import { useCart } from "../hooks/use_cart";
import { useAuth } from "../hooks/use_auth";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = ({ children }) => {
  const { items } = useCart();
  const { logout, isAuth } = useAuth();

  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => { setExpanded(false); }, [location.pathname]);

  return (
    <header>
      <Navbar fixed="top" expanded={expanded} expand="lg" className="py-3 shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src="/logo_black.svg" alt="" />
          </Navbar.Brand>

          <Nav.Link as={Link} to="/cart" className="shoping-cart">
            <i className="icon bi bi-cart2">
              <Badge className="badge-cart">{items.length}</Badge>
            </i>
          </Nav.Link>

          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                <i className="d-lg-none icon bi bi-basket"></i>
                <span className="mx-2">Productos</span>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/offers">
                <i className="d-lg-none icon bi bi-tag"></i>
                <span className="mx-2">Ofertas</span>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/new-arrivals">
                <i className="d-lg-none icon bi bi-stars"></i>
                <span className="mx-2">Novedades</span>
              </Nav.Link>

              {!isAuth &&
                <>
                  <Nav.Link as={NavLink} to="/about">
                    <i className="d-lg-none icon bi bi-people"></i>
                    <span className="mx-2">Sobre nosotros</span>
                  </Nav.Link>

                  <Nav.Link as={NavLink} to="/contact">
                    <i className="d-lg-none icon bi bi-envelope"></i>
                    <span className="mx-2">Contacto</span>
                  </Nav.Link>
                </>
              }

              {isAuth &&
                <Nav.Link as={NavLink} to="/admin">
                  <i className="d-lg-none icon bi bi-person-gear"></i>
                  <span className="mx-2">Admin</span>
                </Nav.Link>
              }
            </Nav>

            <Nav>
              {isAuth ?
                <Nav.Link onClick={logout}>
                  <i className="icon bi bi-box-arrow-right"></i>
                </Nav.Link>
                :
                <Nav.Link as={Link} to="/login" className="user-buttom">
                  <i className="icon bi bi-person"></i>
                  <span className="d-lg-none mx-2">Iniciar sesión</span>
                </Nav.Link>
              }
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="under-heading"></div>
      <>{children}</>
    </header>
  );
};

export default Header;