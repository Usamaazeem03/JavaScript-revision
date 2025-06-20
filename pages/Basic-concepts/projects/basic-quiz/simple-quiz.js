const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const scoreEl = document.querySelector(".score");
const nextButton = document.querySelector(".next-btn");
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: 2,
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: 1,
  },

  {
    question: "Which company developed the React library?",
    options: ["Google", "Facebook", "Microsoft", "Twitter"],
    answer: 1,
  },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => selectAnswer(index);
    optionsEl.appendChild(btn);
  });
}
function selectAnswer(index) {
  const correct = questions[currentQuestion].answer;
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    btn.style.background =
      i === correct ? "#55efc4" : i === index ? "#ff7675" : "#f1f1f1";
  });
  if (index === correct) {
    score++;
  }
}
nextButton.addEventListener("click", function () {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Finished";
  optionsEl.innerHTML = "";
  document.querySelector(".next-btn").style.display = "none";
  scoreEl.textContent = `Your Score: ${score}/ ${questions.length}`;
}
showQuestion();
