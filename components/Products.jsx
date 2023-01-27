import React from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Product from "./Product";

//styles
import { productSection } from "../styles/Shop.module.css";

export default function Products({ data }) {
  return (
    <div className={productSection}>
      {data?.products?.map(({ id, attributes, hidden }) => {
        if (!hidden) {
          return <Product key={id} id={id} attributes={attributes} />;
        } else return "";
      })}
    </div>
  );
}
