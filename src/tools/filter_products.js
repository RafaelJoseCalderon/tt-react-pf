/**
 * Filters an array of products by title or description.
 *
 * @param {Array<Object>} products - The array of product objects. Each object should have 'title' and 'description' properties.
 * @param {string} searchTerm - The term to search for within the title or description.
 * @param {string} [searchBy='all'] - Optional. Specifies which field to search: 'title', 'description', or 'all' (default).
 * @returns {Array<Object>} A new array containing the filtered products.
 */
export const filterProducts = (products, searchTerm) => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return products.filter(product => {
    const title = product.title ? product.title.toLowerCase() : '';
    return title.includes(lowerCaseSearchTerm);
  });
};