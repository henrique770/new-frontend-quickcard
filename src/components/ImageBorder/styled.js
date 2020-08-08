import styled from 'styled-components';
import { Image } from '~/lib';

export const ImageContainer = styled(Image)`
  img {
    border: solid 1px
      ${(props) => (props.theme.mode === 'light' ? '#d8dcdf' : '#25292D')};
  }
`;
