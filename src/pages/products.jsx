import { useState, useEffect } from "react";
import { useAddToCart } from "../hooks/use_add_to_cart";
import { usePaginatedSearch } from "../hooks/use_paginated_search";

import { Container, Row } from "react-bootstrap";

import ErrorsPromp from "../components/error_promp";
import SearchBar from "../components/search_bar";
import OverlaySpinner from "../components/overlay_spinner";
import NotItems from "../components/not_items";
import ProductCard from "../components/product_card";
import Paginator from "../components/paginator";

import { productsServices } from "../services/products";

const Products = ({ title, category }) => {
  const { addItem } = useAddToCart();
  const { query, pagination, actions, init } = usePaginatedSearch(5);

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState();

  const { page, limit, totalPages } = pagination;

  useEffect(() => {
    setLoaded(true);
    setError(null);

    (async () => {
      try {
        const data = await productsServices.getBy(
          category, query, page, limit
        );

        if (data?.totalPages !== totalPages) {
          init.setTotalPages(data?.totalPages);
        }

        setProducts(data?.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(false);
      }
    })();
  }, [category, query, page, limit]);

  if (error) return <ErrorsPromp errors={[error]} />;

  return (
    <Container className="my-4">
      <h1>{title}</h1>

      <SearchBar query={query} loaded={loaded} onChange={actions.search} />

      <OverlaySpinner loaded={loaded}>
        {(!products || products?.length === 0) ? <NotItems /> :
          <Row className="w-100 g-3 mt-2">
            {products.map(product => (
              <ProductCard key={product.id} product={product} addItem={addItem} />
            ))}
          </Row>
        }
      </OverlaySpinner>

      {!loaded && <Paginator {...pagination} {...actions} />}

    </Container>
  );
};

export default Products;