import styled from 'styled-components';

export const Card = styled.div`
  flex-direction: column;
  position: relative;
  ${({ noFlex }) => (noFlex ? `` : `display: flex`)};

  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};

  ${({ radius }) => (radius ? `border-radius: ${radius}px` : ``)};

  /* ${({ shadow }) =>
    shadow
      ? `box-shadow: ${shadow};`
      : `box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);`}; */
`;

export const TitleCard = styled.h1`
  padding: 3rem;
  font-size: 1.8rem;
  letter-spacing: 0.1em;
  font-weight: bold;
  color: ${(props) =>
    props.theme.textColorPrimary ? props.theme.textColorPrimary : `#414D55`};
`;

export const BodyCard = styled.div`
  ${({ noFlex }) => (noFlex ? `` : `display: flex`)};

  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : ``)};

  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : ``};

  ${({ paddingBody }) =>
    paddingBody ? `padding: ${paddingBody}` : `padding: 3rem;`};
`;
