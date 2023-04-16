import React from "react";
import Movies from "../module/Movies";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold m-4 text-center">Movie list</h1>
      <Movies />
    </>
  );
};

export default Home;
