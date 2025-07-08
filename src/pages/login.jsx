import { useAuth } from "../hooks/use_auth";
import { useForm } from "../hooks/use_form";

import { Container, Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

import { BsPerson } from 'react-icons/bs';
import styled from "styled-components";

const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64vh;

  .card {
    margin: auto;
    padding: 1rem;
    width: 25rem;
  }

  @media (max-width:575px) {
    .card {
      width: 100%;
    }

    .card {
      border: none;
    }
  }
`;

const Icon = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0.75rem auto;
  font-size: 2.5rem;

  background-color: var(--bd-background-color);
  color: var(--bd-color);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 3px solid #8d9092;
`;

const Login = () => {
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
        toast.error(error.message);
      }
    }
  };

  return (
    <LoginContainer className="login">
      <Card>
        <Icon><BsPerson /></Icon>

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
    </LoginContainer>
  );
};

export default Login;