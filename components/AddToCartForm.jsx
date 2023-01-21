import React from "react";

import addToCartIcon from "../public/images/add-to-cart.svg";
import WholeBean from "../components/WholeBean";
import Ground from "../components/GroundIcon";
import CloseIcon from "@mui/icons-material/Clear";

//styles
import { addToCartForm, selectedLabel, addToCart, show, hide, closeAddToCart } from "../styles/Shop.module.css";

export default function AddToCartForm({ styles, sizes, uid }) {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedStyle, setselectedStyle] = React.useState("");
  const [addToCartFormVisibility, setAddToCartFormVisibility] = React.useState(false);
  const labelIcons = { ground: <Ground />, "whole bean": <WholeBean />, 1: "" };
  return (
    <>
      <div className={`${addToCartForm} ${addToCartFormVisibility && show}`}>
        <form action="">
          <div>
            {styles?.map((style, i) => (
              <React.Fragment key={i}>
                <input
                  type="radio"
                  id={uid + style}
                  name="style"
                  value={style}
                  onChange={(e) => setselectedStyle(style)}
                />
                <label htmlFor={uid + style} className={selectedStyle === style ? selectedLabel : ""}>
                  {labelIcons[style]}
                  <span>{style}</span>
                </label>
              </React.Fragment>
            ))}
          </div>
          <div>
            {sizes &&
              Object.keys(sizes).map((size, i) => (
                <React.Fragment key={i}>
                  <input
                    type="radio"
                    id={uid + size}
                    name="size"
                    value={size}
                    onChange={() => setSelectedSize(size)}
                  />
                  <label htmlFor={uid + size} className={selectedSize === size ? selectedLabel : ""}>
                    {labelIcons[size]}
                    <span>{size.replace("_", " ")}</span>
                  </label>
                </React.Fragment>
              ))}
          </div>
        </form>
        <input type="submit" value="Add to cart" />
      </div>
      <img
        src={addToCartIcon.src}
        className={`${addToCart} ${addToCartFormVisibility && hide}`}
        alt=""
        onClick={() => setAddToCartFormVisibility(true)}
      />
      <CloseIcon
        className={`${closeAddToCart} ${addToCartFormVisibility && show}`}
        onClick={() => setAddToCartFormVisibility(false)}
      />
    </>
  );
}
