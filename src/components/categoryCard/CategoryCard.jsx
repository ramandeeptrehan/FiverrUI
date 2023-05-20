import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      {/* because the category card should be a clickable link */}
      <div className="categoryCard">
        {/* we don't need a container here. Just create a category card */}
        <img src={item.img} alt=""></img>
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
