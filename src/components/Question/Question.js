import React, { useState } from "react";
import { BeakerIcon, EyeIcon } from "@heroicons/react/24/solid";

const Question = ({ quiz }) => {
  console.log(quiz);
  const { id, correctAnswer, options, question } = quiz;
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-sky-300 p-8 rounded-lg">
      <div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">
            Quiz : {question.split("<p>")}
          </p>
          <EyeIcon onClick={setOpen(!open)} className="h-6 w-6"></EyeIcon>
        </div>
        <div className="grid grid-cols-2">
          {options.map((option, idx) => (
            <label key={idx}>
              <input type="checkbox" onChange={() => setChecked(!checked)} />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
