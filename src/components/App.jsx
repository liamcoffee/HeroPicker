import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import HeroList from "./HeroList";
import ChosenRadient from "./ChosenRadiant";
import ChosenDire from "./ChosenDire";

class App extends React.Component {
  state = {
    radiantHeroes: [],
    selectedRadiant: [],
    selectedDire: [],
    direHeroes: []
  };

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
    this.setState(
      { selectedRadiant: this.state.selectedRadiant.concat(hero) },
      () => this.filterChosenRadiant()
    );
  };

  removeRadiantHero = hero => {
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
  };

  testfunction = () => {
    console.log("this works");
  };

  //   filtering the hero selector to not include already chosen heroes.
  filterChosenRadiant = () => {
    let filtered = [];
    let filteredRadient = [];
    filtered = this.state.radiantHeroes;
    filteredRadient = filtered.filter(
      val => !this.state.selectedRadiant.includes(val)
    );
    this.setState({ radiantHeroes: filteredRadient });
    console.log("chosen", this.state.selectedRadiant);
    console.log("filtered", filteredRadient);
  };

  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <HeroList
              onHeroSelect={this.onHeroSelect}
              heroes={this.state.radiantHeroes}
            />
          </div>
          <div className="four wide column">
            <h1>Radiant:</h1>
            <ChosenRadient
              onHeroSelect={this.removeRadiantHero}
              chosenHeroes={this.state.selectedRadiant}
            />
          </div>
          <div className="four wide column">
            <h1>Dire:</h1>
            <ChosenDire
              onHeroSelect={this.removeRadiantHero}
              chosenHeroes={this.state.selectedDire}
            />
          </div>
          <div className="four wide column">
            <HeroList
              onHeroSelect={this.testfunction}
              heroes={this.state.direHeroes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
