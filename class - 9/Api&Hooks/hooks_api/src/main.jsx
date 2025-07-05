import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Wrapper from "./Wrapper.jsx";
import Hooks from "./Hooks.jsx";
import Api from "./Api.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />
  // <Wrapper />
  // <Hooks />
  <Api />
  // </StrictMode>,
);
