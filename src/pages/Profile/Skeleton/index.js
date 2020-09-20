import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import * as U from '~/styles/utilities';
import { Spacing, Grid, Text } from '~/lib';

export default function SkeletonLoad() {
  return (
    <U.FormCard>
      <Spacing mt={1.5} />
      <Grid
        xs={12}
        container
        justify="center"
        direction="column"
        alignItems="center"
      >
        <Skeleton width={140} height={140} variant="circle" />

        <Spacing mr={2} mb={2} />
        <Grid
          container
          xs={12}
          justify="center"
          item
          style={{ textAlign: 'center' }}
        >
          <div>
            <Text component="h1" size={1.8}>
              <Skeleton width={170} />
            </Text>
            <Spacing mb={1} />
            <Text
              size={1.3}
              component="a"
              style={{ textDecoration: 'none' }}
              href="mailto:"
              color="#636D73"
            >
              <Skeleton width={170} />
            </Text>
          </div>
        </Grid>
      </Grid>
    </U.FormCard>
  );
}
