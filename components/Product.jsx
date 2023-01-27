import React from "react";
import { addToCart } from "../redux/cart.slice";
import { useDispatch, useSelector } from "react-redux";

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
//formaters
import formatProductDescription from "../utils/formatProductDescription";

export default function Product({ id, attributes }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  const [formVisible, setFormVisible] = React.useState(false);

  const handleAddToCart = ({ size, style, uid, price }) => {
    console.log("the state is before adding the produtc :");
    console.info(state);
    const cartPayload = {
      uid: uid,
      name: `${attributes.name} ${formatProductDescription(size, style)}`,
      main_image: attributes.main_image,
      price: price || attributes.price,
    };
    dispatch(addToCart(cartPayload));
  };
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
          <div className={name}>{attributes.name.toLowerCase()}</div>
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
