import styled from 'styled-components';

import { Grid } from '~/lib';

export const NoteGrid = styled(Grid)`
  margin-bottom: 2rem;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  position: relative;
`;
