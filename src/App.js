import React, { useEffect } from "react";
import Aos from "aos";
import "./Apps.css";

import { Navbar, Main } from "./components";
import "animate.css";
import "./responsive.css";
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
