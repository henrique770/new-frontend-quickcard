import React, { useState, useEffect, useContext } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  PlayCircleOutline,
  PauseCircleOutline,
  Replay,
} from '@styled-icons/material-outlined';

import { ThemeContext } from 'styled-components';

import moment from 'moment';
import { Helmet } from 'react-helmet';
import { Grid, Spacing, Text, Button, Card } from '~/lib';

import { useInterval } from '~/hooks/useInterval';

import * as S from './styled';
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

  const handlePomodoro = () => {
    setSessionVal(25);
  };

  const handleShortBreak = () => {
    setSessionVal(5);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pomodoro: {moment(time).format('mm:ss')}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <S.Container>
        <Grid container xs={12} justify="center" alignItems="center">
          <Grid xs={12} md={4}>
            <Card
              titleCard="Pomodoro"
              noFlex
              textCenter
              paddingBody="0 3rem 3rem 3rem"
              radius="10"
              justifyContent="center"
            >
              <Text size={2} weight="bold" color="#fe650e">
                {mode === 'session' && sessionVal === 25 ? 'Sessão' : 'Pausa'}
              </Text>
              <Spacing mt={2} mb={3}>
                <Grid container justify="center">
                  <S.ProgressContainer>
                    <CircularProgressbar
                      text={moment(time).format('mm:ss')}
                      value={time}
                      maxValue={
                        (sessionVal === 25 && 1500000) ||
                        (sessionVal === 5 && 300000)
                      }
                      styles={{
                        root: {},

                        path: {
                          stroke: `rgba(62, 152, 199, ${
                            moment(time).format('mm:ss') / 100
                          })`,

                          strokeLinecap: 'butt',

                          transition: 'stroke-dashoffset 0.5s ease 0s',

                          transform: 'rotate(0.25turn)',
                          transformOrigin: 'center center',
                        },

                        trail: {
                          stroke: '#d6d6d6',

                          strokeLinecap: 'butt',

                          transform: 'rotate(0.25turn)',
                          transformOrigin: 'center center',
                        },
                      }}
                    />
                  </S.ProgressContainer>
                </Grid>
              </Spacing>

              <Grid container xs={12} justify="center" spacing={2}>
                <Grid item>
                  <U.ButtonResponsive
                    radius="8px"
                    bgColor={themeContext.backgroundSecondary}
                    shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                    padding="1rem"
                    style={{ height: 60 }}
                    onClick={() => handlePomodoro()}
                  >
                    <Text color="#fe650e">Pomodoro</Text>
                  </U.ButtonResponsive>
                </Grid>
                <Grid item>
                  <U.ButtonResponsive
                    radius="8px"
                    bgColor={themeContext.backgroundSecondary}
                    shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                    padding="1rem"
                    style={{ height: 60 }}
                    onClick={() => handleShortBreak()}
                  >
                    <Text color="#fe650e">Intervalo curto</Text>
                  </U.ButtonResponsive>
                </Grid>

                <Grid item>
                  <U.ButtonResponsive
                    radius="8px"
                    bgColor={themeContext.backgroundSecondary}
                    shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                    padding="1rem"
                    style={{ height: 60 }}
                    onClick={() => setActive(!active)}
                  >
                    {active ? (
                      <PauseCircleOutline size={40} color="#fe650e" />
                    ) : (
                      <PlayCircleOutline size={40} color="#fe650e" />
                    )}
                  </U.ButtonResponsive>
                </Grid>
                <Grid item>
                  <U.ButtonResponsive
                    radius="8px"
                    bgColor={themeContext.backgroundSecondary}
                    shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                    style={{ height: 60 }}
                    padding="1rem"
                    onClick={() => handleReset()}
                  >
                    <Replay size={40} color="#fe650e" />
                  </U.ButtonResponsive>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </S.Container>
    </>
  );
}

export default Pomodoro;
