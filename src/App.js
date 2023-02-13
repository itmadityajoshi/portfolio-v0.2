import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
