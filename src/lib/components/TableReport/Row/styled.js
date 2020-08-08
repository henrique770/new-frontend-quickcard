import styled from 'styled-components';

export const Row = styled.tr`
  border-bottom: 1px solid
    ${(props) =>
      props.theme.tableBorder ? props.theme.tableBorder : `#f0f0f0`};

  &:last-child {
    border-bottom: none;
  }
`;
