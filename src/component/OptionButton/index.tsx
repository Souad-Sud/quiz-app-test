import React from "react";

type OptionButtonProps = {
  option: string;
  handleClick: (option: string) => void;
  userAnswer: string | null;
  rightAnswer: string;
  disabled?: boolean;
};

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  handleClick,
  userAnswer,
  rightAnswer,
  disabled = false,
}) => {
  let className = "";

  if (userAnswer) {
    if (userAnswer === option && option === rightAnswer) {
      className = "right";
    } else if (userAnswer === option && option !== rightAnswer) {
      className = "wrong";
    }
  }

  return (
    <button
      data-testid="option-button"
      className ={`btn ${className}`}
      disabled={disabled}
      onClick={() => handleClick(option)}
    >
      {option}
    </button>
  );
};

export default OptionButton;
