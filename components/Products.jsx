import React from "react";

//components
import Product from "./Product";
//styles
import { productSection, product, name, reviews, price } from "../styles/Shop.module.css";
import handleAddToCart from "../utils/handleAddToCart.js";

export default function Products({ data }) {
  return (
    <div className={productSection}>
      {data?.products?.map((product) => {
        if (!product.hidden) {
          return <Product key={product.uid} coffee={product} />;
        } else return "";
      })}
    </div>
  );
}
