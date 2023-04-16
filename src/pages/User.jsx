import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { quanLyNguoiDungService } from "../services/quanLyNguoiDung.service";

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useSelector((state) => state.quanLyNguoiDung);
  useEffect(() => {
    if (!user) return;
    reset({ ...user });
  }, [reset, user]);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-black p-6">Register</h1>
      <form onSubmit={handleSubmit(async (value) => {
        try {
          const res = await quanLyNguoiDungService.edit(value);
          console.log(res);
        } catch (error) {
          
        }
      })}>
        <div className="m-6">
          <label
            htmlFor="taiKhoan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tài khoản
          </label>
          <input
            type="text"
            id="taiKhoan"
            {...register("taiKhoan", {
              required: "Vui lòng nhập tài khoản",
              maxLength: {
                value: 10,
                message: "Tài khoản tối đa 10 ký tự",
              },
              minLength: {
                value: 5,
                message: "Tài khoản tối thiểu 5 ký tự",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors?.taiKhoan?.message}</p>
        </div>
        <div className="m-6">
          <label
            htmlFor="hoTen"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Họ tên
          </label>
          <input
            type="text"
            id="hoTen"
            {...register("hoTen", {
              required: "Vui lòng nhập họ tên",
              pattern: {
                value: "^[A-Za-z]+$",
                message: "Tên không có số",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors?.hoTen?.message}</p>
        </div>
        <div className="m-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Vui lòng nhập email",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email không hợp lệ",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors?.email?.message}</p>
        </div>
        <div className="m-6">
          <label
            htmlFor="soDT"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Số điện thoại
          </label>
          <input
            type="number"
            id="soDT"
            {...register("soDT", {
              required: "Vui lòng nhập số điện thoại",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors?.soDT?.message}</p>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default User;
