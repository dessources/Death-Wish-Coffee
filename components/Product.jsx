import React from "react";

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
  stars,
  reviews,
  addToCartClass,
  price,
  hide,
} from "../styles/Shop.module.css";

export default function Product({ coffee }) {
  const [formVisible, setFormVisible] = React.useState(false);

  return (
    <div className={product}>
      <div className={productHeader}>
        <Link href={`/Products/${coffee?.uid}`}>
          <ImageVideoCover image={coffee?.mediumImage} videoUrl={coffee?.videoUrl} />
        </Link>
        <AddToCartForm
          styles={coffee?.styles}
          sizes={coffee?.sizes}
          uid={coffee?.uid}
          name={coffee?.name}
          price={coffee?.price}
          image={coffee?.thumbnailImage}
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
        <Link href={`/Products/${coffee?.uid}`}>
          <div className={name}>{coffee?.name}</div>
        </Link>
        {coffee?.reviews > 0 && (
          <div className={reviews}>
            <RatingStars className={stars} rating={coffee?.rating} />
            {coffee?.reviews} reviews
          </div>
        )}
        <div className={price}>${coffee?.price}</div>
      </div>
    </div>
  );
}
