import { Container, Card, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorsPromp = ({ errors }) => {
  return (
    <Container className="mt-5">
      <h2 className="text-center text-danger">
        Oops... ha ocurrido un error
      </h2>

      {errors && errors.map((error, index) => (error &&
        <Card key={index} className="border-danger my-2">
          <Card.Body className="d-flex flex-row">
            <div className="mx-1 fs-1 text-danger">{error.status}</div>
            <div className="mx-3 align-self-center">
              <div>{error.url}</div>
              <div>{error.message}</div>
            </div>
          </Card.Body>
        </Card>
      ))}

      <Stack gap={2} className="col-md-2 mx-auto">
        <Button as={Link} to="/" variant="primary">
          Volver al inicio
        </Button>
      </Stack>

    </Container>
  );
};

export default ErrorsPromp;
