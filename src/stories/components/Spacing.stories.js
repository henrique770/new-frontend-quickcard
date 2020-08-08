import React from 'react';

import { storiesOf } from '@storybook/react';

import { Spacing, Text, Grid } from '../../lib';

storiesOf('Layout | Spacing', module).add(
  'Spacing example',
  () => (
    <div style={{ margin: '10rem' }}>
      <Grid container xs={12} justify="center">
        <div style={{ background: '#111', borderRadius: 10, padding: 10 }}>
          <Spacing mt="5" mb="5" mr="20">
            <Text
              style={{ background: '#fff', borderRadius: 10 }}
              component="h1"
              size="5"
              color="#111"
            >
              Spacing
            </Text>
          </Spacing>
          <Spacing ml="5" mb="7">
            <Text
              style={{ background: '#fff', borderRadius: 10 }}
              component="h1"
              size="5"
              color="#f00"
            >
              Spacing
            </Text>
          </Spacing>
          <Spacing mb="5" mr="10">
            <Text
              style={{ background: '#fff', borderRadius: 10 }}
              component="h1"
              size="5"
              color="#715fc1"
            >
              Spacing
            </Text>
          </Spacing>
        </div>
      </Grid>
    </div>
  ),
  {
    centered: { disable: true },
    info: {
      inline: true,
      source: false,
      propTables: [Spacing],
      text: `

  ex:\n


  eq use
  ~~~js
  <Spacing mt="5" mr="5" ml="5" mb="5" ds="flex" justifyContent="center" />

  ~~~


`,
    },
  }
);
