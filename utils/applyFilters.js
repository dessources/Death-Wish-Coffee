export default function applyFilters(state, action) {
  if (!state) return;
  let quantityDisplayed = 0;
  const products = state.products;
  //si au moins un des filters est active
  if (action.filters.active) {
    const filteredProducts = products.map((product) => {
      for (let filter in action.filters) {
        //si le fitler est actif on filtre
        if (action.filters[filter].active) {
          // si la valeur de l'attribut en question de notre produit
          // est un tableau on verifie qu'au moins un des elements
          // du tableau fait parties de la liste de valeurs selectionées
          // par l'utilisateur pour ce filter.

          if (product[filter] instanceof Array) {
            if (!product[filter].some((item) => action.filters[filter][item])) {
              product.hidden = true;
              break;
            } else {
              product.hidden = false;
            }
          }
          // sinon si la valeur de l'attribut en qustion de notre produit
          // n'est pas selectionée par l'utilisateur pour ce filter
          // on met hidden:true
          else if (!action.filters[filter][product[filter]]) {
            product.hidden = true;
            break;
          } else {
            product.hidden = false;
          }
        }
      }

      if (!product.hidden) quantityDisplayed++;

      return product;
    });
    return { quantityDisplayed, products: filteredProducts };
  } else {
    //sinon on  map tout les produits et on reset hidden a false pour tous
    const filteredProducts = products.map((product) => ({ ...product, hidden: false }));
    quantityDisplayed = products.length;
    return { quantityDisplayed, products: filteredProducts };
  }
}
