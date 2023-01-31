export default function sortProducts(state, action) {
  if (!state) return;
  let sortedProducts;
  const products = state.products;
  switch (action.sortOrder) {
    case "price-ascending":
      sortedProducts = [...products.sort((a, b) => a.price - b.price)];
      break;
    case "price-descending":
      sortedProducts = [...products.sort((a, b) => b.price - a.price)];
      break;
    case "created-descending":
      sortedProducts = [...products.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))];
      break;
    case "name-ascending":
      sortedProducts = [...products.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))];
      break;
    case "name-descending":
      sortedProducts = [...products.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1))];
      break;

    default:
      sortedProducts = [...products.sort((a, b) => b.rating - a.rating)];
      break;
  }
  return { ...state, products: sortedProducts };
}
