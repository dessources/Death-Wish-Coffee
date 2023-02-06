import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { open: false, products: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.products.find(
        ({ uid, style, size }) =>
          uid === action.payload.uid && style === action.payload.style && size === action.payload.size
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.uid === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.uid === action.payload);
      if (item.quantity === 1) {
        const index = state.products.findIndex((item) => item.uid === action.payload);
        state.products.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex((item) => item.uid === action.payload);
      state.products.splice(index, 1);
    },
    showCart(state, action) {
      state.open = action.payload ? true : false;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, showCart, setCartRight } =
  cartSlice.actions;
