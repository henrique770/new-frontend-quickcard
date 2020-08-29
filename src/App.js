import React, { useState, useEffect, useContext } from 'react';
import { Router } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Provider } from 'react-redux';
import { WatchLater, Close } from '@styled-icons/material-outlined';
import moment from 'moment';
import { GlobalStyles, Button } from '~/lib';
import GlobalLocalStyles from '~/styles/global';
import * as U from '~/styles/utilities';

import './config/ReactotronConfig';
import { useInterval } from '~/hooks/useInterval';
import Routes from './routes';
import history from '~/services/history';

import store from './store';

function App() {
  const themeContext = useContext(ThemeContext);

  const [active, setActive] = useState(false);
  const [breakVal, setBreakVal] = useState(5);
  const [sessionVal, setSessionVal] = useState(25);
  const [mode, setMode] = useState('session');
  const [time, setTime] = useState(null);

  useInterval(() => setTime(time - 1000), active ? 1000 : null);

  useEffect(() => {
    setTime(sessionVal * 60 * 1000);
  }, [sessionVal]);

  useEffect(() => {
    if (time === 0 && mode === 'session') {
      setActive(false);
      setMode('break');
      setTime(breakVal * 60 * 1000);
    } else if (time === 0 && mode === 'break') {
      setActive(false);
      setMode('session');
      setTime(sessionVal * 60 * 1000);
    }
  }, [time, breakVal, sessionVal, mode]);

  const handleReset = () => {
    setActive(false);
    setMode('session');
    setBreakVal(5);
    setSessionVal(25);
    setTime(25 * 60 * 1000);
  };

  const handlePomodoro = () => {
    setActive(true);
    setSessionVal(25);
  };

  const handleShortBreak = () => {
    setActive(true);
    setSessionVal(5);
  };

  const [isShow, setIsShow] = useState(false);

  return (
    <Provider store={store}>
      <Router history={history}>
        <U.ContainerPomodoro>
          <Button
            padding="0.7rem"
            bgColor={themeContext.backgroundSecondary}
            radius="4px"
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? (
              <Close size={30} color="#fe650e" />
            ) : (
              <WatchLater size={30} color="#fe650e" />
            )}
          </Button>

          {isShow && (
            <>
              <h1>{moment(time).format('mm:ss')}</h1>
              <button onClick={() => setActive(!active)}>
                {active ? `pausar` : `iniciar`}
              </button>
              <button onClick={() => handleReset()}>resetar</button>
            </>
          )}
        </U.ContainerPomodoro>

        <Routes />
        <GlobalStyles />
        <GlobalLocalStyles />
      </Router>
    </Provider>
  );
}

export default App;
