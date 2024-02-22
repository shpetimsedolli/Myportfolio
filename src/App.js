import React, { useEffect } from "react";
import Aos from "aos";
import "./Apps.css";

import { Navbar, Main, About } from "./components";
import "animate.css";
import "typed.js";
import "./responsive.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  );
};

export default App;
