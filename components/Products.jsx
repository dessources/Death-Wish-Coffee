import React from "react";
import Link from "next/link";
import RatingStars from "../components/RatingStars";
import ImageVideoCover from "./ImageVideoCover";
import AddToCartForm from "./AddToCartForm";
//styles
import { productSection, product, name, reviews, price } from "../styles/Shop.module.css";

export default function Products({ data }) {
  return (
    <div className={productSection}>
      {data?.products?.map(({ id, attributes, hidden }) => {
        if (!hidden) {
          return (
            <div key={id} className={product}>
             
               <Link href={`/Products/${id}`}>
                <ImageVideoCover main_image={attributes.main_image} videoUrl={attributes.videoUrl} />
              </Link>
        
              <Link href={`/Products/${id}`}>
                <div className={name}>{attributes.name.toLowerCase()}</div>
              </Link>
              {attributes.reviews > 0 && (
                <div className={reviews}>
                  <RatingStars rating={attributes.rating} />
                  {attributes.reviews} reviews
                </div>
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
