import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { cardsData } from "../../../data/data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured></Featured>
      <TrustedBy></TrustedBy>
      <Slide numberOfSlidesToShow={5} numberOfSlidesToScroll={5}>
        {cardsData.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
