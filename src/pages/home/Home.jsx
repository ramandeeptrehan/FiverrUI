import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { cardsData, projects } from "../../../data/data";
import "./Home.scss";
import ProductFeatures from "../../components/productFeatures/ProductFeatures";
import FiverrBusiness from "../../components/fiverrBusiness/FiverrBusiness";
import ProjectsOnHomePage from "../../components/projectsOnHomePage/ProjectsOnHomePage";
import ProjectCard from "../../components/projectCard/ProjectCard";

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
      <ProductFeatures></ProductFeatures>
      <FiverrBusiness></FiverrBusiness>
      <ProjectsOnHomePage numberOfSlidesToShow={5} numberOfSlidesToScroll={5}>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </ProjectsOnHomePage>
    </div>
  );
};

export default Home;
