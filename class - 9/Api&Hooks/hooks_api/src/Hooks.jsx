import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import Page1 from "./Pages/Page1";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("data", count);
  }, [count]);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);

    console.log("inputRef", inputRef);
    inputRef.current.focus();
  });

  //<18.3.1
  // const countries = useMemo(["India", "US", "China"], [count]);

  return (
    <>
      <div onClick={handleClick}>
        count - {count}
        <Page1 count={count} />
      </div>

      <input type="text" ref={inputRef} />
    </>
  );
};

export default Hooks;
