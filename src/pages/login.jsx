import { useState } from "react";
import { useAuth } from "../hooks/use_auth";

import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(name, password).then(({ error }) => {
      if (!error) {
        setName("");
        setPassword("");
      }

      setError(error);
    });
  };

  return (
    <Container className="login">
      <Card>
        <i className="icon bi bi-person"></i>
        <h2 className="mb-4 text-center">Iniciar sesión</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={name} required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" value={password} required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <div className="text-center">
            <Button variant="primary" type="submit">Entrar</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;