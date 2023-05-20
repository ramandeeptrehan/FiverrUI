import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

const Slide = () => {
  return (
    <div className="slider">
      <div className="container">
        <Slider dots>
          {/* dots enable the dots in slider to go left, right */}
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
