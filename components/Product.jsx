import React from "react";
import { addToCart } from "../redux/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import handleAddToCart from "../utils/handleAddToCart";
//components
import Link from "next/link";
import RatingStars from "../components/RatingStars";
import ImageVideoCover from "./ImageVideoCover";
import AddToCartForm from "./AddToCartForm";
import addToCartIcon from "../public/icons/add-to-cart.svg";

//styles
import {
  product,
  productHeader,
  producInfo,
  name,
  reviews,
  addToCartClass,
  price,
  hide,
} from "../styles/Shop.module.css";

export default function Product({ id, attributes }) {
  const [formVisible, setFormVisible] = React.useState(false);

  return (
    <div className={product}>
      <div className={productHeader}>
        <Link href={`/Products/${id}`}>
          <ImageVideoCover main_image={attributes.main_image} videoUrl={attributes.videoUrl} />
        </Link>
        <AddToCartForm
          styles={attributes.styles}
          sizes={attributes.sizes}
          uid={attributes.uid}
          name={attributes.name}
          price={attributes.price}
          main_image={attributes.main_image}
          onSubmit={handleAddToCart}
          formVisible={formVisible}
          setFormVisible={setFormVisible}
        />
        <div
          className={`${addToCartClass} ${formVisible && hide}`}
          onClick={() => {
            setFormVisible(true);
          }}
        >
          <img src={addToCartIcon.src} alt="" />
        </div>
      </div>
      <div className={producInfo}>
        <Link href={`/Products/${id}`}>
          <div className={name}>{attributes.name}</div>
        </Link>
        {attributes.reviews > 0 && (
          <div className={reviews}>
            <RatingStars rating={attributes.rating} />
            {attributes.reviews} reviews
          </div>
        )}
        <div className={price}>${attributes.price}</div>
      </div>
    </div>
  );
}
