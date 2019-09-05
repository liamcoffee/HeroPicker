import React from "react";
import HeroItem from "./HeroItem";

const Totals = ({ totalRadiant, totalDire }) => {
	var chosenKeys = [
		"Team Fight",
		"Wave Clear",
		"Wave Clear",
		"Objective Taker",
		"Lane Winning",
		"Flexible Role",
		"Save Empower"
	];

	const reducedArray = totalRadiant.reduce((accumulator, item) => {
		Object.keys(item).forEach(key => {
			accumulator[key] = (accumulator[key] || 0) + item[key];
		});
		return accumulator;
	}, {});

	return (
		<div>
			{reducedArray["Team Fight"]},{reducedArray["Wave Clear"]},
			{reducedArray["Wave Clear"]},{reducedArray["Objective Taker"]},
			{reducedArray["Lane Winning"]},{reducedArray["Flexible Role"]},
			{reducedArray["Save Empower"]}
		</div>
	);
};

export default Totals;
