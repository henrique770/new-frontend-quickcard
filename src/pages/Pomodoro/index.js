import React, { useState, useEffect, useContext } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  PlayCircleOutline,
  PauseCircleOutline,
  Replay,
  WatchLater,
  RemoveCircle,
} from '@styled-icons/material-outlined';

import { ThemeContext } from 'styled-components';

import moment from 'moment';

import { Grid, Spacing, Text, Button } from '~/lib';
import { useInterval } from '~/hooks/useInterval';
import * as U from '~/styles/utilities';

function Pomodoro() {
  const local = JSON.parse(localStorage.getItem('@QuickCard:pomodoro'));
  const themeContext = useContext(ThemeContext);

  const [active, setActive] = useState(local === null ? false : local.active);
  const [breakVal, setBreakVal] = useState(5);
  const [sessionVal, setSessionVal] = useState(() => {
    const storageTime = local === null ? 25 : local.time / 60 / 1000;
    if (storageTime < 25) {
      return storageTime;
    }
    return 25;
  });

  const [mode, setMode] = useState('session');
  const [time, setTime] = useState(null);

  useInterval(() => setTime(time - 1000), active ? 1000 : null);

  useEffect(() => {
    if (active) {
      localStorage.setItem(
        '@QuickCard:pomodoro',
        JSON.stringify({ active, time })
      );
    }
  }, [active, time]);

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
    localStorage.setItem(
      '@QuickCard:pomodoro',
      JSON.stringify({ active: false, time: 1500000 })
    );
  };

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <U.ContainerPomodoro>
        {!isShow && (
          <Button
            padding="0.7rem"
            bgColor="#fe650e"
            radius="50%"
            onClick={() => setIsShow(true)}
          >
            <WatchLater size={30} color="#fff" />
          </Button>
        )}

        {isShow && (
          <U.PomodoroCard
            noFlex
            textCenter
            paddingBody="2rem 4rem"
            radius="10"
            shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
            justifyContent="center"
          >
            <Text size={1.4} weight="bold" color="#fe650e">
              {mode === 'session' ? 'Sessão' : 'Pausa'}
            </Text>
            <Spacing mt={1} />
            <U.ProgressContainer>
              <CircularProgressbar
                text={moment(time).format('mm:ss')}
                value={time}
                maxValue={
                  (sessionVal === 25 && 1500000) || (sessionVal === 5 && 300000)
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
            </U.ProgressContainer>

            <Spacing mb={2} />
            <Grid container xs={12} justify="center" spacing={2}>
              <Grid item xs={6}>
                <U.ButtonResponsive
                  radius="8px"
                  style={{ width: 60 }}
                  bgColor={themeContext.backgroundButtonPomodoro}
                  shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                  padding="1rem"
                  onClick={() => setActive(!active)}
                >
                  {active ? (
                    <PauseCircleOutline size={20} color="#fe650e" />
                  ) : (
                    <PlayCircleOutline size={20} color="#fe650e" />
                  )}
                </U.ButtonResponsive>
              </Grid>
              <Grid item xs={6}>
                <U.ButtonResponsive
                  radius="8px"
                  style={{ width: 60 }}
                  bgColor={themeContext.backgroundButtonPomodoro}
                  shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                  padding="1rem"
                  onClick={() => handleReset()}
                >
                  <Replay size={20} color="#fe650e" />
                </U.ButtonResponsive>
              </Grid>
            </Grid>
            <U.ButtonClose onClick={() => setIsShow(false)}>
              <RemoveCircle style={{ cursor: 'pointer' }} size={25} />
            </U.ButtonClose>
          </U.PomodoroCard>
        )}
      </U.ContainerPomodoro>
    </>
  );
}

export default Pomodoro;
