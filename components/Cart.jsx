import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cart.slice";
import getStripe from "../lib/getStripe";
import axios from "axios";
import {
  productModal,
  numberQuantity,
  imgModal,
  infoProduct,
  titleRemove,
  btnCheckout,
  scroll,
  modalTriangle,
} from "../styles/Cart.module.css";
import { showCart } from "../redux/cart.slice";

const style = {
  position: "absolute",
  top: "48%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "#201e1d",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "&::before": {
    content: `""`,
    borderStyle: "solid",
    borderWidth: "10px 15px 10px 0",
    borderColor: "transparent #201e1d transparent transparent",
    position: "absolute",
    left: "82%",
    top: "-17px",
    transform: "rotate(90deg)",
  },
};

export default function BasicModal() {
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const res = await axios.post("/api/stripe", cart.products);
    console.log(res.data);
    await stripe.redirectToCheckout({ sessionId: res.data.id });
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.products.reduce((accumulator, item) => accumulator + item.quantity * item?.price, 0);
  };

  const handleOpen = () => dispatch(showCart(true));
  const handleClose = () => dispatch(showCart(false));

  return (
    <div>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu">
        <ShoppingCartIcon onClick={handleOpen} />
      </IconButton>
      <Modal
        open={cart.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={modalTriangle}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography color="gray" fontWeight="bold" id="modal-modal-title" variant="h6" component="h2">
              ALL YOUR STUFF
            </Typography>
            <CloseIcon onClick={handleClose} />
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
                          <img src={item?.main_image} alt="" />
                        </div>
                        <div className={infoProduct}>
                          <div className={titleRemove}>
                            <h4>{item?.name}</h4>
                            <CloseIcon
                              onClick={() => dispatch(removeFromCart(item?.uid))}
                              style={{
                                height: "25px",
                                marginTop: "15px",
                                marginLeft: "50px",
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
    </div>
  );
}
