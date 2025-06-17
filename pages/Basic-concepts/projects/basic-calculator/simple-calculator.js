const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

let expression = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleInput(button.value);
  });
});

// keyboard press
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if ("0123456789+-*/.".includes(key)) {
    handleInput(key);
  } else if (key === "Enter") {
    handleInput("=");
  } else if (key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  } else if (key === Escape) {
    handleInput("C");
  }
});

function handleInput(value) {
  if (value === "=") {
    try {
      expression = eval(expression);
      display.value = expression;
    } catch {
      display.value = "Error";
    }
  } else if (value === "C") {
    expression = "";
    display.value = "";
  } else {
    expression += value;
    display.value = expression;
  }
}
