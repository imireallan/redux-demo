import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    productSlice,
    loginSlice,
  },
});

export default store;
