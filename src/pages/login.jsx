import { useAuth } from "../hooks/use_auth";
import { useForm } from "../hooks/use_form";
import { useNotification } from "../hooks/use_notification";

import { Container, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const { showNotification } = useNotification();

  const { login } = useAuth();
  const form = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    rules: {
      name: (value) => !value.trim(),
      password: (value) => !value.trim(),
    }
  });

  const handleChange = ({ target: { name, value } }) => {
    form.handleChange({ name, value });
  };

  const handleBlur = ({ target: { name, value } }) => {
    form.handleBlur({ name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.isValid()) {
      try {
        await login(form.values.name, form.values.password);
        form.reset();
      } catch (error) {
        showNotification({ type: "danger", message: error.message });
      }
    }
  };

  return (
    <Container className="login">
      <Card>
        <i className="icon bi bi-person"></i>
        <h2 className="mb-4 text-center">Iniciar sesión</h2>

        <Form onSubmit={handleSubmit}>
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
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.values?.password}
              isInvalid={form.errors?.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Form.Control.Feedback type="invalid">
              La contraseña es obligatorio
            </Form.Control.Feedback>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">Entrar</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;