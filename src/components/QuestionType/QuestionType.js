import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionType = ({ type }) => {
  const { logo, name, id, total } = type;
  const navigate = useNavigate();
  const handleQuizEvent = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div className="card bg-slate-400 shadow-xl">
      <img src={logo} alt="Shoes" />

      <div className="card-body text-white">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p>Total Question :{total}</p>
        <div className="card-actions justify-end ">
          <button onClick={handleQuizEvent} className="btn btn-primary">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionType;
