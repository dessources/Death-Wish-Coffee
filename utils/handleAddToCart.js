import React from "react";
import { addToCart } from "../redux/cart.slice";
import formatProductDescription from "../utils/formatProductDescription";

const handleAddToCart = ({ size, style, uid, price, sizes, name, main_image }) => {
  const cartPayload = {
    uid: uid,
    name: `${name} ${formatProductDescription(size, style)}`,
    main_image: main_image?.data?.attributes?.formats?.thumbnail?.url,
    price: sizes?.[size] || price,
  };
  return cartPayload;
};

export default handleAddToCart;
