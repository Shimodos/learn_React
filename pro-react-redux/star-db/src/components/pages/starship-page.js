import React, { Component } from 'react';

import StarshipDetails from '../sw-components/starship-ditails';
import { StarshipList } from '../sw-components/item-list';
import Row from '../row/row';

class StarshipPage extends Component {
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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}

export default StarshipPage;
