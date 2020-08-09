/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Notifications,
  Dashboard,
  AccountCircle,
  Delete,
  CalendarToday,
  PeopleOutline,
  WatchLater,
  DoneAll,
  Brightness2,
  Brightness5,
} from '@styled-icons/material-outlined';
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline';
import { createBrowserHistory } from 'history';
import { ThemeContext } from 'styled-components';
import { useOutsideClick, Menu, Grid, Spacing, Text } from '~/lib';
import { useTheme } from '~/components/ThemeContext';

import profilepic from '~/assets/img/h.png';
import whiteLogo from '~/assets/img/white_main_logo.png';
import darkLogo from '~/assets/img/logo_quickcard.png';

import { notifications } from '~/data/fake';

import history from '~/services/history';

import * as S from './styled';

function Layout({ children, childrenHeader, childrenTitle, noHeader }) {
  const themeToggle = useTheme();
  const themeContext = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const currentRoute = createBrowserHistory().location.pathname;
  const node = useRef();

  useOutsideClick(node, () => {
    if (open) setOpen(false);
  });

  const dropdownOptions = [
    {
      name: 'Perfil',
      func: () => history.push('/perfil'),
      icon: <AccountCircle size={25} />,
    },
  ];

  return (
    <S.Wrapper>
      <div ref={node}>
        <Menu.Container
          open={open}
          setOpen={setOpen}
          logo={themeContext.mode === 'dark' ? whiteLogo : darkLogo}
        >
          <Menu.Item
            active={currentRoute === '/'}
            title="Todas as notas"
            link="/"
            icon={<CalendarToday size={20} color="#fe650e" />}
          />
          <Menu.Item
            title="Baralhos"
            icon={<Dashboard size={20} color="#fe650e" />}
          />

          <Menu.Item
            active
            title="Blocos de notas"
            icon={<PeopleOutline size={20} color="#fe650e" />}
          />

          <Menu.Item
            title="Pomodoro"
            icon={<WatchLater size={20} color="#fe650e" />}
          />

          <Menu.Item
            title="Estatísticas"
            icon={<DoneAll size={20} color="#fe650e" />}
          />
          {themeContext.mode === 'dark' ? (
            <Menu.Item
              onClick={() => themeToggle.toggleTheme()}
              title="Tema Claro"
              icon={<Brightness5 size={20} color="#fe650e" />}
            />
          ) : (
            <Menu.Item
              onClick={() => themeToggle.toggleTheme()}
              title="Tema Escuro"
              icon={<Brightness2 size={20} color="#fe650e" />}
            />
          )}
        </Menu.Container>
      </div>
      <S.MainContent>
        <S.ContainerLimit>
          <Grid item xs={12}>
            {!noHeader && (
              <>
                <Spacing mt={0.6}>
                  <S.HeaderFormat
                    childrenTitle={childrenTitle}
                    dropDownOptions={dropdownOptions}
                    open={open}
                    setOpen={setOpen}
                    image={profilepic}
                    iconNotification={
                      <Notifications size={30} color="#fe650e" />
                    }
                    notificationActive
                    childrenNotification={
                      <>
                        <Spacing mt={2} mr={2} mb={2} ml={2}>
                          <Grid
                            container
                            justify="space-between"
                            alignItems="baseline"
                          >
                            <Text size={1.8} weight="bold">
                              Notificações
                            </Text>
                            {notifications.length === 0 ? (
                              <></>
                            ) : (
                              <S.CleanAllNotifications onClick={() => {}}>
                                <Text size={1.2}>Limpar tudo</Text>
                                <Spacing mr={1} />
                                <Delete size={20} />
                              </S.CleanAllNotifications>
                            )}

                            {notifications.length === 0 && (
                              <Grid container>
                                <Spacing mt={2}>
                                  <Text size={1.6}>Não há notificações</Text>
                                </Spacing>
                              </Grid>
                            )}
                          </Grid>
                        </Spacing>

                        <S.Scroll>
                          {notifications.map((opt) => (
                            <S.Notification
                              key={opt.id}
                              newNotification={opt.newNotification}
                              ReadNotification={opt.read}
                            >
                              <S.TitleNotification
                                newNotification={opt.newNotification}
                              >
                                <span>{opt.title}</span>
                              </S.TitleNotification>
                              <Text size={1.2}>{opt.content}</Text>
                              <Spacing mb={0.4} />
                              <Text size={1}>{opt.date}</Text>

                              <S.ContainerIconDelete>
                                <Delete size={20} />
                              </S.ContainerIconDelete>
                            </S.Notification>
                          ))}
                        </S.Scroll>
                      </>
                    }
                    icon={<MenuOutline size={30} color="#fe650e" />}
                    description="Admin"
                    name="Henrique Araújo"
                    logoutFunc={() => {}}
                  >
                    {childrenHeader}
                  </S.HeaderFormat>
                </Spacing>
              </>
            )}
            {children}
          </Grid>
        </S.ContainerLimit>
      </S.MainContent>
    </S.Wrapper>
  );
}

Layout.propTypes = {
  /**
   * children element
   */
  children: PropTypes.node,
  /**
   * children element of header
   */
  childrenHeader: PropTypes.node,
  /**
   * childrenTitle element of header
   */
  childrenTitle: PropTypes.node,
  /**
   * children element of header
   */
  noHeader: PropTypes.bool,
};

export default Layout;
