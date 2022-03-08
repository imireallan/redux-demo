import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import productReducer from "./productReducer";
import loginReducer from "./loginReducer";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    productSlice: productReducer,
    loginSlice: loginReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
