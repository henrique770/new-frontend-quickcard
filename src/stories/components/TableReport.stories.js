import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, TableReport } from '../../lib';

storiesOf('Components | TableReport', module).add(
  'TableReport example',
  () => (
    <>
      <div style={{ margin: '10rem' }}>
        <Grid container xs={12} justify="center">
          <Grid item xs={12} md={10}>
            <TableReport.Container titleTable="Table Report">
              <TableReport.Row>
                <TableReport.Data content="Gross Revenue" />
                <TableReport.Data content="R$ 106.250,36" bold />
              </TableReport.Row>
              <TableReport.Row>
                <TableReport.Data content="Net Revenue" />
                <TableReport.Data content="R$ 56.250,36" bold />
              </TableReport.Row>
              <TableReport.Row>
                <TableReport.Data content="Number of cancellations" />
                <TableReport.Data content="R$ 106.250,36" bold />
              </TableReport.Row>
              <TableReport.Row>
                <TableReport.Data content="Credit card payments" />
                <TableReport.Data content="R$ 56.250,36" bold />
              </TableReport.Row>
              <TableReport.Row>
                <TableReport.Data content="Number of professionals" />
                <TableReport.Data content="3478" bold />
              </TableReport.Row>
              <TableReport.Row>
                <TableReport.Data content="Number of new professionals" />
                <TableReport.Data content="789" bold />
              </TableReport.Row>
            </TableReport.Container>
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
      propTables: [TableReport.Container, TableReport.Data, TableReport.Row],
      text: `

  ex:\n

  example table report component use:\n

  ~~~js
    <TableReport.Container titleTable="Table Report">
      <TableReport.Row>
        <TableReport.Data content="Gross Revenue" />
        <TableReport.Data content="R$ 106.250,36" bold />
      </TableReport.Row>
      <TableReport.Row>
        <TableReport.Data content="Net Revenue" />
        <TableReport.Data content="R$ 56.250,36" bold />
      </TableReport.Row>
      <TableReport.Row>
        <TableReport.Data content="Number of cancellations" />
        <TableReport.Data content="R$ 106.250,36" bold />
      </TableReport.Row>
      <TableReport.Row>
        <TableReport.Data content="Credit card payments" />
        <TableReport.Data content="R$ 56.250,36" bold />
      </TableReport.Row>
      <TableReport.Row>
        <TableReport.Data content="Number of professionals" />
        <TableReport.Data content="3478" bold />
      </TableReport.Row>
      <TableReport.Row>
        <TableReport.Data content="Number of new professionals" />
        <TableReport.Data content="789" bold />
      </TableReport.Row>
    </TableReport.Container>
  ~~~


`,
    },
  }
);
