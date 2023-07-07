import React, { Component } from 'react';

import PlanetDetails from '../sw-components/planet-ditails';
import { PlanetList } from '../sw-components/item-list';
import Row from '../row/row';

class PlanetPage extends Component {
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
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}

export default PlanetPage;
