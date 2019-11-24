import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log(counter, setCounter);
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(val => val + 1)}>Increment</button>
      {counter}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
