import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputLength, setInputLength] = useState(0);
  const changeInputHandler = (event) => {
    setInputLength(event.target.value.length);
  };
  return (
    <div className="App">
      <input type="textInput" onChange={changeInputHandler} />
      <p>Length is: {inputLength} characters</p>
    </div>
  );
}

export default App;
