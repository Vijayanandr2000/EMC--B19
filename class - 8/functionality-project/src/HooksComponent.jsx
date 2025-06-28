import React, { useState } from "react";

const HooksComponent = () => {
  //   let value = 0;

  let [value, setValue] = useState(0);

  return (
    <>
      <h1>Counter: {value}</h1>
      <button
        onClick={() => {
          //   value += 1;
          //   setValue(value + 1);
          //   setValue(value + 1);
          setValue((prev) => {
            return prev + 1;
          });
          setValue((prev) => {
            return prev + 1;
          });
          console.log("Vijay", value);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default HooksComponent;
