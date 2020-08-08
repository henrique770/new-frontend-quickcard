import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 3rem 0;
`;

export const Card = styled.div`
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  border-radius: 1rem;

  ${({ shadow }) =>
    shadow
      ? `box-shadow: ${shadow};`
      : `box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);`};
`;

export const TitleTable = styled.h1`
  font-size: 1.8rem;
  letter-spacing: 0.1em;
  font-weight: bold;
  padding: 3rem 0 0 3rem;
  color: ${(props) =>
    props.theme.textColorPrimary ? props.theme.textColorPrimary : `#414D55`};
`;
