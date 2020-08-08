import React from 'react';

import { storiesOf } from '@storybook/react';

import { Text, Grid } from '../../lib';

storiesOf('Components | Text', module)
  .add(
    'Format text',
    () => (
      <div style={{ margin: '10rem' }}>
        <Grid container justify="center">
          <div>
            <Text size="5">Normal text</Text>
            <Text size="5" upper>
              Upper text
            </Text>
            <Text size="5" weight="bold">
              Bold text
            </Text>
          </div>
        </Grid>
      </div>
    ),
    {
      centered: { disable: true },
      info: {
        inline: true,
        source: false,
        propTables: [Text],
        text: `
    normal text:

    ~~~js
    <Text>Normal text</Text>
    ~~~

    upper text:

    ~~~js
    <Text upper>
        Upper text
    </Text>
    ~~~

    font weight: ( you can put other variations like: bolder, 200, 600, lighter, initial, unset ...)

    ~~~js
    <Text weight="bold">
    Bold text
    </Text>
    ~~~


  `,
      },
    }
  )
  .add(
    'Size',
    () => (
      <div style={{ margin: '10rem' }}>
        <Grid container justify="center">
          <div>
            <Text size="smallest">
              Size smallest <b>1rem</b>
            </Text>
            <div style={{ marginTop: 10 }} />
            <Text size="small">
              Size small <b>1.4rem</b>
            </Text>
            <div style={{ marginTop: 10 }} />
            <Text size="normal">
              Size normal <b>1.6rem</b>
            </Text>
            <div style={{ marginTop: 10 }} />
            <Text size="medium">
              Size medium <b>1.8rem</b>
            </Text>

            <div style={{ marginTop: 10 }} />
            <Text size="3">
              Size custom <b>any value</b>
            </Text>
          </div>
        </Grid>
      </div>
    ),
    {
      centered: { disable: true },
      info: {
        inline: true,
        source: false,
        propTables: [Text],
        text: `
        component:

        ~~~js
        <Text component="p" size="2" letter="medium" upper weight="bold">
          Size custom <b>any value</b>
        </Text>
        ~~~


      `,
      },
    }
  )
  .add(
    'Letter',
    () => (
      <div style={{ margin: '10rem' }}>
        <Grid container justify="center">
          <div>
            <Text size="3" letter="small">
              Letter small <b>0.1em</b>
            </Text>
            <Text size="3" letter="medium">
              Letter medium <b>0.2em</b>
            </Text>
            <Text size="3" letter="big">
              Letter big <b>0.3em</b>
            </Text>
            <Text size="3" letter=".4">
              Letter custom <b>any value em</b>
            </Text>
          </div>
        </Grid>
      </div>
    ),
    {
      centered: { disable: true },
      info: {
        inline: true,
        source: false,
        propTables: [Text],
        text: `

        The options can be: small 0.1em, medium 0.2em, big 0.3em

          ~~~js
          <Text size="3" letter="small">
            Letter small <b>0.1em</b>
          </Text>
          ~~~
      `,
      },
    }
  )

  .add(
    'Component variation',
    () => (
      <div style={{ margin: '10rem' }}>
        <Grid container justify="center">
          <div>
            <Text component="h1" size="5">
              Component variation
            </Text>
            <Text component="p">Component variation</Text>
            <Text component="a">Component variation</Text>
          </div>
        </Grid>
      </div>
    ),

    {
      centered: { disable: true },
      info: {
        inline: true,
        source: false,
        propTables: [Text],
        text: `
  variations: h1, h2, h3, h4, h5, h6, p, span, a


  component variation with h1:

  ~~~js
  <Text component="h1">
    Component variation
  </Text>
  ~~~


`,
      },
    }
  )
  .add(
    'Text color',
    () => (
      <div style={{ margin: '10rem' }}>
        <Grid container justify="center">
          <div>
            <Text component="h1" size="5" color="#f59a00">
              Text color
            </Text>
            <Text component="h1" size="5" color="#715fc1">
              Text color
            </Text>
            <Text component="h1" size="5" color="purple">
              Text color
            </Text>
          </div>
        </Grid>
      </div>
    ),
    {
      centered: { disable: true },
      info: {
        inline: true,
        source: false,
        propTables: [Text],
        text: `
  the color can be customize


  ~~~js
  <Text color="#f00">
    Text color
  </Text>
  ~~~


`,
      },
    }
  );
