import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Card, Checkbox } from '../../lib';

storiesOf('Components | Checkbox', module).add(
  'Checkbox example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Grid container xs={12} justify="center">
          <Grid item xs={3}>
            <Card radius="10" alignItems="center" justifyContent="flex-start">
              <Checkbox textLabel="Finished appointment" />
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
      propTables: [Checkbox],
      text: `

  ex:\n


  example Checkbox component use:\n

  ~~~js
    <Card radius="10">
    <Grid xs={12} container spacing={3}>
      <Grid container item xs={12} alignItems="center">
        <Checkbox textLabel="Finished appointment" />
      </Grid>
      <Grid container item xs={12} alignItems="center">
        <Checkbox colorCheckbox="#f00" textLabel="Buy pasta to dinner" />
      </Grid>
      <Grid container item xs={12} alignItems="center">
        <Checkbox disabled textLabel="Finished meal" />
      </Grid>
    </Grid>
  </Card>
  ~~~


`,
    },
  }
);
