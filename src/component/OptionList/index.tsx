'use client'
import React from "react";
import OptionButton from "../OptionButton";
import questions from "@/data/data";

type OptionListProps = {
  handleClick: (option: string) => void;
  userAnswer: string | null;
  rightAnswer: string;
  questionNumber: number;
};

const OptionList: React.FC<OptionListProps> = ({
  handleClick,
  userAnswer,
  rightAnswer,
  questionNumber,
}) => {
  const options = questions[questionNumber].options;

  return (
    <div>
      {options.map((option) => (
        <OptionButton
          key={option}
          option={option}
          handleClick={handleClick}
          userAnswer={userAnswer}
          rightAnswer={rightAnswer}
          disabled={!!userAnswer} 
        />
      ))}
    </div>
  );
};

export default OptionList;
