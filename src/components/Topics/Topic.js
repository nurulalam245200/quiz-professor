import React, { useContext } from "react";
import { DataContext } from "../../layouts/Main";
import QuestionType from "../QuestionType/QuestionType";

const Topic = () => {
  const catagory = useContext(DataContext);
  console.log(catagory);
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
