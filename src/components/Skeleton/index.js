import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '~/lib';

import * as U from '~/styles/utilities';
import * as S from './styled';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const dataAll = [
  { height: 310 },
  { height: 210 },
  { height: 310 },
  { height: 210 },
  { height: 310 },
  { height: 210 },
  { height: 210 },
  { height: 210 },
  { height: 310 },
  { height: 310 },
  { height: 310 },
  { height: 210 },
  { height: 210 },
  { height: 210 },
  { height: 310 },
];

export default function SkeletonLoad({ allnotes }) {
  return (
    <Grid>
      {allnotes ? (
        <U.NoteGridContainer>
          {dataAll.map((item) => {
            return (
              <S.NoteGrid>
                <Skeleton animation="wave" height={item.height} />
              </S.NoteGrid>
            );
          })}
        </U.NoteGridContainer>
      ) : (
        <U.NoteGridContainer>
          {data.map(() => {
            return (
              <S.NoteGrid>
                <Skeleton animation="wave" height={196} />
              </S.NoteGrid>
            );
          })}
        </U.NoteGridContainer>
      )}
    </Grid>
  );
}
