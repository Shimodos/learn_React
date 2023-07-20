import React from 'react';
import './shop-header.scss';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <a className="logo text-dark" href="#">
        ReStore
      </a>
      <a className="shopping-cart" href="#">
        <i className="cart-icon fa-solid fa-cart-shopping" />
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default ShopHeader;
