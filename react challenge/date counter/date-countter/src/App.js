import React, { useState } from "react";
function App() {
  const [step, setStep] = React.useState(1);
  const [counter, setCounter] = React.useState(0);

  const date = new Date();
  const today = new Date(date);
  today.setDate(date.getDate() + counter);
  const dates = today.toDateString();

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="App">
      <div style={centerStyle}>
        <button onClick={step < 10 ? () => setStep(step + 1) : undefined}>
          +
        </button>
        <p>Step: {step}</p>
        <button onClick={step > 1 ? () => setStep(step - 1) : undefined}>
          -
        </button>
      </div>
      <div style={centerStyle}>
        <button
          onClick={counter < 365 ? () => setCounter(counter + step) : undefined}
        >
          +
        </button>
        <p>Conter: {counter}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>

      <div style={centerStyle}>
        <p>
          {counter} day from is {dates}
        </p>
      </div>
    </div>
  );
}

export default App;
