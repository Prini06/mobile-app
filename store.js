import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./app/redux/CartReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
