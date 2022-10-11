import React from "react";

const QuestionType = ({ type }) => {
  const { logo, name, id, total } = type;
  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default QuestionType;
