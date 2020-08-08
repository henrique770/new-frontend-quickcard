import styled from 'styled-components';

export const Dashed = styled.div`
  width: 100%;
  border-bottom: 1px dashed
    ${(props) =>
      props.theme.borderColor ? props.theme.borderColor : `#25292d`};
`;
