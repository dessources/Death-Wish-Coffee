import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cart.slice";

import {
  productModal,
  numberQuantity,
  imgModal,
  infoProduct,
  titleRemove,
  btnCheckout,
  scroll,
  modalContainer,
} from "../styles/Cart.module.css";
import modalStyles from "../styles/modalStyles";
import { triangleRight } from "../styles/modalStyles";

import { showCart } from "../redux/cart.slice";
import formatProductDescription from "../utils/formatProductDescription";
import getRightFunc from "../utils/getRightFunc";

export default function Cart() {
  const handleCheckout = () => stripeCheckout("buy", cart.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(showCart(false));
  };
  const getTotalPrice = () => {
    return cart.products.reduce((accumulator, item) => accumulator + item.quantity * item?.price, 0);
  };
  const [cartRight, setCartRight] = React.useState(0);
  React.useEffect(() => {
    setCartRight(getRightFunc(triangleRight));
    window.onresize = () => {
      setCartRight(getRightFunc(triangleRight));
    };
    return () => (window.onresize = null);
  });
  const cartStyles = { ...modalStyles, right: cartRight };
  return (
    <Modal
      className={modalContainer}
      open={cart.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={cartStyles}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography color="gray" fontWeight="bold" id="modal-modal-title" variant="h6" component="h2">
            ALL YOUR STUFF
          </Typography>
          <CloseIcon onClick={handleClose} sx={{ color: "white", cursor: "pointer" }} />
        </Box>
        <hr />
        <div>
          {cart.products.length === 0 ? (
            <h1>Your Cart is Empty!</h1>
          ) : (
            <>
              <div className={scroll}>
                {cart.products.map((item) => (
                  <div>
                    <div className={productModal}>
                      <div className={imgModal}>
                        <img src={item?.image} alt="" />
                      </div>
                      <div className={infoProduct}>
                        <div className={titleRemove}>
                          <div>
                            <h4>{item?.name}</h4>
                            <p>{formatProductDescription(item?.size, item?.style, false)}</p>
                          </div>
                          <CloseIcon
                            onClick={() => dispatch(removeFromCart(item?.uid))}
                            style={{
                              height: "25px",

                              color: "red",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        <div className={numberQuantity}>
                          <button
                            onClick={() => dispatch(incrementQuantity(item?.uid))}
                            style={{
                              height: "25px",
                              backgroundColor: "#201e1d",
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginRight: "10px",
                            }}
                          >
                            +
                          </button>
                          {item.quantity}
                          <button
                            onClick={() => dispatch(decrementQuantity(item?.uid))}
                            style={{
                              height: "25px",
                              backgroundColor: "#201e1d",
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginLeft: "10px",
                            }}
                          >
                            -
                          </button>
                          <p>$ {(item.quantity * item?.price).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
              <h2>SubTotal: ${getTotalPrice().toFixed(2)}</h2>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                FREE DOMESTIC SHIPPING ON ORDERS OVER $50
              </p>
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                Shipping & taxes calculated at checkout
              </p>
            </>
          )}
          <button className={btnCheckout} onClick={handleCheckout}>
            CHECK OUT
          </button>
        </div>
      </Box>
    </Modal>
  );
}
