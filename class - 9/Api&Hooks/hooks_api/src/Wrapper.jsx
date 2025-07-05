import React, { createContext } from "react";
import Page1 from "./Pages/Page1";
import Page3 from "./Pages/Page3";

export const GlobalContext = createContext();

const Wrapper = () => {
  const name = "vijay";
  const age = 24;

  return (
    <>
      <GlobalContext.Provider
        value={{
          name,
          age,
        }}
      >
        <Page1 />
        <Page3 />
      </GlobalContext.Provider>
    </>
  );
};

export default Wrapper;
