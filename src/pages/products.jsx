import { useState, useEffect } from "react";
import { useCart } from "../hooks/use_cart";
import { usePaginatedSearch } from "../hooks/use_paginated_search";

import { Container } from "react-bootstrap";

import ErrorsPromp from "../components/error_promp";
import SearchBar from "../components/search_bar";
import OverlaySpinner from "../components/overlay_spinner";
import NotItems from "../components/not_items";
import ProductCard from "../components/product_card";
import Paginator from "../components/paginator";

import { productsServices } from "../services/products";

const Products = ({ title, category }) => {
  const { addItem } = useCart();
  const { query, pagination, actions, init } = usePaginatedSearch(1, 5);

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState();

  const { page, limit, totalPages } = pagination;

  useEffect(() => {
    const controller = new AbortController();
    if (!loaded) setLoaded(true);

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

    return () => { controller.abort(); };
  }, [category, query, page, limit]);

  if (error) return <ErrorsPromp errors={[error]} />;

  return (
    <Container className="d-flex flex-column my-4">
      <h1>{title}</h1>

      <SearchBar query={query} loaded={loaded} onChange={actions.search} />

      <OverlaySpinner loaded={loaded}>
        {(!products || products?.length === 0) ? <NotItems /> :
          <div className="box-container w-100">
            {products.map(product => (
              <ProductCard key={product.id} product={product} addItem={addItem} />
            ))}
          </div>
        }
      </OverlaySpinner>

      {!loaded && <Paginator {...pagination} {...actions} />}

    </Container>
  );
};

export default Products;