import React, { useEffect, useRef, useState } from 'react';
import Answer from "./Answer";

const Quiz = ({question}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const handleOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  const handleAnswer = (isCorrect) => {
    setIsAnswered(true)
    setIsCorrect(isCorrect)
  }

  useEffect(() => {
    if (isOpen) {
      setIsAnswered(false)

    }
  }, [isOpen])
  return (
    <section className={"quiz"}>
      <div className="quiz__header" onClick={handleOpen}>
        {question.title}
      </div>
      <div className={`quiz__content ${isOpen ? "quiz__content-open" : ""}`}>
        <form action="" className={"quiz__form"}>
          {isOpen && question.answers.map((answer, index) => {
            return <Answer key={index} answer={answer} handleAnswer={handleAnswer}/>
          })}
        </form>
        {isAnswered && <p className={`quiz__result ${isCorrect ? "quiz__result" : "quiz__result-wrong"}`}>Ответ {isCorrect ? "верный" : "неверный"}</p>}
      </div>
    </section>
  );
};

export default Quiz;
