import React from 'react';
import ReactDOM from 'react-dom/client';

import Countrer from './countrer';

import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

// Code Snippet: Redux Reducer
const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Countrer
        counter={store.getState()}
        inc={inc}
        dec={dec}
        rnd={() => {
          const value = Math.floor(Math.random() * 10);
          rnd(value);
        }}
      />
    </React.StrictMode>
  );
};
update();
store.subscribe(update);
