import React from 'react';
import { Router } from 'react-router-dom';

import 'react-circular-progressbar/dist/styles.css';

import { GlobalStyles } from '~/lib';
import GlobalLocalStyles from '~/styles/global';

import Routes from './routes';
import history from '~/services/history';

import Pomodoro from '~/pages/Pomodoro';

function App() {
  return (
    <Router history={history}>
      <Pomodoro />

      <Routes />
      <GlobalStyles />
      <GlobalLocalStyles />
    </Router>
  );
}

export default App;
