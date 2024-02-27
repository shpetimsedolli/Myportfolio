import React, { useEffect } from "react";
import Aos from "aos";
import "./Apps.css";

import {
  Navbar,
  Main,
  About,
  Service,
  Hire,
  Form,
  Footer,
  Projects,
} from "./components";
import "animate.css";
import "typed.js";
import "./responsive.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Service />
      <Projects />
      <Hire />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
