import React from "react";
import HeroItem from "./HeroItem";

const ChosenDire = ({ chosenHeroes, onHeroSelect }) => {
  const renderedChosenDire = chosenHeroes.map(selectedDire => {
    return (
      <HeroItem
        key={selectedDire.ID}
        hero={selectedDire}
        selectedDire={selectedDire}
        onHeroSelect={onHeroSelect}
      />
    );
  });
  return <div>{renderedChosenDire}</div>;
};

export default ChosenDire;
