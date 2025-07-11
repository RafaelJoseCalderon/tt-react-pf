import { useState } from "react";
import { useProductsResources } from "../hooks/use_products_resourses";
import { useProductsActions } from "../hooks/use_products_actions";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ProductsAdminSEO } from "../pages_ceo";

import ErrorsPromp from "../components/error_promp";
import SearchBar from "../components/search_bar";
import OverlaySpinner from "../components/overlay_spinner";
import ProductListAdmin from "../components/product_list_admin";
import ModalMessage from "../components/modal_Message";
import Paginator from "../components/paginator";

const ProductsAdmin = () => {
  const { products, loaded, errors, paginatior } = useProductsResources();
  const { query, pagination, actions } = paginatior;
  const { remove } = useProductsActions();

  const [confirm, setConfirm] = useState({ show: false, id: null });

  const handleOpen = (id) => {
    setConfirm({ show: true, id });
  };
  const handleClose = () => {
    setConfirm({ show: false, id: null });
  };
  const handleConfirm = () => {
    if (confirm.id !== null) remove(confirm.id);
  };

  if (errors?.some((e) => e !== null)) return <ErrorsPromp errors={errors} />;

  return (
    <>
      <ProductsAdminSEO />
      <Container className="my-5">
        <h2>Panel de Administración</h2>

        <SearchBar query={query} loaded={loaded} onChange={actions.search} />

        <Row>
          <Col className="d-flex justify-content-end mb-2">
            <Link className="btn btn-primary" to="/admin/create">
              Nuevo
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <OverlaySpinner loaded={loaded}>
              <ProductListAdmin items={products} remove={handleOpen} />
            </OverlaySpinner>
          </Col>
        </Row>

        {!loaded && <Paginator {...pagination} {...actions} />}

        <ModalMessage show={confirm.show} onClose={handleClose} onConfirm={handleConfirm} />
      </Container>
    </>
  );
};

export default ProductsAdmin;
