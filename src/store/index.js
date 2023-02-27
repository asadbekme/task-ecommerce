import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})