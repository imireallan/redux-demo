import { LOGIN } from "./types";

const initialState = {
  users: ["admin", "manager", "end-user"],
  loginDet: "none",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginDet: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
