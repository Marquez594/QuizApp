type Question = {
  question: string;
  choices: string[];
  correctAnswer: number;
};

const questionBank: Question[] = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which language is primarily used to style web pages?",
    choices: ["HTML", "JavaScript", "CSS", "Python"],
    correctAnswer: 2,
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which JavaScript method converts JSON to an object?",
    choices: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.convert()",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    choices: ["<!-- -->", "//", "#", "**"],
    correctAnswer: 1,
  },
  {
    question: "What does `useState` do in React?",
    choices: [
      "Fetches data",
      "Manages component state",
      "Handles routing",
      "Styles components",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    choices: ["var", "let", "const", "static"],
    correctAnswer: 2,
  },
  {
    question: "Which array method creates a new array with filtered elements?",
    choices: ["map()", "reduce()", "filter()", "forEach()"],
    correctAnswer: 2,
  },
  {
    question: "What does JSX allow you to do?",
    choices: [
      "Write HTML inside JavaScript",
      "Style components",
      "Create databases",
      "Handle HTTP requests",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which hook is used for side effects in React?",
    choices: ["useState", "useEffect", "useRef", "useMemo"],
    correctAnswer: 1,
  },
  {
    question:
      "What is the correct file extension for a React + TypeScript component?",
    choices: [".js", ".jsx", ".ts", ".tsx"],
    correctAnswer: 3,
  },
  {
    question: "Which operator is used to compare both value and type?",
    choices: ["==", "!=", "===", "="],
    correctAnswer: 2,
  },
  {
    question: "Which method is used to update state in React?",
    choices: [
      "this.setState()",
      "setState()",
      "useState()",
      "The setter function returned by useState",
    ],
    correctAnswer: 3,
  },
  {
    question: "What does `flex-1` do in Tailwind CSS?",
    choices: [
      "Sets flex-direction",
      "Makes element flexible with grow 1",
      "Centers content",
      "Adds padding",
    ],
    correctAnswer: 1,
  },
];

export default questionBank;
