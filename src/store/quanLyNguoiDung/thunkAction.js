import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyNguoiDungService } from "../../services/quanLyNguoiDung.service";

export const login = createAsyncThunk(
  "quanLyNguoiDung/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await quanLyNguoiDungService.login(payload);
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
