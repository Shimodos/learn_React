import React, { Component } from 'react';

import Header from './components/header/header';
import RandomPlanet from './components/random-planet/random-planet';
import PeoplePage from './components/people-page/people-page';

import SwapiService from './services/swapi-service';

import './app.scss';
import ItemList from './components/item-list/item-list';
import PersonDetails from './components/person-details/person-details';

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

        <PeoplePage />

        <div className="row mb2 m-lg-1">
          <div className="col-md-6">
            <ItemList
              OnItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => (
                <span>
                  {item.name} <button></button>{' '}
                </span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2 m-lg-1">
          <div className="col-md-6">
            <ItemList
              OnItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
