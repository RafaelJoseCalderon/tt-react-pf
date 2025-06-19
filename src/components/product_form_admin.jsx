import { useForm } from "../hooks/use_form";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { ControlSelect } from "./inputs";

const ProductFormAdmin = ({ mode, values, valuesOptions, handleSubmit }) => {
  const form = useForm({
    initialValues: {
      title: values?.title || "",
      price: values?.price || 0.0,
      description: values?.description || "",
      category: values?.category || "",
      image: values?.image || "",
    },
    rules: {
      title: (value) => !value.trim(),
      price: (value) => !value || isNaN(Number(value)) || Number(value) <= 0,
      description: (value) => !value.trim() || value?.length < 10,
      category: (value) => !value.trim(),
    }
  });

  const handleChange = ({ target: { name, value } }) => {
    form.handleChange({ name, value });
  };

  const handleBlur = ({ target: { name, value } }) => {
    form.handleBlur({ name, value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (form.isValid()) {
      handleSubmit(form.values);
      form.reset();
    };
  };

  return (
    <Container className="my-1">
      <Row className="justify-content-md-center">
        <Col md={4} className="pt-3">
          <Card className="my-3">
            {values?.image ?
              <Card.Img variant="top" src={values?.image} alt="image" />
              :
              <Card.Img variant="top" src="/not_found_img.svg" alt="not_found_img" />
            }
          </Card>
        </Col>

        <Col md={8}>
          <Form onSubmit={onSubmit} noValidate>
            <fieldset disabled={mode === "view"}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={form.values?.title}
                  isInvalid={form.errors?.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  El nombre del producto es obligatorio
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={form.values?.price}
                  isInvalid={form.errors?.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  step="1.00"
                  min="0"
                />
                <Form.Control.Feedback type="invalid">
                  El precio debe ser un numero valido mayor a cero
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={form.values?.description}
                  isInvalid={form.errors?.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  La descripcion debe tener al menos 10 caracteres
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Categoría</Form.Label>
                <ControlSelect
                  name="category"
                  options={valuesOptions}
                  value={form.values?.category}
                  isInvalid={form.errors?.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  La categoria del producto es obligatoria
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Url de Imagen</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={form.values?.image}
                  isInvalid={form.errors?.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  La imagen debe ser 'jpeg' o 'png' y menor a 500KB
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-end mb-2">
                <Button variant="primary" type="submit">Guardar</Button>
              </div>

            </fieldset>
          </Form>
        </Col>

      </Row>
    </Container>
  );
};

export default ProductFormAdmin;