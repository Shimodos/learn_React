import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row/row';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';

import './people-page.scss';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
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

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
        {(i) => `${i.name} (${i.birth_year})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
