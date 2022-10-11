import React, { useState } from "react";

const Question = ({ quiz }) => {
  const { id, correctAnswer, options, question } = quiz;

  return (
    <div className="bg-sky-300 py-4">
      <div>
        <p>Quiz:{question}</p>
        {options.map((option) => (
          <li>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Question;
