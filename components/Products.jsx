import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import RatingStars from "../components/RatingStars";
import ImageVideoCover from "./ImageVideoCover";
import AddToCartForm from "./AddToCartForm";
//styles
import { productSection, product, name, reviews, price } from "../styles/Shop.module.css";
import { addToCart } from "../redux/cart.slice";

export default function Products({ data }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  const handleAddToCart = ({ size, style, uid, price }) => {
    console.log("the state is before adding the produtc :");
    console.info(state);
    const [product] = data.products.filter(({ attributes }) => attributes.uid === uid);

    const cartPayload = {
      uid: uid,
      name: product.attributes.name,
      style: style,
      size: size,
      main_image: product.attributes.main_image,
      price: price || product.attributes.price,
    };
    dispatch(addToCart(cartPayload));
  };
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

              <AddToCartForm
                styles={attributes.styles}
                sizes={attributes.sizes}
                uid={attributes.uid}
                onSubmit={handleAddToCart}
              />
            </div>
          );
        } else return "";
      })}
    </div>
  );
}
