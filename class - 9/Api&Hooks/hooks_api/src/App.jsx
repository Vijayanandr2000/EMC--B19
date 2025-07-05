import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log("Mounting", val);

    return () => {
      console.log("unMounting", val);
    };
  }, [val]);

  return (
    <>
      <h1
        onClick={() => {
          setVal((prev) => prev + 1);
        }}
      >
        Click Me - {val}
      </h1>
    </>
  );
}

export default App;
