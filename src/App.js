import "./App.css";
import { useState } from "react";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

function App() {
  const [inputLength, setInputLength] = useState(0);
  const [inputMessage, setInputMessage] = useState("");
  const [characterList, setCharacterList] = useState([]);
  const changeInputHandler = (event) => {
    setInputLength(event.target.value.length);
    setInputMessage(event.target.value);
  };
  const showCharacterListHandler = (event) => {
    setCharacterList([...inputMessage]);
  };
  const removeCharacterHandler = (idx) => {
    console.log("remove character---> idx: ", idx);
    const newCharList = [...characterList];
    // splice(<index-to-start-from>, <no-of-item-to-be-removed>, ...<item-list-to-be-added>);
    // Link: https://www.w3schools.com/jsref/jsref_splice.asp
    const removedCharacter = newCharList.splice(idx, 1);
    setCharacterList([...newCharList]);
  };
  return (
    <div className="App">
      <input type="textInput" onChange={changeInputHandler} />
      <p>Length is: {inputLength} characters</p>
      <div>
        <ValidationComponent inputLength={inputLength} />
      </div>
      <div>
        <button onClick={showCharacterListHandler}>Show Characters</button>
        <div>
          {characterList.map((character, idx) => (
            <CharComponent
              onClick={removeCharacterHandler}
              characterToShow={character}
              idx={idx}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
