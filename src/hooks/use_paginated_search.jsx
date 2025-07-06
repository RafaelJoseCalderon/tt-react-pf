import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const usePaginatedSearch = (defaultLimit) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || defaultLimit;

  const [totalPages, setTotalPages] = useState(null);

  const search = (value) => {
    const update = {};

    if (value && value !== "") {
      update.query = value;
    }

    setSearchParams(update, { replace: true });
  };

  const goToPage = (value) => {
    const update = {};

    if (query && query !== "") {
      update.query = query;
    }

    if (value && limit && !(value === 1 && limit === defaultLimit)) {
      update.page = value;
      update.limit = limit;
    }

    setSearchParams(update, { replace: true });
  };

  const changeLimit = (value) => {
    const update = {};

    if (query && query !== "") {
      update.query = query;
    }

    if (value && value !== defaultLimit) {
      update.page = 1;
      update.limit = value;
    }

    setSearchParams(update, { replace: true });
  };

  return {
    query,
    pagination: { page, limit, totalPages },
    actions: { search, goToPage, changeLimit },
    init: { setTotalPages }
  };
};
