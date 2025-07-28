import React, { useState } from "react";
function App() {
  const [step, setStep] = useState(1);

  const [inputValue, setInputValue] = useState(0);

  const date = new Date();
  const today = new Date(date);
  today.setDate(date.getDate() + inputValue);
  const dates = today.toDateString();

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="App">
      <div style={centerStyle}>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <p>{step}</p>
      </div>
      <div style={centerStyle}>
        <button onClick={() => setInputValue(inputValue + step)}>+</button>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(+e.target.value)}
        />
        <button
          onClick={() => setInputValue(inputValue - step)}
          disabled={inputValue - step < 0}
        >
          -
        </button>
      </div>

      <div style={centerStyle}>
        <p>
          {inputValue} day from is {dates}
        </p>
      </div>
      <div style={centerStyle}>
        <button
          onClick={() => {
            setStep(1);
            setInputValue(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
