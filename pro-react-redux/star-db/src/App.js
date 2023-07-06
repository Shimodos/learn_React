import React, { Component } from 'react';

import Header from './components/header/header';
import RandomPlanet from './components/random-planet/random-planet';
import ErrorBoundary from './components/error-boundry/error-boundry';
import ItemDetails, { Record } from './components/item-details/item-details';

import Row from './components/row/row';

import SwapiService from './services/swapi-service';

import './app.scss';
// import ItemList from './components/item-list/item-list';
// import PeoplePage from './components/people-page/people-page';
import { PersonList } from './components/sw-components/item-list';
import { PlanetList } from './components/sw-components/item-list';
import { StarshipList } from './components/sw-components/item-list';

import { PersonDetails } from './components/sw-components/details';
import { PlanetDetails } from './components/sw-components/details';
import { StarshipDetails } from './components/sw-components/details';

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

    const { getPerson, getStarship } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={10} getData={getPerson} getImageUrl={this.swapiService.getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eye_color" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={this.swapiService.getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="cost_in_credits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundary>
        <div>
          <Header />
          {planet}

          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>

          <PersonList />
          <PlanetList />
          <StarshipList />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          {/*<PeoplePage />*/}

          {/*<Row left={personDetails} right={starshipDetails} />*/}
        </div>
      </ErrorBoundary>
    );
  }
}
