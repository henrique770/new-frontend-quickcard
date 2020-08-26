import styled from 'styled-components';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

export const Options = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${(props) =>
    props.theme.InputBackground ? props.theme.InputBackground : `#FAFBFD`};
  box-shadow: 0px 1px 8px
    ${(props) =>
    props.theme.shadow ? props.theme.shadow : `rgba(20, 46, 110, 0.1)`};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const TextLimit = styled(HTMLEllipsis)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.textColorSecondary};
`;
