import React from "react";

import RatingStars from "../components/RatingStars";
import ImageVideoCover from "./ImageVideoCover";
import AddToCartForm from "./AddToCartForm";
//styles
import { products, product, name, reviews, price } from "../styles/Shop.module.css";

export default function Products({ data }) {
  return (
    <div className={products}>
      {data?.products?.map(({ id, attributes, hidden }) => {
        if (!hidden) {
          return (
            <div key={id} className={product}>
              <a href="#">
                <ImageVideoCover main_image={attributes.main_image} videoUrl={attributes.videoUrl} />
              </a>
              <a href="#">
                <div className={name}>{attributes.name.toLowerCase()}</div>
              </a>
              {attributes.reviews > 0 && (
                <a href="#">
                  <div className={reviews}>
                    <RatingStars rating={attributes.rating} />
                    {attributes.reviews} reviews
                  </div>
                </a>
              )}
              <div className={price}>${attributes.price}</div>

              <AddToCartForm styles={attributes.styles} sizes={attributes.sizes} uid={attributes.uid} />
            </div>
          );
        } else return "";
      })}
    </div>
  );
}
