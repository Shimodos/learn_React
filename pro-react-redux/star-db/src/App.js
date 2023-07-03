import React, { Component } from 'react';

import Header from './components/header/header';
import RandomPlanet from './components/random-planet/random-planet';
import PeoplePage from './components/people-page/people-page';

import SwapiService from './services/swapi-service';

import './app.scss';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    // const {
    //   getPerson,
    //   getStarship,
    //   getPersonImage,
    //   getStarshipImage,
    //   getAllPeople,
    //   getAllPlanets,
    // } = this.swapiService;

    return (
      <div>
        <Header />
        {planet}

        <button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        {/*<RandomPlanet />*/}

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
