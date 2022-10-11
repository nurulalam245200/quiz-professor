import React, { useState } from "react";
import { BeakerIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Question = ({ quiz }) => {
  console.log(quiz);
  const { id, correctAnswer, options, question } = quiz;
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-sky-300 p-8 rounded-lg">
      <div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">
            Quiz : {question.split("<p>")}
          </p>
          <div className="h-6 w-6" onClick={() => setOpen(!open)}>
            {open ? <EyeIcon></EyeIcon> : <EyeSlashIcon></EyeSlashIcon>}
          </div>
        </div>
        <div className="grid grid-cols-2">
          {options.map((option, idx) => (
            <label key={idx}>
              <input type="checkbox" />
              {option}
            </label>
          ))}

          {open === true && (
            <p className="text-green-600 text-lg font-medium">
              Correct Answer : {correctAnswer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
