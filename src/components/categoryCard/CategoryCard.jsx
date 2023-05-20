import React from "react";
import "./CategoryCard.scss";

const CategoryCard = ({ item }) => {
  return (
    <Link to="/gig/123">
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
