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
  };
  return (
    <div>
      <div className="container">
        <div className="servicewrap">
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
                Encompasses frond-end, empowering me to create dynamic and
                interactive web experiences. With a solid understanding of core
                JavaScript concepts such as variables , functions and control
                flow.
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Service;
