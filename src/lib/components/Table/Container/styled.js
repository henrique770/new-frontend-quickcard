import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 1rem;
  ${({ padding }) => (padding ? `padding: ${padding}` : `padding: 3rem;`)};
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  ${({ shadow }) =>
    shadow
      ? `box-shadow: ${shadow};`
      : `box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);`};
`;
