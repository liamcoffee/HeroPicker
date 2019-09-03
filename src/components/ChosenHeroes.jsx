import React from "react";
import HeroItem from "./HeroItem";

const ChosenHeroes = ({ chosenHeroes, onHeroSelect, team }) => {
	const renderedChosenHeroes = chosenHeroes.map(selectedRadiant => {
		return (
			<HeroItem
				key={selectedRadiant.ID}
				hero={selectedRadiant}
				selectedRadiant={selectedRadiant}
				onHeroSelect={onHeroSelect}
				team={team}
			/>
		);
	});
	return <div>{renderedChosenHeroes}</div>;
};

export default ChosenHeroes;
