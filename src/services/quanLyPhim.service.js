import http from "./../constant/api";

export const quanLyPhimService = {
  getMovies: (query = "") => http.get(`QuanLyPhim/LayDanhSachPhim${query}`),
};
