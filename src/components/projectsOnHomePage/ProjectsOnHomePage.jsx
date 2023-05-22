import React from "react";
import "./ProjectsOnHomePage.scss";
import Slider from "infinite-react-carousel";

const ProjectsOnHomePage = ({
  children,
  numberOfSlidesToShow,
  numberOfSlidesToScroll,
}) => {
  return (
    <div className="projectsOnHomePage">
      <div className="container">
        <Slider
          slidesToShow={numberOfSlidesToShow}
          arrosScroll={numberOfSlidesToScroll}
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsOnHomePage;
