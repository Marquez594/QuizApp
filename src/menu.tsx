type menuProp = {
  setCurrentNumber: React.Dispatch<React.SetStateAction<number>>;
  questionState: string[];
  currentNumber: number;
  score: number;
};

function Menu({
  questionState,
  setCurrentNumber,
  currentNumber,
  score,
}: menuProp) {
  return (
    <div className="flex-1 border shadow-xl rounded-xl p-4  flex-col md:gap-5 md:flex ">
      <div className="grid grid-cols-4 gap-4 place-items-center">
        {/**Question Bank */}
        {questionState.map((element, index) => (
          <button
            key={index}
            className={`border text-center md:p-1 lg:w-12 lg:h-12 md:w-8 md:h-8 w-10 h-10 box-border border-2 flex justify-center items-center border-black ${currentNumber == index ? "border-blue-500 border-2" : null} rounded-full ${element == "correct" ? "bg-green-500" : element == "wrong" ? "bg-red-500" : null}`}
            onClick={() => setCurrentNumber(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className=" flex-1 flex flex-col justify-center items-center gap-10 md:mt-0 mt-5">
        {/**Everything else */}
        <h1 className="text-5xl">Score</h1>
        <h2 className="text-7xl">{score}</h2>
      </div>
    </div>
  );
}

export default Menu;
