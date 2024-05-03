import { configureStore } from "@reduxjs/toolkit";
import SliceValues from "./SliceValues";

let store = configureStore({
  devTools: true,
  reducer: {
    cart: SliceValues,
  },
});

export default store;
