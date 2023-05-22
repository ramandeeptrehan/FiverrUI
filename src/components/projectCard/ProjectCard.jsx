import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  return (
    <Link to="/" className="link">
      {/* className='link' is added to remove blue underlined links */}
      <div className="projectCard">
        <img src={item.img} alt=""></img>

        <div className="info">
          <img src={item.pp}></img>

          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
