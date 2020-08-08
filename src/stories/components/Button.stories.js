import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Button, Text } from '../../lib';

storiesOf('Components | Button', module).add(
  'Button example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Grid container xs={12} justify="center" spacing={2}>
          <Grid container xs={8}>
            <Grid item xs>
              <Button radius="20px">
                <Text component="h1">test button</Text>
              </Button>
            </Grid>
            <Grid item xs>
              <Button radius="20px" bgColor="#f00" Bghover="#000">
                <Text component="h1">test button</Text>
              </Button>
            </Grid>
            <Grid item xs>
              <Button radius="20px" outlineColor="#f00">
                <Text component="h1" color="#000">
                  test button
                </Text>
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                radius="20px"
                bgColor="#fff"
                shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
              >
                <Text component="h1" color="#656565">
                  test button
                </Text>
              </Button>
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
      propTables: [Button],
      text: `

      ex:\n

      example button component use:\n

      ~~~js
      <Button radius="20px" bgColor="#f00" Bghover="#000">
      <Text component="h1">test button</Text>
      </Button>
      ~~~


	`,
    },
  }
);
