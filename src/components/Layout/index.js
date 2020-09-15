/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useState,
  useRef,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import PropTypes from 'prop-types';
import {
  Notifications,
  Dashboard,
  AccountCircle,
  Delete,
  CalendarToday,
  PeopleOutline,
  DoneAll,
  Brightness2,
  Brightness5,
} from '@styled-icons/material-outlined';
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline';
import { createBrowserHistory } from 'history';
import { ThemeContext } from 'styled-components';
import { useOutsideClick, Menu, Grid, Spacing, Text } from '~/lib';
import { useTheme } from '~/components/ThemeContext';

import DefaultProfileImage from '~/utils/ProfileImage';
import whiteLogo from '~/assets/img/white_main_logo.png';
import darkLogo from '~/assets/img/logo_quickcard.png';
import api from '~/services/api';
import { notifications } from '~/data/fake';

import history from '~/services/history';
import { AuthContext } from '~/context/AuthContext';

import * as S from './styled';

const url = 'http://quickcard-io.herokuapp.com/api/v1';

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
      func: () => history.push('/profile'),
      icon: <AccountCircle size={25} />,
    },
  ];

  const { signOut, user } = useContext(AuthContext);
  const { _id } = user;

  const [userData, SetUserData] = useState();

  const fetchData = useCallback(async () => {
    const response = await api.get(`student/${_id}`);

    const result = response.data;

    SetUserData({
      name: result.name ? result.name : undefined,
      email: result.email ? result.email : undefined,
    });
  }, [_id]);

  const [, setHasImage] = useState();
  const [fileUpload, setFileUpload] = useState();
  const fetchImage = useCallback(async () => {
    try {
      await api.get(`student/imgProfile/${_id}`);
      setFileUpload(`${url}/student/imgProfile/${_id}`);
    } catch {
      setHasImage(false);
      setFileUpload(null);
    }
  }, [_id]);

  useEffect(() => {
    fetchData();
    fetchImage();
  }, [fetchData, fetchImage]);

  return (
    <S.Wrapper>
      <div ref={node}>
        <Menu.Container
          open={open}
          setOpen={setOpen}
          linkLogo="/"
          logo={themeContext.mode === 'dark' ? whiteLogo : darkLogo}
        >
          <Menu.Item
            active={currentRoute === '/'}
            title="Baralhos"
            link="/"
            icon={<Dashboard size={20} color="#fe650e" />}
          />

          <Menu.Item
            active={currentRoute === '/dash'}
            title="Todas as notas"
            link="/dash"
            icon={<CalendarToday size={20} color="#fe650e" />}
          />

          <Menu.Item
            active={currentRoute === '/notepad'}
            title="Blocos de notas"
            link="/notepad"
            icon={<PeopleOutline size={20} color="#fe650e" />}
          />

          <Menu.Item
            active={currentRoute === '/statistics'}
            title="Estatísticas"
            link="/statistics"
            icon={<DoneAll size={20} color="#fe650e" />}
          />
          {themeContext.mode === 'dark' ? (
            <Menu.Item
              onClick={() => themeToggle.toggleTheme()}
              title="Tema Claro"
              link
              icon={<Brightness5 size={20} color="#fe650e" />}
            />
          ) : (
            <Menu.Item
              onClick={() => themeToggle.toggleTheme()}
              title="Tema Escuro"
              link
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
                    image={
                      fileUpload == null ? DefaultProfileImage() : fileUpload
                    }
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
                    name={userData ? userData.name : ``}
                    logoutFunc={signOut}
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
