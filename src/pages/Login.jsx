import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/quanLyNguoiDung/thunkAction";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useSelector((state) => state.quanLyNguoiDung);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (user) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-black p-6">Login</h1>
      <form onSubmit={handleSubmit(async (value) => dispatch(login(value)))}>
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
              //   minLength: {
              //     value: 8,
              //     message: "Mật khẩu tối thiểu 8 ký tự",
              //   },
              //   pattern: {
              //     value:
              //       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
              //     message: "Mật khẩu không hợp lệ",
              //   },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors?.matKhau?.message}</p>
        </div>
        <p className="p-6">
          Chưa có tài khoản?{" "}
          <button onClick={() => navigate("/register")}>Đăng ký</button>
        </p>
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

export default Login;
