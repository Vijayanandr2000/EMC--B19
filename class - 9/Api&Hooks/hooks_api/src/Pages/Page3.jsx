import React, { useContext } from "react";
import { GlobalContext } from "../Wrapper";

const Page3 = () => {
  const { name, age } = useContext(GlobalContext);

  console.log("name", name, age);
  return (
    <div>
      Page3-{name}-{age}{" "}
    </div>
  );
};

export default Page3;
