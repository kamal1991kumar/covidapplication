import React from 'react';
import ReactDOM from 'react-dom';
import Init from './pages/index';
import '../src/scss/style.scss'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Init />,
  document.getElementById('root')
);

serviceWorker.unregister();
