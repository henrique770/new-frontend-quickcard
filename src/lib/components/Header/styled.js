import styled from 'styled-components';
import media from 'styled-media-query';
import { darken } from 'polished';

export const Header = styled.div`
  padding: 4rem 0;
  display: flex;

  ${media.lessThan('medium')`
  top: 0;
  left: 0;
  width: 100%;
  `}
`;

export const TitleContainer = styled.div`
  margin-right: 4rem;
`;

export const SessionUserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 0 4rem;

  ${media.lessThan('medium')`
    margin-right: 0;
  `}
`;

export const DropDownContainer = styled.div`
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  border-radius: 0.8rem;
  ${({ shadow }) =>
    shadow
      ? `box-shadow: ${shadow};`
      : `box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);`};
  padding: 1rem;
  position: absolute;
  z-index: 999 !important;
  top: -21px;
  width: 277px;
  left: -122px;

  ${media.lessThan('885px')`
    top: -19px;
    left: -138px;
  `}

  ${media.lessThan('medium')`
    left: -138px;
  `}
`;

export const DropDownItem = styled.div`
  background: ${(props) =>
    props.theme.selectBackground ? props.theme.selectBackground : `#edeff569`};
  padding: 1rem 0 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.8rem;
  z-index: 999 !important;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    ${({ ...props }) =>
      `background: ${darken(
        0.1,
        props.theme.selectBackground
          ? props.theme.selectBackground
          : `#edeff569`
      )}`}
  }
`;

export const IconDropdownItem = styled.div`
  margin-right: 2rem;
`;

export const ImageProfile = styled.img`
  border-radius: 0.8rem;
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const ArrowDown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  border-radius: 50%;
`;

export const TextCard = styled.p`
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) =>
    props.theme.textColorSecondary
      ? props.theme.textColorSecondary
      : `#414D55`};
`;

export const DescCard = styled.p`
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.416667px;
  color: ${(props) =>
    props.theme.textColorSecondary
      ? props.theme.textColorSecondary
      : `#414D55`};
  ${({ small }) =>
    small
      ? `font-size: 1.4rem; font-weight: normal; text-transform: unset;`
      : ``}
`;

export const IconMenuMobile = styled.div`
  cursor: pointer;
  display: none;

  ${media.lessThan('medium')`
    display: flex;
    align-items: center;
  `}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const AlignmentHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerApart = styled.div`
  display: flex;
  align-items: center;
`;

export const IconNotification = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  height: 4rem;
  width: 4rem;
  border-radius: 0.8rem;
  margin-right: 3rem;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    right: -0.4rem;
    top: -0.2rem;
    border-radius: 50%;
    ${({ notificationActive }) =>
      notificationActive ? `background: #007aff;` : ``}
  }
`;

export const TextMenu = styled.p`
  font-size: 1.4rem;
  color: #007aff;
`;

export const ContainerNotification = styled.div`
  position: relative;
`;

export const NotificationList = styled.div`
  position: absolute;
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  border-radius: 0.8rem;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  padding: 1rem;
  position: absolute;
  z-index: 999 !important;
  padding: 15px 5px;

  top: -21px;
  width: 315px;
  left: -270px;

  ${media.lessThan('885px')`
    top: -19px;
    left: -270px;
  `}

  ${media.lessThan('medium')`
    left: -270px;
  `}
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 9999999;
  overflow-y: auto;
  align-items: center;
  justify-content: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  padding-top: 5rem;
  padding: 2rem;
  margin: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${media.greaterThan('large')`
  width: 92rem;
    `}
`;

export const NotificationModalContent = styled.div`
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  border-radius: 0.8rem;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  padding: 1rem;
  z-index: 999 !important;
  padding: 15px 5px;
`;

export const ButtonClose = styled.div`
  position: absolute;
  right: 33px;
  top: -2.5rem;
  cursor: pointer;
`;
