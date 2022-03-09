import { loginUser } from "./loginSlice";

export const validateUser = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(loginUser(payload));
  }, 2000);
};
