import React from "react";
import { useForm } from "react-hook-form";
import { quanLyNguoiDungService } from "../services/quanLyNguoiDung.service";
import { useNavigate } from "react-router-dom";
import { message } from "../module/ToastMessage";
// import Input from "../components/core/Input";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-black p-6">Update</h1>
      <form
        onSubmit={handleSubmit(async (value) => {
          try {
            const res = await quanLyNguoiDungService.register(value);
            if (res.data.statusCode !== 400) {
              message.success("Đăng ký tài khoản thành công");
              navigate("/login");
            }
          } catch (error) {
            // message.error("Đăng ký tài khoản thất bại");
          }
        })}
      >
        {/* <Input
          label="Tài khoản"
          id='taiKhoan'
          errors={errors?.taiKhoan?.message}
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
        /> */}
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
        <div className="m-6">
          <label
            htmlFor="matKhau"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mật khẩu
          </label>
          <input
            type="password"
            id="matKhau"
            {...register("matKhau", {
              required: "Vui lòng nhập mật khẩu",
              minLength: {
                value: 8,
                message: "Mật khẩu tối thiểu 8 ký tự",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                message: "Mật khẩu không hợp lệ",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors?.matKhau?.message}</p>
        </div>
        <div className="m-6">
          <div>
            <label
              htmlFor="maLoaiNguoiDung"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mã loại người dùng
            </label>
            <select
              id="maLoaiNguoiDung"
              {...register("maLoaiNguoiDung")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Quản trị</option>
              <option>Khách hàng</option>
            </select>
          </div>
        </div>
        <button className="p-6" onClick={() => navigate("/login")}>
          Đăng nhập
        </button><br />
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

export default Register;
