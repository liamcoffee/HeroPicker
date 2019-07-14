import React from "react";
import HeroItem from "./HeroItem";

const RadiantList = ({ heroes, onHeroSelect }) => {
  console.log("redraw");
  const renderedList = heroes.map(hero => {
    return <HeroItem key={hero.ID} hero={hero} onHeroSelect={onHeroSelect} />;
  });
  return <div className="ui middle aligned selection list">{renderedList}</div>;
};

export default RadiantList;
