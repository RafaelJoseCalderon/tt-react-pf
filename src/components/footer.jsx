import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>TiendaFerpecta</h5>
            <p>Tu tienda de confianza desde 2025.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h6>Navegación</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">Sobre nosotros</a></li>
              <li><a href="/contact" className="text-light">Contacto</a></li>
              <li><a href="/faq" className="text-light">Preguntas frecuentes</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Síguenos</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">Facebook</a>
              <a href="#" className="text-light">Instagram</a>
              <a href="#" className="text-light">Twitter</a>
            </div>
          </Col>
        </Row>

        <hr className="border-top border-light mt-4" />
        <p className="text-center mb-0">&copy; 2025 TiendaFerpecta. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;