import { useProductsResources } from "../hooks/use_products_resourses";
import { useProductsActions } from "../hooks/use_products_actions";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Loading from "../components/loading";
import ErrorPromp from "../components/error_promp";
import ProductListAdmin from "../components/product_list_admin";

const ProductsAdmin = () => {
  const { products, loaded, error } = useProductsResources();
  const { remove } = useProductsActions();

  if (loaded) return <Loading />;
  if (error?.some(e => e !== null)) return <ErrorPromp errors={error} />;

  return (
    <Container className="my-5">
      <h2>Panel de Administración</h2>

      <Row><Col className="d-flex justify-content-end mb-2">
        <Link className="btn btn-primary" to="/admin/create">Nuevo</Link>
      </Col></Row>

      <Row><Col>
        <ProductListAdmin items={products} remove={(id) => { remove(id); }} />
      </Col></Row>

    </Container>
  );
};

export default ProductsAdmin;