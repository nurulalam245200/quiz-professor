import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionType from "../QuestionType/QuestionType";

const Topic = () => {
  const catagory = useLoaderData();
  const types = catagory.data;
  return (
    <div className="bg-teal-500 p-5 py-20 grid grid-cols-1 md:grid-cols-4 gap-3">
      {types.map((type) => (
        <QuestionType key={type.id} type={type}></QuestionType>
      ))}
    </div>
  );
};

export default Topic;
