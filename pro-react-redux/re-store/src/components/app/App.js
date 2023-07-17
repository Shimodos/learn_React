import React from 'react';
import './app.scss';

import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner/spinner';

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <Spinner />
      <ErrorIndicator />
    </div>
  );
}

export default App;
