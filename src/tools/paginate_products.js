/**
 * Paginates an array of products.
 *
 * @param {Array<Object>} products - The array of product objects to paginate.
 * @param {string|number} page - The current page number (1-based). Can be a string or number.
 * @param {string|number} limit - The maximum number of items per page. Can be a string or number.
 * @returns {Object} An object containing the paginated products and pagination metadata.
 * - products: Array<Object> - The products for the current page.
 * - page: number - The current page number.
 * - limit: number - The number of items per page.
 * - totalPages: number - The total number of available pages.
 * - totalItems: number - The total number of items in the original array.
 */
export const paginateProducts = (products, page = 1, limit = 5) => {
  const currentPage = parseInt(page, 10);
  const itemsPerPage = parseInt(limit, 10);

  if (isNaN(currentPage) || currentPage < 1) {
    throw new Error('Page must be a positive number.');
  }
  if (isNaN(itemsPerPage) || itemsPerPage < 1) {
    throw new Error('Limit must be a positive number.');
  }

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const paginatedProducts = products.slice(startIndex, endIndex);

  return {
    products: paginatedProducts,
    page: currentPage,
    limit: itemsPerPage,
    totalPages: totalPages,
    totalItems: totalItems,
  };
};