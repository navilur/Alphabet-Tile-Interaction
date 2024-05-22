import { useState } from "react";
import "./App.css";

function App() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    let newOutputString = outputString + letter;
    newOutputString = processConsecutiveLetters(newOutputString);
    setOutputString(newOutputString);
  };

  const processConsecutiveLetters = (str) => {
    return str.replace(/(.)\1{2,}/g, (match) =>
      "_".repeat(Math.ceil(match.length / 3))
    );
  };

  return (
    <div className="App">
      <div className="grid-container">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
}

export default App;
