import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find((item) => item.id === action.payload.id);
      if (itemPresent) {
        return {...state, cart: state.cart.map((item) => item.id === action.payload.id? {...item, quantity: item.quantity + 1 } : item) };
      } else {
        return {...state, cart: [...state.cart, {...action.payload, quantity: 1 }] };
      }
    },
    removeFromCart: (state, action) => {
      return {...state, cart: state.cart.filter((item) => item.id!== action.payload.id) };
    },
    incrementQuantity: (state, action) => {
      return {...state, cart: state.cart.map((item) => item.id === action.payload.id? {...item, quantity: item.quantity + 1 } : item) };
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        return {...state, cart: state.cart.filter((item) => item.id!== action.payload.id) };
      } else {
        return {...state, cart: state.cart.map((item) => item.id === action.payload.id? {...item, quantity: item.quantity - 1 } : item) };
      }
    },
    cleanCart: (state) => {
      return {...state, cart: [] };
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart,
} = cartSlice.actions;

export default cartSlice.reducer;