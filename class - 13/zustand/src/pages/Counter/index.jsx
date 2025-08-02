import React from "react";
import { useStore } from "../../store/Counter";

const Counter = () => {
  const { count, inc, dec, reset, incByValue, incValueUpdate, incValue } =
    useStore();
  //   const [value, setValue] = useState(0);

  //   setValue((prev) => {});

  return (
    <>
      <h1>Counter: {count}</h1>

      <div>
        <input
          type="number"
          value={incValue}
          onChange={(e) => {
            const { value } = e.target;
            incValueUpdate(parseInt(value));
          }}
        />
      </div>

      {() => {}}

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={inc}>INC</button>
        <button onClick={incByValue}>INC by {incValue}</button>
        <button onClick={dec}>DEC</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  );
};

export default Counter;
