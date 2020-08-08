import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline';
import { storiesOf } from '@storybook/react';
import { Grid, Input } from '../../lib';

storiesOf('Components | Input', module).add(
  'Input example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Grid container xs={12} justify="center">
          <Grid item xs={12} md={3}>
            <Input
              icon={<SearchOutline size={17} color="#636D73" />}
              type="email"
              padding="1rem 1.6rem 1rem 4.6rem"
              radius="8px"
              required
              InputLabel="search"
              placeholder="test"
            />
          </Grid>
        </Grid>
      </div>
    </>
  ),
  {
    centered: { disable: true },
    info: {
      inline: true,
      source: false,
      propTables: [Input],
      text: `

  ex:\n


  example input component use:\n

  ~~~js
    <Input
    icon={<SearchOutline size={17} color="#636D73" />}
    type="email"
    padding="1rem 1.6rem 1rem 4.6rem"
    radius="8px"
    required
    InputLabel="search"
    placeholder="test"
    />
  ~~~


`,
    },
  }
);
