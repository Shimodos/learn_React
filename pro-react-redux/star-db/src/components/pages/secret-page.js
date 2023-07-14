import React from 'react';
import { Navigate } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div className="jumbotron text-center">This page is full of secrets!!!</div>;
  }

  return <Navigate to="/login" />;
};

export default SecretPage;
