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
  ScrollToTop,
} from "./components";
import "animate.css";
import "typed.js";
import "./responsive.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1700 });
  }, []);

  return (
    <div>
      <ScrollToTop />
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
