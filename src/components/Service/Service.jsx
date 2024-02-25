import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Service.css";

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="about" id="skills">
      <div className="container">
        <h1 className="about__title">Skills</h1>
        <div className="servicewrap" data-aos="fade-up">
          <Slider {...settings}>
            <div className="service__box">
              <i className="fa-brands fa-html5"></i>
              <h4>HTML</h4>
              <p className="subtitle">
                Deep understanding of semantic markup and structural
                organization, ensuring that web content is accessible, well
                organized and search engine optimized
              </p>
            </div>
            <div className="service__box">
              <i className="fa-brands fa-css3-alt"></i>
              <h4>CSS</h4>
              <p className="subtitle">
                Extends to both styling and advanced techniques, enabling me to
                transform HTML elements into visually stunning web interfaces.
              </p>
            </div>
            <div className="service__box">
              <i className="fa-brands fa-js"></i>
              <h4>Javascript</h4>
              <p className="subtitle">
                Empowering to create dynamic and interactive web experiences.
                With a solid understanding of core JavaScript concepts such as
                variables , functions and control flow.
              </p>
            </div>
            <div className="service__box">
              <i className="fa-brands fa-bootstrap"></i>
              <h4>BootStrap</h4>
              <p className="subtitle">
                I harness the power of this frond-end framework to expedite the
                development process and create cisually appealing, responsive
                website with ease.
              </p>
            </div>
            <div className="service__box">
              <i className="fa-brands fa-git"></i>
              <h4>Git</h4>
              <p className="subtitle">
                Skilled in utilizing Git commands for version control, branching
                , merging and resolving conflicts, I facilitate smooth and
                organized development processes.
              </p>
            </div>
            <div className="service__box">
              <i className="fa-brands fa-react"></i>
              <h4>React</h4>
              <p className="subtitle">
                Committed to staying updated with React's latest features and
                best practices, I continuously seek to enhance my skills and
                contribute to the succes of innovative projects.
              </p>
            </div>
            <div className="service__box">
              <i className="fa-brands fa-figma"></i>
              <h4>UI/UX principles</h4>
              <p className="subtitle">
                Strong understanding of UI/UX principles and the ability to
                translate designs into executable code.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Service;
