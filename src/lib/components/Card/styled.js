import styled from 'styled-components';

export const Card = styled.div`
  flex-direction: column;
  position: relative;
  ${({ noFlex }) => (noFlex ? `` : `display: flex`)};

  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};

  ${({ radius }) => (radius ? `border-radius: ${radius}px` : ``)};
`;

export const TitleCard = styled.h1`
  padding: 3rem;
  font-size: 1.8rem;
  letter-spacing: 0.1em;
  font-weight: bold;
  color: ${(props) =>
    props.theme.textColorPrimary ? props.theme.textColorPrimary : `#414D55`};
`;

export const TextFooter = styled.p`
  padding: 0 3rem 2rem 3rem;
  font-size: 1.4rem;
  color: #fe650e;
`;

export const BodyCard = styled.div`
  ${({ noFlex }) => (noFlex ? `` : `display: flex`)};
  ${({ textCenter }) => (textCenter ? `text-align: center;` : ``)};

  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : ``)};

  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : ``};

  ${({ paddingBody }) =>
    paddingBody ? `padding: ${paddingBody}` : `padding: 3rem;`};
`;
