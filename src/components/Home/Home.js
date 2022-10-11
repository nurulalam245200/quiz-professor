import React from "react";
import logo from "../../images/banner.png";

const Home = () => {
  return (
    <div>
      <h1 className="text-white text-4xl font-bold bg-red-500">
        Our Quiz Professor Team Here!
      </h1>
      <img className="w-full" src={logo} alt="" />
    </div>
  );
};

export default Home;
