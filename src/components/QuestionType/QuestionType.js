import React from "react";

const QuestionType = ({ type }) => {
  const { logo, name, id, total } = type;

  return (
    <div className="card bg-sky-400 shadow-xl">
      <img src={logo} alt="Shoes" />

      <div className="card-body text-white">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p>Total Question :{total}</p>
        <div className="card-actions justify-end ">
          <button className="btn btn-primary">Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionType;
