import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { MainData } from "./utils/constants/MainData";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main MainData={MainData} />
      <Footer />
    </>
  );
}

export default App;
