import { LOGIN } from "./types";

export const validateUser = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: LOGIN, payload });
  }, 2000);
};
