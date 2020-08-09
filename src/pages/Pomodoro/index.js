import React, { useState, useEffect, useContext } from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

import {
  PlayCircleOutline,
  PauseCircleOutline,
  Replay,
} from '@styled-icons/material-outlined';

import { ThemeContext } from 'styled-components';

import moment from 'moment';
import { Grid, Spacing, Text, Button, Card } from '~/lib';

import Layout from '~/components/Layout';
import { useInterval } from '~/hooks/useInterval';

import * as U from '~/styles/utilities';

function Pomodoro() {
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

  console.log(time);

  return (
    <>
      <Layout childrenTitle={<U.Title component="h1">Baralhos</U.Title>}>
        <U.Responsive width="1180px" dsGreater="none" dsLess="block">
          <U.Responsive width="769px" dsGreater="none" dsLess="block">
            <U.Title component="h1">Baralhos</U.Title>
          </U.Responsive>
        </U.Responsive>
        <Spacing mb={1} />
        <Grid container xs={12} justify="center" alignItems="center">
          <Grid xs={12} md={4}>
            <Card
              noFlex
              textCenter
              paddingBody="3rem"
              radius="10"
              justifyContent="center"
            >
              <Text size={2} weight="bold" color="#fe650e">
                {mode === 'session' ? 'Sessão' : 'Pausa'}
              </Text>
              {/* <CircularProgressbar value={time} maxValue={1500000} /> */}
              <Text size={10} weight="bold">
                {moment(time).format('mm:ss')}
              </Text>
              <Grid container xs={12} justify="center">
                <Button
                  radius="8px"
                  bgColor={themeContext.backgroundSecondary}
                  shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                  padding="1rem"
                  onClick={() => setActive(!active)}
                >
                  {active ? (
                    <PauseCircleOutline size={40} color="#fe650e" />
                  ) : (
                    <PlayCircleOutline size={40} color="#fe650e" />
                  )}
                </Button>
                <Spacing mr={2} />

                <Button
                  radius="8px"
                  bgColor={themeContext.backgroundSecondary}
                  shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                  padding="1rem"
                  onClick={() => handleReset()}
                >
                  <Replay size={40} color="#fe650e" />
                </Button>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Pomodoro;
