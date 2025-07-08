import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ICONOS
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterSC = styled.footer`
  background-color: var(--bd-background-color);
  color: var(--bd-color);

  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;

  a {
    color: var(--bd-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline; /* opcional, para dar feedback */
    }
  }
`;

const Footer = () => {
  return (
    <FooterSC>
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>TiendaFerpecta</h5>
            <p>Tu tienda de confianza desde 2025.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h6>Navegación</h6>
            <ul className="list-unstyled">
              <li><Link to="/">Productos</Link></li>
              <li><Link to="/offers">Ofertas</Link></li>
              <li><Link to="/new-arrivals">Novedades</Link></li>
              <li><Link to="/about">Sobre nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Síguenos</h6>
            <div className="d-flex gap-3">

              <a href="#" ><BsFacebook /></a>
              <a href="#" ><BsInstagram /></a>
              <a href="#" ><BsTwitter /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-top border-dark mt-4" />
        <p className="text-center mb-0">&copy; 2025 TiendaFerpecta. Todos los derechos reservados.</p>
      </Container>
    </FooterSC>
  );
};

export default Footer;