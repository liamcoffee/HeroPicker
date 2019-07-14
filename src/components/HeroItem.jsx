import React from "react";

const HeroItem = ({ hero, onHeroSelect }) => {
  const imageUrl = "./img/" + hero.img;

  return (
    <div onClick={() => onHeroSelect(hero)} className="item">
      <img src={imageUrl} alt={hero.name} className="ui tiny image" />
      <div className="content">
        <div className="header">{hero.Name}</div>
      </div>
    </div>
  );
};

export default HeroItem;
