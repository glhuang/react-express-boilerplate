require('./styles/app.scss');

/**

HMR will only work if the root component is NOT a stateless functional component

This will be addressed by upgrading the react-hot-loader from v.1.x to v3.x

source:
https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md

*/

import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld';

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
