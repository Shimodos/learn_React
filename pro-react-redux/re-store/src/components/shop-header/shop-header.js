import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.scss';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link to="/" className="logo text-dark">
        ReStore
      </Link>
      <Link to="cart" className="shopping-cart">
        <i className="cart-icon fa-solid fa-cart-shopping" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default ShopHeader;
