import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

const Slide = ({ children, numberOfSlidesToShow, numberOfSlidesToScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        {/* <Slider dots> */}
        {/* dots enable the dots in slider to go left, right */}
        <Slider
          slidesToShow={numberOfSlidesToShow}
          arrowsScroll={numberOfSlidesToScroll}
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
