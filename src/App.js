import React from 'react';
import { Router } from 'react-router-dom';

import 'react-circular-progressbar/dist/styles.css';

import { GlobalStyles } from '~/lib';
import GlobalLocalStyles from '~/styles/global';
import { MyThemeProvider } from '~/components/ThemeContext';
import { AuthProvider } from '~/context/AuthContext';
import Routes from './routes';
import history from '~/services/history';

import Pomodoro from '~/pages/Pomodoro';

function App() {
  return (
    <AuthProvider>
      <MyThemeProvider>
        <Router history={history}>
          <Pomodoro />
          <Routes />
          <GlobalStyles />
          <GlobalLocalStyles />
        </Router>
      </MyThemeProvider>
    </AuthProvider>
  );
}

export default App;
