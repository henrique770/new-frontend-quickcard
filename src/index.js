import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { MyThemeProvider } from '~/components/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <MyThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
