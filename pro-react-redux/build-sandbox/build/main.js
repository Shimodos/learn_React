// import 'core-js/stable';
//
// class App {
//   run = async (name = 'World') => {
//     console.log(`Hello ${name}`);
//     console.log([1, 2, [2, 3]].flat(2));
//   };
// }
//
// const app = new App();
// app
//   .run()
//   .then(() => console.log('done'))
//   .catch((err) => console.error(err));

import React from 'react';
import ReactDOM from 'react-dom';
const App = () => /*#__PURE__*/React.createElement("p", null, "Hello ");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));