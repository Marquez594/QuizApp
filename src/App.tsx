import { useState } from "react";
import Menu from "./menu";
import Question from "./quesSpace";

function App() {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [questionState, setQuestionState] = useState<string[]>(
    Array.from({ length: 14 }, () => "na"),
  );
  const [answer, setAnswer] = useState<(number | null)[]>(
    Array.from({ length: 14 }, () => null),
  );

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/**Whole body of the website */}
        <div className="p-4 flex justify-center border border-black">
          <h1 className="text-2xl font-bold">Quiz</h1>
        </div>
        <div className="flex-1 flex flex-col md:flex-row p-2 border gap-10">
          <Question
            currentNumber={currentNumber}
            setScore={setScore}
            setCurrentNumber={setCurrentNumber}
            answer={answer}
            setAnswer={setAnswer}
            setQuestionState={setQuestionState}
            questionState={questionState}
          ></Question>
          <Menu
            questionState={questionState}
            setCurrentNumber={setCurrentNumber}
            currentNumber={currentNumber}
            score={score}
          ></Menu>
        </div>
      </div>
    </>
  );
}

export default App;
