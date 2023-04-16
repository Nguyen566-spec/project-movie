import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunkAction";

const initialState = {
  user: undefined,
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungAction,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    logout: (state, payload) => {
      localStorage.removeItem("user");
      state.user = undefined;
    },
    getUser: (state, action) => {
      const data = localStorage.getItem("user");
      if (data) {
        state.user = JSON.parse(data);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
  },
});
