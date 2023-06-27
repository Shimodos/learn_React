import React, { Component } from 'react';

import './item-add-form.scss';

export default class itemAddForm extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('Hello World')}
        >
          Add Item
        </button>
      </div>
    );
  }
}
