import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Card, Dashed, Text } from '../../lib';

storiesOf('Components | Dashed Border', module).add(
  'Dashed Border example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Grid container xs={12} justify="center">
          <Grid item xs={3}>
            <Card radius="10" alignItems="center" justifyContent="center">
              <div style={{ width: '100%' }}>
                <Text>dashed border</Text>
                <Dashed />
              </div>
            </Card>
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
      propTables: false,
      text: `

  ex:\n


  example dashed component use:\n

  ~~~js
  <h1>dashed border</h1>
  <Dashed />
  ~~~


`,
    },
  }
);
