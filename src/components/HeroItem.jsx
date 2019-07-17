import React from "react";

const HeroItem = ({ hero, onHeroSelect, team }) => {
  const imageUrl = "./img/" + hero.img;

  return (
    <div onClick={() => onHeroSelect(hero, team)} className="item">
      <img src={imageUrl} alt={hero.name} className="ui tiny image" />
      <div className="content">
        <div className="header">{hero.Name}</div>
        {hero["Team Fight"]},{hero["Wave Clear"]},{hero.Initiator},
        {hero["Objective Taker"]}
      </div>
    </div>
  );
};

export default HeroItem;
