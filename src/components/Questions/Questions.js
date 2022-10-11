import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const loadQuestion = useLoaderData().data.questions;
  const questions = loadQuestion;

  return (
    <div>
      {questions.map((quiz) => (
        <Question key={quiz.id} quiz={quiz}></Question>
      ))}
    </div>
  );
};

export default Questions;
