import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/quanLyPhim/thunkAction";
// import { Skeleton } from "antd";

const Movies = () => {
  const { movies, isLoading } = useSelector((state) => state.quanLyPhim);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  if (isLoading) {
    return (
      // <div className="grid grid-cols-4 gap-4 container mx-auto">
      //   {[...Array(10)].map((e) => (
      //     <Skeleton.Input key={e} />
      //   ))}
      // </div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2" />
                <div className="h-2 bg-slate-200 rounded col-span-1" />
              </div>
              <div className="h-2 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto">
      {movies.map((movie) => (
        <div className="border border-gray-500" key={movie.maPhim}>
          <img src={movie.hinhAnh} alt={movie.tenPhim} height={200} />
          <h1 className="p-4 font-bold text-xl">{movie.tenPhim}</h1>
        </div>
      ))}
    </div>
  );
};

export default Movies;
