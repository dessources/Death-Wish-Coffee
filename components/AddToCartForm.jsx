import React from "react";
import WholeBean from "../components/WholeBean";
import Ground from "../components/GroundIcon";
import CloseIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { addToCarte } from "../redux/cart.slice.js";
import Detail from '../pages/Products/[id].js'

//styles
import {
  addToCartContainer,
  addToCartForm,
  selectedLabel,
  show,
  closeAddToCart,
} from "../styles/Shop.module.css";

export default function AddToCartForm({ styles, sizes, uid, onSubmit, formVisible, setFormVisible }) {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedStyle, setselectedStyle] = React.useState("");

  const labelIcons = { ground: <Ground />, "whole bean": <WholeBean /> };

  const handleSubmit = async () => {
    if ((!selectedStyle && styles) || (!selectedSize && sizes)) {
      // TODO : aficher un modal qui affiche le message de l'alert
      alert("Veuillez indiquez votre choix pour tous les options disponibles");
    } else {
      onSubmit({
        size: selectedSize,
        style: selectedStyle,
        uid,
        price: sizes?.[selectedSize],
      });
    }
  };
  return (
    <>
      <div className={`${addToCartContainer} ${formVisible && show}`}>
        <div className={`${addToCartForm} ${formVisible && show}`}>
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
          <input type="submit" value="Add to cart" onClick={handleSubmit} />
        </div>

        <div className={`${closeAddToCart} ${formVisible && show}`} onClick={() => setFormVisible(false)}>
          <CloseIcon />
        </div>
      </div>
    </>
  );
}
