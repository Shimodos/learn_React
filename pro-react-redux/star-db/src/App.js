import React, { Component } from 'react';

import Header from './components/header/header';
import RandomPlanet from './components/random-planet/random-planet';
import ErrorBoundary from './components/error-boundry/error-boundry';

import SwapiService from './services/swapi-service';
import { SwapiServiceProvider } from './components/swapi-serwice-contex/swapi-serwice-contex';

import PeoplePage from './components/pages/people-page';
import PlanetPage from './components/pages/planet-page';
import StarshipPage from './components/pages/starship-page';

import './app.scss';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    // showRandomPlanet: true,
  };

  // toggleRandomPlanet = () => {
  //   this.setState((state) => {
  //     return {
  //       showRandomPlanet: !state.showRandomPlanet,
  //     };
  //   });
  // };

  render() {
    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />

            {/*<button*/}
            {/*  className="toggle-planet btn btn-warning btn-lg"*/}
            {/*  onClick={this.toggleRandomPlanet}*/}
            {/*>*/}
            {/*  Toggle Random Planet*/}
            {/*</button>*/}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
