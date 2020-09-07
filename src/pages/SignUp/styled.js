import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { Grid } from '~/lib';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: ${(props) => props.theme && props.theme.backgroundAuth};
`;

const appearFromRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  animation: ${appearFromRight} 1s;
  input {
    width: 35rem;
    ${media.lessThan('medium')`
    width: 30rem;
    `}
  }
`;

export const GridForm = styled(Grid)`
  width: 35rem;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${(props) => props.theme && props.theme.backgroundAuth};
  z-index: 999;
`;

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100vh;
    position: absolute;
    object-fit: cover;
  }
`;
