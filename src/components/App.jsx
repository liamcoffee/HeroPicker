import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import HeroList from "./HeroList";
import ChosenHeroes from "./ChosenHeroes";
import Totals from "./Totals";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			radiantHeroes: [],
			selectedRadiant: [],
			selectedDire: [],
			direHeroes: []
		};
	}

	componentDidMount() {
		this.getHeroes();
	}

	getHeroes = () => {
		axios
			.get("./data.json")
			.then(res => {
				const initialList = res.data;
				this.setState({ radiantHeroes: res.data, direHeroes: res.data });
			})
			.catch(err => {
				console.log(err);
			});
	};

	onHeroSelect = (hero, team) => {
		if (team === "radiant") {
			this.setState(
				{
					selectedRadiant: this.state.selectedRadiant.concat(hero)
				},
				() => {
					this.filterChosenRadiant();
				}
			);
		} else {
			this.setState(
				{ selectedDire: this.state.selectedDire.concat(hero) },
				() => this.filterChosenDire()
			);
		}
	};

	removeHero = (hero, team) => {
		if (team === "radiant") {
			// removing from chosen array
			let filteredArray = this.state.selectedRadiant.filter(
				item => item !== hero
			);

			// adding back to heroes array, then sorting by ID
			var joined = this.state.radiantHeroes.concat(hero);
			joined = joined.sort((a, b) => parseFloat(a.ID) - parseFloat(b.ID));

			this.setState({
				selectedRadiant: filteredArray,
				radiantHeroes: joined
			});
		} else {
			// removing from chosen array
			let filteredArray = this.state.selectedDire.filter(item => item !== hero);

			// adding back to heroes array, then sorting by ID
			var joined = this.state.direHeroes.concat(hero);
			joined = joined.sort((a, b) => parseFloat(a.ID) - parseFloat(b.ID));

			this.setState({
				selectedDire: filteredArray,
				direHeroes: joined
			});
		}
	};

	//   filtering the hero selector to not include already chosen heroes. THIS SHOULD BE ONE METHOD IN FUTURE
	filterChosenRadiant = () => {
		let filtered = [];
		let filteredRadient = [];
		filtered = this.state.radiantHeroes;
		filteredRadient = filtered.filter(
			val => !this.state.selectedRadiant.includes(val)
		);
		this.setState({ radiantHeroes: filteredRadient });
	};

	filterChosenDire = () => {
		let filtered = [];
		let filteredDire = [];
		filtered = this.state.direHeroes;
		filteredDire = filtered.filter(
			val => !this.state.selectedDire.includes(val)
		);
		this.setState({ direHeroes: filteredDire });
	};

	render() {
		return (
			<div className="ui grid">
				<div className="ui row">
					<div className="four wide column">
						<HeroList
							onHeroSelect={this.onHeroSelect}
							heroes={this.state.radiantHeroes}
							team="radiant"
						/>
					</div>
					<div className="four wide column">
						<h1>Radiant:</h1>
						<ChosenHeroes
							onHeroSelect={this.removeHero}
							chosenHeroes={this.state.selectedRadiant}
							team="radiant"
						/>
						<h2>TOTALS</h2>
						<Totals
							totalRadiant={this.state.selectedRadiant}
							totalDire={this.state.selectedDire}
						/>
					</div>
					<div className="four wide column">
						<h1>Dire:</h1>
						<ChosenHeroes
							onHeroSelect={this.removeHero}
							chosenHeroes={this.state.selectedDire}
							team="dire"
						/>
					</div>
					<div className="four wide column">
						<HeroList
							onHeroSelect={this.onHeroSelect}
							heroes={this.state.direHeroes}
							team="dire"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
