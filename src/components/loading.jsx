import { Container, Row, Col, Spinner } from "react-bootstrap";

const Loading = ({ text = 'Cargando...' }) => {
  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row>
        <Col className="text-center">
          <Spinner animation="border" variant="primary" role="status" />
          <p className="fs-4 mb-4">{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
