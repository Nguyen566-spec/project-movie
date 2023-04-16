import http from "../constant/api";

export const quanLyNguoiDungService = {
  register: (payload) => http.post("QuanLyNguoiDung/DangKy", payload),
  login: (payload) => http.post("QuanLyNguoiDung/DangNhap", payload),
  edit: (payload) =>
    http.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload),
};
