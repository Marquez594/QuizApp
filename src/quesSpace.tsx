import type React from "react";
import questionBank from "./question";
import { useState } from "react";

type questionProp = {
  currentNumber: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentNumber: React.Dispatch<React.SetStateAction<number>>;
  answer: (number | null)[];
  setAnswer: React.Dispatch<React.SetStateAction<(number | null)[]>>;
  setQuestionState: React.Dispatch<React.SetStateAction<string[]>>;
  questionState: string[];
};

function Question({
  currentNumber,
  setScore,
  setCurrentNumber,
  answer,
  setAnswer,
  setQuestionState,
  questionState,
}: questionProp) {
  const alpha: string[] = ["A", "B", "C", "D"];
  const [currentPlace, setCurrentPlace] = useState<number | null | undefined>(
    null,
  );
  currentPlace
  const updateQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget.name;
    if (element == "next" && currentNumber != 13) {
      setCurrentNumber((prev) => prev + 1);
    }
    if (element == "prev" && currentNumber != 0) {
      setCurrentNumber((prev) => prev - 1);
    }
  };

  const handleChange = (index: number) => {
    if (
      questionState[currentNumber] == "wrong" ||
      questionState[currentNumber] == "correct"
    ) {
      return;
    }
    setCurrentPlace(index);
    setAnswer((prev) => {
      const updated = [...prev];
      updated[currentNumber] = index;
      return updated;
    });
  };

  const checkAnswer = () => {
    const selected = answer[currentNumber];
    if (selected === null || selected === undefined) return;

    if (questionBank[currentNumber].correctAnswer === selected) {
      setQuestionState((prev) => {
        const update = [...prev];
        update[currentNumber] = "correct";
        return update;
      });
      setScore((prev) => prev + 1);
    } else {
      setQuestionState((prev) => {
        const update = [...prev];
        update[currentNumber] = "wrong";
        return update;
      });
    }
  };
  return (
    <div className="md:flex-[4] flex-1 border shadow-2xl rounded-xl md:p-4  p-1 flex flex-col justify-between">
      <div className=" flex flex-col gap-3">
        <h1 className="md:text-2xl text-xl">Question {currentNumber + 1}</h1>
        <p className="md:text-4xl text-2xl">{questionBank[currentNumber].question}</p>
      </div>
      <form className="flex-1  flex flex-col justify-evenly md:mt-0 md:mb-0 mt-5 mb-5">
        {/**Answer Bank */}
        {questionBank[currentNumber].choices.map((choice, index) => (
          <label
            key={index}
            className={`flex items-center gap-5 border md:p-5 p-1 rounded-3xl cursor-pointer ${questionState[currentNumber] !== "na" && questionBank[currentNumber].correctAnswer == index ? "border-green-500" : null} ${questionState[currentNumber] !== "na" && questionBank[currentNumber].correctAnswer != index ? "border-red-500" : null}`}
          >
            <input
              type="radio"
              name="answer"
              value={index}
              checked={answer[currentNumber] == index}
              onChange={() => handleChange(index)}
              className="appearance-none border border-black w-10 h-10 flex-shrink-0 rounded-full  checked:bg-blue-500"
            />

            <div className="text-xl flex gap-5 items-center">
              <h1 className="md:text-3xl text-2xl">{alpha[index]}</h1>
              <h1 className="md:text-2xl text-md">{choice}</h1>
            </div>
          </label>
        ))}
      </form>
      <div className="flex md:gap-7 gap-2 w-full ">
        {/**Buttons */}
        <button
          className="p-3 md:px-8 bg-blue-500 text-white rounded-lg"
          name="prev"
          onClick={(e) => updateQuestion(e)}
        >
          Prev
        </button>
        <button
          className="p-3 md:px-8 bg-blue-500 text-white rounded-lg"
          onClick={(e) => updateQuestion(e)}
          name="next"
        >
          Next
        </button>
        <button
          className="p-3 md:px-8 bg-blue-500 text-white rounded-lg ml-auto "
          type="button"
          onClick={() => checkAnswer()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Question;
