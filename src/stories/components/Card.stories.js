import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Card } from '../../lib';

storiesOf('Components | Card', module).add(
  'Card example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Grid container xs={12} justify="center">
          <Grid item xs={3}>
            <Card
              titleCard="title"
              paddingBody="0 3rem 3rem 3rem"
              radius="10"
              alignItems="center"
              justifyContent="center"
            >
              Card Content
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
      propTables: [Card],
      text: `

  ex:\n


  example card component use:\n

  ~~~js
    <Card
    title={<h1 style={{ fontSize: 18 }}>title</h1>}
    paddingBody="0 3rem 3rem 3rem"
    radius="10"
    justifyContent="center"
    >
    Card Content
    </Card>
  ~~~


`,
    },
  }
);
