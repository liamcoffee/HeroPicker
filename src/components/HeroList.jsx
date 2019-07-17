import React from "react";
import HeroItem from "./HeroItem";

const HeroList = ({ heroes, onHeroSelect, team }) => {
  console.log("redraw");
  const renderedList = heroes.map(hero => {
    return (
      <HeroItem
        key={hero.ID}
        hero={hero}
        onHeroSelect={onHeroSelect}
        team={team}
      />
    );
  });
  return <div className="ui middle aligned selection list">{renderedList}</div>;
};

export default HeroList;
