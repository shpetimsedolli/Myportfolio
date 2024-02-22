import React, { useEffect } from "react";
import Aos from "aos";
import "./Apps.css";

import { Navbar, Main, About, Service, Hire } from "./components";
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
      <Service />
      <Hire />
    </div>
  );
};

export default App;
