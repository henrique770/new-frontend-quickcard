/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Image, Grid } from '../../lib';

import imagetest from '../../lib/assets/img/sunset.jpeg';
import imagetest2 from '../../lib/assets/img/landscape.jpeg';

storiesOf('Components | Image', module).add(
  'Image example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Grid container xs={12} justify="center">
          <Grid item xs={12} md={3}>
            <h1>normal</h1>

            <Image width="20" height="20">
              <img src={imagetest} alt="image" />
            </Image>
          </Grid>
          <Grid item xs={12} md={3}>
            <h1>radius</h1>
            <Image width="20" height="20" radius="50%">
              <img src={imagetest} alt="image" />
            </Image>
          </Grid>
          <Grid item xs={12} md={3}>
            <h1>cover</h1>
            <Image width="20" height="20" cover>
              <img src={imagetest2} alt="image" />
            </Image>
          </Grid>

          <Grid item xs={12} md={3}>
            <h1>contain</h1>
            <Image width="20" height="20" contain>
              <img src={imagetest2} alt="image" />
            </Image>
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
      propTables: [Image],
      text: `

  ex:\n


  ~~~js
  <Image width="20" height="20" radius="50" contain>
  ... image here
  </Image>

  ~~~


`,
    },
  }
);
