import React from "react";
import HeroItem from "./HeroItem";

const ChosenRadiant = ({ chosenHeroes, onHeroSelect }) => {
  const renderedChosenRadiant = chosenHeroes.map(selectedRadiant => {
    return (
      <HeroItem
        key={selectedRadiant.ID}
        hero={selectedRadiant}
        selectedRadiant={selectedRadiant}
        onHeroSelect={onHeroSelect}
      />
    );
  });
  return <div>{renderedChosenRadiant}</div>;
};

export default ChosenRadiant;
