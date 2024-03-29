import React from 'react';
import propTypes from 'prop-types';

import './row.scss';

const Row = ({ left, right }) => {
  return (
    <div className="people-page">
      <div className="row mb2 m-lg-1">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
      </div>
    </div>
  );
};

Row.propTypes = {
  left: propTypes.node,
  right: propTypes.node,
};

export default Row;
