import { useState, useEffect } from "react";
import { useCart } from "../hooks/use_cart";
import { useAuth } from "../hooks/use_auth";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import styled from "styled-components";

// ICONOS
import {
  BsCart, BsBasket, BsTag, BsStars, BsPeople,
  BsEnvelope, BsPerson, BsBoxArrowRight, BsPersonGear
} from "react-icons/bs";

const Icon = styled.div`
  position: relative !important;

  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  color: var(--bd-color);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 2px solid #8d9092;
  font-size: 1.25rem;
`;

const Header = () => {
  const { items } = useCart();
  const { logout, isAuth, isAdmin } = useAuth();

  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => { setExpanded(false); }, [location.pathname]);

  return (<>
    <header className="fixed-top">
      <Navbar expanded={expanded} expand="lg" className="py-3 shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src="/logo_black.svg" alt="TP" />
          </Navbar.Brand>

          {!isAdmin &&
            <Nav.Link as={Link} to="/cart" className="button-cart">
              <Icon>
                <BsCart />
                <Badge>{items.length}</Badge>
              </Icon>
            </Nav.Link>
          }

          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                <Icon className="d-lg-none"><BsBasket /></Icon>
                <span className="mx-2">Productos</span>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/offers">
                <Icon className="d-lg-none"><BsTag /></Icon>
                <span className="mx-2">Ofertas</span>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/new-arrivals">
                <Icon className="d-lg-none"><BsStars /></Icon>
                <span className="mx-2">Novedades</span>
              </Nav.Link>

              {!isAdmin &&
                <>
                  <Nav.Link as={NavLink} to="/about">
                    <Icon className="d-lg-none"><BsPeople /></Icon>
                    <span className="mx-2">Sobre nosotros</span>
                  </Nav.Link>

                  <Nav.Link as={NavLink} to="/contact">
                    <Icon className="d-lg-none"><BsEnvelope /></Icon>
                    <span className="mx-2">Contacto</span>
                  </Nav.Link>
                </>
              }

              {isAdmin &&
                <Nav.Link as={NavLink} to="/admin">
                  <Icon className="d-lg-none"><BsPersonGear /></Icon>
                  <span className="mx-2">Admin</span>
                </Nav.Link>
              }
            </Nav>

            <Nav className="me-1">
              {isAuth ?
                <Nav.Link onClick={logout} className="button-user">
                  <Icon><BsBoxArrowRight /></Icon>
                </Nav.Link>
                :
                <Nav.Link as={Link} to="/login" className="button-user">
                  <Icon><BsPerson /></Icon>
                  <span className="mx-2 d-lg-none">Iniciar sesión</span>
                </Nav.Link>
              }
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer style={{ marginLeft: "auto", position: "relative" }} />
    </header>
    <div style={{ height: "var(--navbar-space)" }}></div>
  </>
  );
};

export default Header;
