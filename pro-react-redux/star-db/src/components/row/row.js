import React from 'react';

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

export default Row;
