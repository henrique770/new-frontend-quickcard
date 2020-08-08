import styled from 'styled-components';
import media from 'styled-media-query';
import { Grid } from '~/lib';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: #fff;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  input {
    width: 35rem;
    ${media.lessThan('medium')`
    width: 30rem;
    `}
    padding: 1.5rem;
    border: solid 1px ${(props) => props.theme.borderColor};
    border-radius: 0.4rem;
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
