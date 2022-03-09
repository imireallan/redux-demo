import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { pName: "Apples", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
  ],
  cart: [],
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    purchase: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + parseInt(action.payload.value, 10);
    },
  },
});

export const { purchase } = productSlice.actions;
export default productSlice.reducer;
