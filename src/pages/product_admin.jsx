import { useParams } from "react-router-dom";
import { useProductsResources } from "../hooks/use_products_resourses";
import { useProductsActions } from "../hooks/use_products_actions";

import { Container } from "react-bootstrap";
import { ProductAdminSEO } from "../pages_ceo";

import OverlaySpinner from "../components/overlay_spinner";
import ProductFormAdmin from "../components/product_form_admin";

const ProductAdmin = ({ mode, title }) => {
  const { categories, loaded } = useProductsResources();
  const { getById, create, update } = useProductsActions();
  const { id } = useParams();

  const product = getById(id);

  const handleSubmit = (data) => {
    if (mode === "create" && !id) {
      create(data);
    } else if (mode === "update" && id) {
      update({ ...data, id: parseInt(id, 10) });
    }
  };

  return (
    <>
      <ProductAdminSEO />
      <Container className="my-5">
        <h3 className="mb-3">{title} Producto</h3>

        <OverlaySpinner loaded={loaded}>
          <ProductFormAdmin
            mode={mode}
            values={product}
            valuesOptions={categories}
            handleSubmit={handleSubmit}
          />
        </OverlaySpinner>
      </Container>
    </>
  );
};

export default ProductAdmin;