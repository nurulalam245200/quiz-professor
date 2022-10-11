import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const loadQuestion = useLoaderData().data.questions;
  const questions = loadQuestion;

  return (
    <div className="grid grid-cols-1 gap-6  w-9/12 h-full mx-auto p-6 ">
      {questions.map((quiz) => (
        <Question key={quiz.id} quiz={quiz}></Question>
      ))}
    </div>
  );
};

export default Questions;
