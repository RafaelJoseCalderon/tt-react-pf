import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
      Formulario enviado:
      Nombre: ${name}
      Email: ${email}
      Asunto: ${subject}
      Mensaje: ${message}`
    );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    setSubmitted(true);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col>
          <h2 className="mb-4 text-center">Contáctanos</h2>
          {submitted && <Alert variant="success">¡Mensaje enviado con éxito!</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Enviar mensaje
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;