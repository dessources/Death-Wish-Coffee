export default function applyFilters(products, action) {
  if (!products) return;
  let quantityDisplayed = 0;
  if (action.filters.active) {
    const filteredProducts = products.map((product) => {
      for (let key in action.filters) {
        if (action.filters[key].active) {
          // si la valeur de l'attribut en question de notre produit
          // est un tableau on verifie qu'au moins un des elements
          // du tableau fait parties de la liste de valeurs selectionées
          // par l'utilisateur pour ce filter.

          if (product.attributes[key] instanceof Array) {
            if (!product.attributes[key].some((item) => action.filters[key][item])) {
              console.log(
                `Aucune des valeurs de ${product.attributes.name}.${key}(${product.attributes[key]}) ne correspond pas aux filters on set hidden:true...`
              );
              product.hidden = true;
              break;
            } else {
              console.log(
                `Une valeur de ${product.attributes.name}.${key}(${product.attributes[key]}) se trouve dans la propriete ${key} des filters`
              );
              product.hidden = false;
            }
          }
          // sinon si la valeur de l'attribut en qustion de notre produit
          // ne fait pas partie de la liste de valeurs selectionées
          // par l'utilisateur pour ce filter et que l'attribut est définie
          // on ajoute hidden:true
          else if (!action.filters[key][product.attributes[key]]) {
            console.log(
              `${product.attributes.name}.${key}(${product.attributes[key]}) ne correspond pas aux filters on set hidden:true...`
            );
            console.info(action.filters[key]);
            product.hidden = true;
            break;
          } else {
            console.log(
              `Une valeur de ${product.attributes.name}.${key}(${product.attributes[key]}) se trouve dans la propriete ${key} des filters`
            );
            product.hidden = false;
          }
        }
      }

      if (!product.hidden) quantityDisplayed++;

      return product;
    });
    return { quantityDisplayed, products: filteredProducts };
  } else {
    const filteredProducts = products.map((product) => ({ ...product, hidden: false }));
    quantityDisplayed = products.length;
    return { quantityDisplayed, products: filteredProducts };
  }
}
