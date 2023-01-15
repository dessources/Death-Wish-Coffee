import React from "react";
import axios from "axios";
import { coffeesQueryURL } from "../utils/queries";

export default function useCoffees() {
  const coffeesReducer = (state, action) => {
    switch (action.sortOrder) {
      case "price-ascending":
        return [...state.sort((a, b) => a.attributes.price - b.attributes.price)];

      case "price-descending":
        return [...state.sort((a, b) => b.attributes.price - a.attributes.price)];

      case "created-descending":
        return [...state.sort((a, b) => (a.attributes.createdAt < b.attributes.createdAt ? 1 : -1))];

      case "name-ascending":
        return [
          ...state.sort((a, b) => (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase() ? 1 : -1)),
        ];

      case "name-descending":
        return [
          ...state.sort((a, b) => (a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase() ? 1 : -1)),
        ];

      default:
        return action.payload || state;
    }
  };
  const [coffees, sortCoffees] = React.useReducer(coffeesReducer);
  const [sortOrder, setSortOrder] = React.useState("");

  React.useEffect(() => {
    sortCoffees({ sortOrder: sortOrder });
  }, [sortOrder]);

  React.useEffect(() => {
    console.log("loading...");
    axios.get(coffeesQueryURL).then((data) => {
      console.log("request finished");
      sortCoffees({ sortOrder: sortOrder, payload: data.data.data });
    });
  }, []);

  return { coffees, setSortOrder };
}
