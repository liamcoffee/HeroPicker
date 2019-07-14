import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import RadiantList from "./RadiantList";
import ChosenRadient from "./ChosenRadiant";

class App extends React.Component {
  state = { radiantHeroes: [], selectedRadiant: [] };

  componentDidMount() {
    this.getRadiant();
  }

  getRadiant = () => {
    axios
      .get("./data.json")
      .then(res => {
        const initialList = res.data;
        this.setState({ radiantHeroes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onHeroSelect = hero => {
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
            <RadiantList
              onHeroSelect={this.onHeroSelect}
              heroes={this.state.radiantHeroes}
            />
          </div>
          <div className="five wide column">
            Radiant:
            <ChosenRadient
              onHeroSelect={this.removeRadiantHero}
              chosenHeroes={this.state.selectedRadiant}
            />
          </div>
          <div className="four wide column" />
        </div>
      </div>
    );
  }
}

export default App;
