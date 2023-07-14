import { createStore } from 'redux';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';

// Code Snippet: Redux Reducer
const store = createStore(reducer);

// Code Snippet: Redux Store
document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('rnd').addEventListener('click', () => {
  store.dispatch(rnd());
});

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);
