/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import media from 'styled-media-query';
import { storiesOf } from '@storybook/react';
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline';
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline';
import {
  Dashboard,
  CalendarToday,
  PeopleOutline,
  Message,
  DoneAll,
  CardGiftcard,
  Notifications,
} from '@styled-icons/material-outlined';
import {
  Grid,
  Header,
  Menu,
  Input,
  Text,
  GetSizeScreen,
  useOutsideClick,
} from '../../lib';
import profilepic from '../../assets/h.png';
import logo from '../../assets/logo_quickcard.png';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const MainContent = styled.div`
  /* margin-left: 26rem; */
  ${media.lessThan('768px ')`
  margin-left: 0;
  `}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerLimit = styled.div`
  max-width: 160rem;
  padding: 0 3rem 0 0;
  width: 100%;
  ${media.lessThan('1700px')`
    padding: 0 10rem!important;
  `}

  ${media.lessThan('1380px')`
    padding: 0 3.5rem!important;
  `}
`;

storiesOf('Layout | Header Menu', module).add(
  'Header / Menu example',
  () => {
    const [open, setOpen] = useState(false);
    const { width } = GetSizeScreen();
    const node = useRef();

    useOutsideClick(node, () => {
      if (open) setOpen(false);
    });

    return (
      <>
        <div style={{ margin: '10rem' }}>
          <Wrapper>
            <div ref={node}>
              <Menu.Container
                style={{ position: 'inherit', background: 'transparent' }}
                open={open}
                setOpen={setOpen}
                importantImage={profilepic}
                importantText="Emergency help"
                logo={logo}
              >
                <Menu.Item
                  title="Dashboard"
                  link="/#Dashboard"
                  icon={<Dashboard size={20} color="#fe650e" />}
                />

                <Menu.Item
                  title="Appointments"
                  link="/#Appointments"
                  icon={<CalendarToday size={20} color="#fe650e" />}
                />

                <Menu.Item
                  active
                  title="Pacients"
                  link="/#Pacients"
                  icon={<PeopleOutline size={20} color="#fe650e" />}
                />

                <Menu.Item
                  title="Submenu"
                  icon={<Message size={20} color="#fe650e" />}
                >
                  <Menu.SubItem>
                    <a href="/#1">
                      <Text>Upcomming</Text>
                    </a>
                    <a href="/#2">
                      <Text>Archive</Text>
                    </a>
                    <a href="/#3">
                      <Text>sub3</Text>
                    </a>
                  </Menu.SubItem>
                </Menu.Item>

                <Menu.Item
                  title="Patients"
                  link="/#Patients"
                  icon={<CardGiftcard size={20} color="#fe650e" />}
                />

                <Menu.Item
                  title="Doctors"
                  link="/#Doctors"
                  icon={<DoneAll size={20} color="#fe650e" />}
                />

                <Menu.Item
                  title="Messages"
                  link="/#Messages"
                  icon={<Dashboard size={20} color="#fe650e" />}
                />

                <Menu.Item
                  title="Reviews"
                  link="/#Reviews"
                  icon={<CalendarToday size={20} color="#fe650e" />}
                />
              </Menu.Container>
            </div>
            <MainContent>
              <ContainerLimit>
                <Grid item xs={12}>
                  <Header
                    open={open}
                    setOpen={setOpen}
                    image={profilepic}
                    description="patient"
                    iconNotification={
                      <Notifications size={30} color="#fe650e" />
                    }
                    notificationActive
                    name="Henrique Leal Araújo"
                    icon={<MenuOutline size={30} color="#fe650e" />}
                  >
                    {width > 768 && (
                      <Grid xs={12} sm={6} md={7}>
                        <Input
                          icon={<SearchOutline size={17} color="#636D73" />}
                          type="email"
                          padding="1rem 1.6rem 1rem 4.6rem"
                          radius="8px"
                          placeholder="Search deck, notes"
                        />
                      </Grid>
                    )}
                  </Header>
                </Grid>
              </ContainerLimit>
            </MainContent>
          </Wrapper>
        </div>
      </>
    );
  },
  {
    centered: { disable: true },
    info: {
      inline: true,
      source: false,
      propTables: [Header, Menu.Container, Menu.Item, Menu.SubItem],
      text: `

  ex:\n


  hooks to use:\n

  ~~~js
  const [open, setOpen] = useState(false);
  const { width } = GetSizeScreen();
  const node = useRef();

  useOutsideClick(node, () => {
    if (open) setOpen(false);
  });
  ~~~

  example:
  ~~~js
      <div style={{ margin: '10rem' }}>
      <Wrapper>
        <div ref={node}>
          <Menu.Container
            style={{ position: 'inherit', background: 'transparent' }}
            open={open}
            setOpen={setOpen}
            importantImage={profilepic}
            importantText="Emergency help"
            logo={logo}
          >
          <Menu.Item
          title="Dashboard"
          link="/#Dashboard"
          icon={<Dashboard size={20} color="#fe650e" />}
        />

        <Menu.Item
          title="Appointments"
          link="/#Appointments"
          icon={<CalendarToday size={20} color="#fe650e" />}
        />

        <Menu.Item
          active
          title="Pacients"
          link="/#Pacients"
          icon={<PeopleOutline size={20} color="#fe650e" />}
        />

        <Menu.Item
          title="Submenu"
          icon={<Message size={20} color="#fe650e" />}
        >
          <Menu.SubItem>
            <a href="/#1">
              <Text>Upcomming</Text>
            </a>
            <a href="/#2">
              <Text>Archive</Text>
            </a>
            <a href="/#3">
              <Text>sub3</Text>
            </a>
          </Menu.SubItem>
        </Menu.Item>
          </Menu.Container>
        </div>
        <MainContent>
          <ContainerLimit>
            <Grid item xs={12}>
              <Header
                open={open}
                setOpen={setOpen}
                image={profilepic}
                name="Rebecca K. Bartlett"
                icon={<MenuOutline size={30} color="#fe650e" />}
              >
                {width > 768 && (
                  <Grid xs={12} sm={6} md={7}>
                    <Input
                      icon={<SearchOutline size={17} color="#636D73" />}
                      type="email"
                      padding="1rem 1.6rem 1rem 4.6rem"
                      radius="8px"
                      placeholder="Search patients or doctors"
                    />
                  </Grid>
                )}
              </Header>
            </Grid>
          </ContainerLimit>
        </MainContent>
      </Wrapper>
    </div>
    ~~~


`,
    },
  }
);
