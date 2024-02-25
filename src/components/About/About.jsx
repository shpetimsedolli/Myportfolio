import React from "react";
import "./About.css";
import aboutimage from "../../assets/about.png";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="aboutwrap" data-aos="fade-up">
          <img src={aboutimage} alt="AboutImage" />
          <div className="about__content">
            <span>Who am I</span>
            <h1>About Me</h1>
            <p>
              Highly skilled Front-End Developer with a passion for crafting
              clean and user-friendly interfaces. Experienced in collaborating
              with cross-functional teams to translate business requirements
              into engaging digital solutions. Dedicated to staying updated with
              the latest web technologies and best practices. Ready to
              contribute expertise and creativity to drive the success of
              innovative projects. For more download my CV right below.
            </p>
            <a
              className="download__btn"
              href="https://drive.google.com/file/d/1eG8f1xNOr23BKa8zlcBEUpQ5Iom4AJw4/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
