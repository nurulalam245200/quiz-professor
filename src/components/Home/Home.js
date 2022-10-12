import React from "react";
import logo from "../../images/banner.png";
import Topic from "../Topics/Topic";

const Home = () => {
  return (
    <div>
      <h1 className="text-white text-4xl font-bold bg-red-500">
        Our Quiz Professor Team Here!
      </h1>
      <p className="text-white text-lg p-8 font-semibold bg-red-500">
        Our platfrom provide a greate full opportiunities for student education.
        we will provide quiz question and it is about programming world. <br />{" "}
        Most of the country now involed in internet. And web development can
        easy to create a global communication for world people. <br />
        And we also want to share our workl with you.
      </p>
      <img className="w-full" src={logo} alt="" />
      <Topic></Topic>
    </div>
  );
};

export default Home;
