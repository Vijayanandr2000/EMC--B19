import React, { useEffect } from "react";
import Page2 from "./Page2";

const Page1 = ({ count }) => {
  useEffect(() => {
    console.log("Page1");
  }, [count]);
  return (
    <div>
      Page1
      <Page2 />
    </div>
  );
};

export default Page1;
