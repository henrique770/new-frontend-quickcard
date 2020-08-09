import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { MyThemeProvider } from '~/components/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <MyThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </MyThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
