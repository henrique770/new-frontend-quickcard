import styled from 'styled-components';

export const Title = styled.div`
  display: flex;

  align-items: center;
  padding: 1rem 0;
  flex: 1;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.tableBorder ? props.theme.tableBorder : `#f0f0f0`};

  &:last-child {
    border-bottom: none;
  }
`;
