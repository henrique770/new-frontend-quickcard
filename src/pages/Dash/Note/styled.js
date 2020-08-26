import styled from 'styled-components';
import media from 'styled-media-query';

import { Grid } from '~/lib';

export const GridAnnotation = styled(Grid)`
  ${media.lessThan('medium')`
flex-direction: column-reverse;
`}
`;
