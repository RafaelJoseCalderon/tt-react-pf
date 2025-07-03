import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// const useDebouncedCallback = (callback, delay) => {
//   const timerRef = useRef(null);

//   const debouncedFn = useCallback((...args) => {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//     }

//     timerRef.current = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   }, [callback, delay]);

//   useEffect(() => {
//     return () => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current);
//       }
//     };
//   }, []);

//   return debouncedFn;
// };

export const usePaginatedSearch = (defaultPage, defaultLimit) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const page = parseInt(searchParams.get('page')) || defaultPage;
  const limit = parseInt(searchParams.get('limit')) || defaultLimit;

  const [totalPages, setTotalPages] = useState(null);

  const updateParams = (params) => {
    const updated = { query, page, limit, ...params };

    Object.keys(updated).forEach(
      (key) => updated[key] == null && delete updated[key]
    );

    setSearchParams(updated, { replace: true });
  };

  const search = (value) => {
    updateParams({ query: value, page: 1 });
  };

  const goToPage = (value) => {
    updateParams({ page: value });
  };

  const changeLimit = (value) => {
    updateParams({ limit: value, page: 1 });
  };

  return {
    query,
    pagination: { page, limit, totalPages },
    actions: { search, goToPage, changeLimit },
    init: { setTotalPages }
  };
};
