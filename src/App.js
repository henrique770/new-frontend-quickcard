import React from 'react';
import { Router } from 'react-router-dom';

import 'react-circular-progressbar/dist/styles.css';

// import { Provider } from 'react-redux';

import { GlobalStyles } from '~/lib';
import GlobalLocalStyles from '~/styles/global';

import './config/ReactotronConfig';
import Routes from './routes';
import history from '~/services/history';

import Pomodoro from '~/pages/Pomodoro';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <Router history={history}>
      <Pomodoro />

      <Routes />
      <GlobalStyles />
      <GlobalLocalStyles />
    </Router>
    // </Provider>
  );
}

export default App;
