import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itempresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itempresent) {
        itempresent.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const itempresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itempresent.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const itempresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itempresent.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        itempresent.quantity -= 1;
      }
    },
    cleancart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleancart,
} = cartSlice.actions;
export default cartSlice.reducer;
