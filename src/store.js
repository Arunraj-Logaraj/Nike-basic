import { configureStore } from "@reduxjs/toolkit";
import SliceValues from "./ReduxSlice/SliceValues";

let store = configureStore({
  devTools: true,
  reducer: {
    customer: SliceValues,
  },
});

export default store;
