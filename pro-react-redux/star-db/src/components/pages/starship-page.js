// import React, { Component } from 'react';
//
// import StarshipDetails from '../sw-components/starship-ditails';
// import { StarshipList } from '../sw-components/item-list';
// import Row from '../row/row';
//
// class StarshipPage extends Component {
//   state = {
//     selectedPerson: null,
//   };
//
//   onItemSelected = (selectedItem) => {
//     this.setState({ selectedItem });
//   };
//
//   render() {
//     const { selectedItem } = this.state;
//
//     return (
//       <Row
//         left={<StarshipList onItemSelected={this.onItemSelected} />}
//         right={<StarshipDetails itemId={selectedItem} />}
//       />
//     );
//   }
// }
//
// export default StarshipPage;

import React from 'react';

import { StarshipList } from '../sw-components/item-list';
import {} from 'react-router-dom';

const StarshipPage = () => {
  return (
    <StarshipList
      onItemSelected={(itemId) => {
        const newPath = `/starships/${itemId}`;
      }}
    />
  );
};

export default StarshipPage;
