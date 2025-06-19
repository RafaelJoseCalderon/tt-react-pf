import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NotItems from "./not_items";

const ProductListAdmin = ({ items, remove }) => {
  return (<>
    {items && items.length > 0 ?
      items.map(item => (
        <Card key={item.id} className="admin-card">
          {item?.image ?
            <Card.Img variant="left" src={item.image} alt="image" />
            :
            <Card.Img variant="left" src="/not_found_img.svg" alt="not_found_img" />
          }

          <Card.Body>
            <Card.Text>{item.title}</Card.Text>
            <Card.Text>${item.price}</Card.Text>
          </Card.Body>

          <div className="buttons">
            <Link className="btn btn-info m-0 p-0" to={`/admin/details/${item.id}`}>
              <i className="bi bi-info-circle"></i>
            </Link>

            <Link className="btn btn-success m-0 p-0" to={`/admin/edit/${item.id}`}>
              <i className="bi bi-pencil"></i>
            </Link>

            <Button variant="danger" onClick={() => remove(item.id)}>
              <i className="bi bi-trash"></i>
            </Button>
          </div>
        </Card>
      )) :
      <NotItems />
    }
  </>);
};

export default ProductListAdmin;