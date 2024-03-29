import React from 'react';
import './error-indicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">BOOM!</span>
      <span>Something went wrong!</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
