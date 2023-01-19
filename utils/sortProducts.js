export default function sortProducts(state, action) {
  if (!state) return;
  let sortedProducts;
  let products = state.products;
  switch (action.sortOrder) {
    case "price-ascending":
      sortedProducts = [...products.sort((a, b) => a.attributes.price - b.attributes.price)];
      break;
    case "price-descending":
      sortedProducts = [...products.sort((a, b) => b.attributes.price - a.attributes.price)];
      break;
    case "created-descending":
      sortedProducts = [...products.sort((a, b) => (a.attributes.createdAt < b.attributes.createdAt ? 1 : -1))];
      break;
    case "name-ascending":
      sortedProducts = [
        ...products.sort((a, b) => (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase() ? 1 : -1)),
      ];
      break;
    case "name-descending":
      sortedProducts = [
        ...products.sort((a, b) => (a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase() ? 1 : -1)),
      ];
      break;

    default:
      sortedProducts = [...products.sort((a, b) => a.id - b.id)];
      break;
  }
  return { ...state, products: sortedProducts };
}
