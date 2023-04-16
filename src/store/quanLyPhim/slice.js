import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./thunkAction";

const initialState = {
  movies: [],
  isLoading: true,
  error: undefined,
};

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    name: "quanLyPhim",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getMovies.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getMovies.fulfilled, (state, action) => {
          state.movies = action.payload;
          state.isLoading = false;
        })
        .addCase(getMovies.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        });
    },
  });
