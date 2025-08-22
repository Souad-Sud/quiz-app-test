'use client'
import React, { useState } from "react";
import questions from "@/data/data";
import OptionList from "../OptionList";
import NextButton from "../NextButton";

const Question: React.FC = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[questionNumber];

  const handleAnswer = (option: string) => {
    setUserAnswer(option);

    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => ({ ...prev, right: prev.right + 1 }));
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }
  };

  const handleNext = () => {
    setUserAnswer(null);
    setQuestionNumber((prev) => prev + 1);
  };

  const handleFinish = () => {
    setShowResults(true);
  };

  return (
    <div>
     
      <h2>
        Question {questionNumber + 1} of {questions.length}
      </h2>
      <h3>{currentQuestion.question}</h3>
 
      <OptionList
        handleClick={handleAnswer}
        userAnswer={userAnswer}
        rightAnswer={currentQuestion.correctAnswer}
        questionNumber={questionNumber}
      />

   
      {userAnswer && questionNumber < questions.length - 1 && (
        <NextButton changeQuestion={handleNext} />  
      )}

      {userAnswer && questionNumber === questions.length - 1 && !showResults && (
        <button onClick={handleFinish}>Finish</button>
      )}

      {/* Results */}
      {showResults && (
        <div data-testid="results">
          <p data-testid="right-answers">Right answers: {score.right}</p>
          <p data-testid="wrong-answers">Wrong answers: {score.wrong}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
