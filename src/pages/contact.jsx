import { useForm } from "../hooks/use_form";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ContactSEO } from "../pages_ceo";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    rules: {
      name: (value) => !value.trim(),
      email: (value) => !value.trim(),
      subject: (value) => !value.trim(),
      message: (value) => !value.trim() || value.length < 10,
    }
  });

  const handleChange = ({ target: { name, value } }) => {
    form.handleChange({ name, value });
  };

  const handleBlur = ({ target: { name, value } }) => {
    form.handleBlur({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.isValid()) {
      alert(`
      Formulario enviado:
      Nombre: ${form.values.name}
      Email: ${form.values.email}
      Asunto: ${form.values.subject}
      Mensaje: ${form.values.message}
      `);

      form.reset();
      toast.success("¡Mensaje enviado con éxito!");
    }
  };

  return (
    <>
      <ContactSEO />
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col>
            <h2 className="mb-4 text-center">Contáctanos</h2>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.values?.name}
                  isInvalid={form.errors?.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  Su nombre es obligatorio
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.values?.email}
                  isInvalid={form.errors?.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  Su correo electrónico es obligatorio
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Asunto</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={form.values?.subject}
                  isInvalid={form.errors?.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  El asunto es obligatorio
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  value={form.values?.message}
                  isInvalid={form.errors?.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  El mensaje debe tener al menos 10 caracteres
                </Form.Control.Feedback>
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
    </>
  );
};

export default Contact;