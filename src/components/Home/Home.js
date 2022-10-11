import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionType from "../QuestionType/QuestionType";

const Home = () => {
  const catagory = useLoaderData();
  const types = catagory.data;

  return (
    <div className="bg-slate-500">
      {types.map((type) => (
        <QuestionType key={type.id} type={type}></QuestionType>
      ))}
    </div>
  );
};

export default Home;
