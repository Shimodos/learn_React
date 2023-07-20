import React from 'react';

import './shopping-cart-table.scss';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>1</th>
            <th>Site Reliability Engineer</th>
            <th>2</th>
            <th>$40</th>
            <th>
              <button className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
              </button>
              <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>

      <div className="total">Total: $201</div>
    </div>
  );
};

export default ShoppingCartTable;
