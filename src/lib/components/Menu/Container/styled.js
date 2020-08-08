import styled from 'styled-components';
import media from 'styled-media-query';

export const Menu = styled.div`
  background: ${(props) =>
    props.theme.background ? props.theme.background : `#fff`};
  width: 26rem;
  height: 100%;
  overflow-y: auto !important;
  padding: 4rem 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 99;

  ${media.lessThan('medium')`
    width: 100%;
    max-width: 25rem;
    position: fixed;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 9rem;
    transition: transform 0.3s ease-in-out;
    margin-top: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

    background: ${(props) =>
      props.theme.backgroundSecondary
        ? props.theme.backgroundSecondary
        : `#fff`};
  `}
`;

export const SessionImportantContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

export const AlignInfo = styled.div`
  margin-left: 2rem;
`;

export const MainAlign = styled.div`
  padding-left: 5rem;
`;

export const ImportantImage = styled.img`
  border-radius: 0.8rem;
  height: 4rem;
  width: 4rem;
  object-fit: cover;
`;

export const TextCard = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) =>
    props.theme.textColorSecondary
      ? props.theme.textColorSecondary
      : `#414D55`};
`;

export const ItemsContainer = styled.div`
  display: flex;
  padding-left: 5rem;
`;

export const AlignItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Logo = styled.img`
  max-width: 15rem;
  margin-bottom: 4rem;
  margin-top: -4px;
`;
