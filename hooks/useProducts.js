import React from "react";
import axios from "axios";
import { coffeesQueryURL } from "../utils/queries";
import applyFilters from "../utils/applyFilters";
import sortProducts from "../utils/sortProducts";

export default function useProducts() {
  const productsReducer = (state, action) => {
    if (action.type === "sort") {
      return sortProducts(state, action);
    } else if (action.type === "filter") {
      // pour le fitltre, on retourne un tableau de touts les produits
      // avec certains produits ayant une propriété hidden indiquant
      // qu'ils ne doivent pas etre affiché
      return applyFilters(state, action);
    } else if (action.type === "initialize") {
      // return action.payload;
      return { products: action.payload.sort((a, b) => a.id - b.id), quantityDisplayed: action.payload.length };
    } else throw new Error("Action inconnue");
  };

  const filtersReducer = (state, button) => {
    if (button === "reset") {
      return {
        roast: { dark: false, medium: false, active: false },
        styles: { ground: false, "whole bean": false, active: false },
        format: { canned: false, bagged: false, "single serve": false, active: false },
        active: false,
      };
    }
    state[button.filter][button.value] = button.selected;
    state.active = false;
    for (const [key, value] of Object.entries(state)) {
      if (key !== "active") {
        value.active = false;
        for (const subKey in value) {
          if (value[subKey]) {
            value.active = true;
            state.active = true;
            break;
          }
        }
      }
    }

    return { ...state };
  };

  const [data, dispatch] = React.useReducer(productsReducer);

  const [filters, setFilters] = React.useReducer(filtersReducer, {
    roast: { dark: false, medium: false, active: false },
    styles: { ground: false, "whole bean": false, active: false },
    format: { canned: false, bagged: false, "single serve": false, active: false },
    active: false,
  });

  const [sortOrder, setSortOrder] = React.useState("");

  //requete api
  React.useEffect(() => {
    axios.get(coffeesQueryURL).then((data) => {
      dispatch({ type: "initialize", payload: data.data.data });
    });
  }, []);

  // rerender quan les filters changent
  React.useEffect(() => {
    dispatch({ type: "filter", filters });
  }, [filters]);

  // rerender quan l'ordre de triage change
  React.useEffect(() => {
    dispatch({ type: "sort", sortOrder });
  }, [sortOrder]);

  return { data, setSortOrder, sortOrder, setFilters, filters };
}
