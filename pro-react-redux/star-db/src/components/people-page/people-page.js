import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import SwapiService from '../../services/swapi-service';

import './people-page.scss';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="people-page">
        <div className="row mb2 m-lg-1">
          <div className="col-md-6">
            <ItemList
              OnItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPeople}
              renderItem={({ name, birth_year, gender }) => `${name} (${birth_year}, ${gender}) `}
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
