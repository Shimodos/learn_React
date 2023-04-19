import { createStore, combineReducers, compose } from 'redux';

import heroes from '../reducers/heroes';
import filters from '../reducers/filrters';

const enhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);

    const oldDispatch = store.dispatch;
    store.dispatch = (actions) => {
      if (typeof actions === 'string') {
        return oldDispatch({
          type: actions,
        });
      }
      return oldDispatch(actions);
    };
    return store;
  };

const store = createStore(
  combineReducers({ heroes, filters }),
  compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
