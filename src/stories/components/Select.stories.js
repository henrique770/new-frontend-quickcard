/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { KeyboardArrowDown } from '@styled-icons/material-twotone/KeyboardArrowDown';
import { storiesOf } from '@storybook/react';
import { Grid, Card, Select } from '../../lib';
import profilepic from '../../assets/profilepic.png';

const dataOptions = [
  {
    name: 'Rebecca K. Bartlett',
  },
];

storiesOf('Components | Select', module).add(
  'Select example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Card radius="10">
          <Grid xs={12} container spacing={3} justify="center">
            <Grid item xs={12} md={3}>
              <Select
                profile
                image={profilepic}
                icon={<KeyboardArrowDown size={30} color="#A2C0D4" />}
                options={dataOptions}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Select
                icon={<KeyboardArrowDown size={30} color="#A2C0D4" />}
                options={dataOptions}
              />
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  ),
  {
    centered: { disable: true },
    info: {
      inline: true,
      source: false,
      propTables: [Select],
      text: `

  ex:\n


  example select component use:\n

  ~~~js
    <Select
    profile
    image={profilepic}
    icon={<KeyboardArrowDown size={30} color="#A2C0D4" />}
    options={dataOptions}
    />
  ~~~


`,
    },
  }
);
