import React, { Component } from 'react';

import PersonDetails from '../sw-components/person-ditails';
import { PersonList } from '../sw-components/item-list';
import Row from '../row/row';

class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}

export default PeoplePage;
