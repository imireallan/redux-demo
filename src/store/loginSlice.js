import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: ["admin", "manager", "end-user"],
  loginDet: "none",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loginDet = action.payload;
    },
  },
});

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;
