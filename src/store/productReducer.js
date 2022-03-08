import { ADD_TO_CART } from "./types";

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
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + parseInt(action.payload.value, 10),
      };
    default:
      return state;
  }
};
export default productReducer;
