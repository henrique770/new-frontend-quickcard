import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyles } from '~/lib';
import GlobalLocalStyles from '~/styles/global';

import './config/ReactotronConfig';

import Routes from './routes';
import history from '~/services/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <GlobalLocalStyles />
      </Router>
    </Provider>
  );
}

export default App;
