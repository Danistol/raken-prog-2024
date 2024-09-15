import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const modifyCounter = (value) =>
    setCounter((prevCounter) => prevCounter + value);

  const resetCounter = () => setCounter(0);

  return (
    <>
      <h1>{counter}</h1>

      {["+1", "+5", "+50", "-1", "-5", "-50"].map((element) => (
        <button onClick={() => modifyCounter(parseInt(element))}>
          sync {element}
        </button>
      ))}

      <button onClick={() => setTimeout(() => modifyCounter(), 2000)}>
        async +1
      </button>

      <button onClick={resetCounter}>Reset</button>
    </>
  );
};

export default Counter;
