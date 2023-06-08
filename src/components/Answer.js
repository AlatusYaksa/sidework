import React from 'react';

const Answer = ({answer, handleAnswer}) => {
  const handleClick = (e) => {
    console.debug(e)
  }
  return (
    <label className={"quiz__label"}>
      {answer.answer}
      <input type="radio" name={answer.name} value={answer.answer} className={"quiz__radio"} onChange={() => handleAnswer(answer.isCorrect)}/>
    </label>
  );
};

export default Answer;
