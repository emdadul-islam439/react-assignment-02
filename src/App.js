import "./App.css";
import { useState } from "react";
import ValidationComponent from "./components/ValidationComponent";

function App() {
  const [inputLength, setInputLength] = useState(0);
  // const [statusMessage, setStatusMessage] = useState("");
  const changeInputHandler = (event) => {
    setInputLength(event.target.value.length);
    // inputLength <= 5
    //   ? setStatusMessage("Text too short")
    //   : setStatusMessage("Text long enough");
  };
  return (
    <div className="App">
      <input type="textInput" onChange={changeInputHandler} />
      <p>Length is: {inputLength} characters</p>
      <div>
        <ValidationComponent inputLength={inputLength} />
      </div>
    </div>
  );
}

export default App;
