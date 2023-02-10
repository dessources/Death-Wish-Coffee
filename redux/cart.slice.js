import { createSlice } from "@reduxjs/toolkit";
const findItem = ({ uid, style, size }) =>
  uid === action.payload.uid && style === action.payload.style && size === action.payload.size;

const cartSlice = createSlice({
  name: "cart",
  initialState: { open: false, products: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.products.find(findItem);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find(findItem);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find(findItem);
      if (item.quantity === 1) {
        const index = state.products.findIndex(findItem);
        state.products.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex(findItem);
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
