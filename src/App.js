import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    if (Number(inputRef.current.value) != 0) {
      setResult((result) => result / Number(inputRef.current.value));
    }
  };


  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simplest Working Calculator</h1>
      </header>
      <form>
        <p ref={resultRef}>
          {result == 0 ? "0" : result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button type="submit" onClick={plus}>Add</button>
        <button type="submit" onClick={minus}>Subtract</button>
        <button type="submit" onClick={times}>Multiply</button>
        <button type="submit" onClick={divide}>Divide</button>
        <br />
        <button type="reset" onClick={resetInput}>Reset Input</button>
        <button type="reset" onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App; 
