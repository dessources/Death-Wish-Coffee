import React from 'react'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import {container, body, header, image, buttons, btnCheckout} from '../styles/CartePage.module.css';
import getStripe from "../lib/getStripe";
import axios from "axios";
import Navbar from '../components/Navbar';


const CartPage = () => {

  const handleCheckout = async () => {
  
       const stripe = await getStripe();
       const res = await axios.post("/api/stripe", cart);
       console.log(res.data);
       await stripe.redirectToCheckout({ sessionId: res.data.id });
  }

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item?.price,
      0
    );
  };

  return (
    <div>
      <Navbar/>
    <div className={container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={body}>
              <div className={image}>
                <img src={item?.main_image?.data?.attributes?.formats?.thumbnail?.url} alt=""/>
              </div>
              <p>{item?.name}</p>
              <p>$ {item?.price}</p>
              <p>{item.quantity}</p>
              <div className={buttons}>
                <button onClick={() => dispatch(incrementQuantity(item?.uid))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item?.uid))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item?.uid))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item?.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>
      )}
      <button className={btnCheckout} onClick={handleCheckout}>
        CHECK OUT
      </button>
    </div>
    </div>
  );
};

export default CartPage;