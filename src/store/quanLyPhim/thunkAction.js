import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from "../../services/quanLyPhim.service";

export const getMovies = createAsyncThunk(
  "quanLyPhim/getMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimService.getMovies("?maNhom=GP03");
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
