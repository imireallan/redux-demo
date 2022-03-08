import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./productReducer";
import loginReducer from "./loginReducer";

const middleware = [];

const store = createStore(
  combineReducers({
    productSlice: productReducer,
    loginSlice: loginReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
