import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../../lib';

storiesOf('Layout | Grid', module).add(
  'Grid example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Grid container justify="center">
          <Grid container spacing={3} xs={8}>
            <Grid item xs={12}>
              <div className="boxgrid">xs=12 </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="boxgrid">xs=12 sm=6</div>
            </Grid>
            <Grid item xs={6}>
              <div className="boxgrid">xs=6</div>
            </Grid>
            <Grid item xs={3}>
              <div className="boxgrid">xs=3</div>
            </Grid>
            <Grid item xs={3}>
              <div className="boxgrid">xs=3</div>
            </Grid>
            <Grid item xs={3}>
              <div className="boxgrid">xs=3</div>
            </Grid>
            <Grid item xs={3}>
              <div className="boxgrid">xs=3</div>
            </Grid>
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
      propTables: [Grid],
      text: `

  ex:\n


  example grid components use:\n

  ~~~js
  <Grid container direction="row" justify="center" alignItems="center" spacing={2}>

  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
    <h1>.align content</h1>
  </Grid>

  </Grid>
  ~~~


`,
    },
  }
);
