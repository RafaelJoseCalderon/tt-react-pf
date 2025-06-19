import { Container } from "react-bootstrap";

const ProductAdmin = ({ mode, title }) => {
  return (
    <Container className="my-5">
      <h3 className="mb-3">{title} Producto</h3>
      <p>{mode}</p>
    </Container>
  );
};

export default ProductAdmin;