import React from "react";

import addToCartIcon from "../public/icons/add-to-cart.svg";
import WholeBean from "../components/WholeBean";
import Ground from "../components/GroundIcon";
import CloseIcon from "@mui/icons-material/Clear";

//styles
import {
  addToCartContainer,
  addToCartForm,
  selectedLabel,
  addToCart,
  show,
  hide,
  closeAddToCart,
} from "../styles/Shop.module.css";
import getStripe from "../lib/getStripe";
import axios from "axios";

export default function AddToCartForm({ styles, sizes, uid }) {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedStyle, setselectedStyle] = React.useState("");
  const [visible, setvisible] = React.useState(false);
  const labelIcons = { ground: <Ground />, "whole bean": <WholeBean /> };

  const handleCheckout = async () => {
    if ((!selectedStyle && styles) || (!selectedSize && sizes)) {
      // TODO : aficher un modal qui affiche le message de l'alert
      alert("Veuillez indiquez votre choix pour tous les options disponibles");
    } else {
      let data = {
        name: "SomeCoffee",
        style: selectedStyle,
        size: selectedSize,
      };
      //ajouter le produit au panier
      // setCart([...cart, data])

      //demo chekcout with stripe
      // const stripe = await getStripe();
      // const res = await axios.post("/api/stripe", [data]);
      // console.log(res.data);
      // await stripe.redirectToCheckout({ sessionId: res.data.id });
    }
  };
  return (
    <>
      <div className={addToCartContainer}>
        <div className={`${addToCartForm} ${visible && show}`}>
          <form action="">
            <div>
              {styles?.map((style, i) => (
                <React.Fragment key={i}>
                  <input
                    type="radio"
                    id={uid + style}
                    name="style"
                    value={style}
                    onClick={(e) => setselectedStyle(style === selectedStyle ? "" : style)}
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
                      onClick={() => setSelectedSize(size === selectedSize ? "" : size)}
                    />
                    <label htmlFor={uid + size} className={selectedSize === size ? selectedLabel : ""}>
                      {labelIcons[size]}
                      <span>{size.replace("_", " ")}</span>
                    </label>
                  </React.Fragment>
                ))}
            </div>
          </form>
          <input type="submit" value="Add to cart" onClick={handleCheckout} />
        </div>
        <div
          className={`${addToCart} ${visible && hide}`}
          onClick={() => {
            console.log("clicked");
            setvisible(true);
          }}
        >
          <img src={addToCartIcon.src} alt="" />
        </div>
        <div className={`${closeAddToCart} ${visible && show}`} onClick={() => setvisible(false)}>
          <CloseIcon />
        </div>
      </div>
    </>
  );
}
