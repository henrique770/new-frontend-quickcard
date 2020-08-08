/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import media from 'styled-media-query';
import { Header } from '~/lib';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const MainContent = styled.div`
  margin-left: 26rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan('769px')`
    margin-left: 0;
  `}
`;

export const ContainerLimit = styled.div`
  max-width: 160rem;
  padding: 0 3rem 3rem 0;
  margin-bottom: 3rem;
  width: 100%;

  ${media.lessThan('769px')`
    padding: 0 3rem!important;
  `}
`;

export const HeaderFormat = styled(Header)`
  padding: 3rem 0 3rem 0;
  ${media.lessThan('1180px')`
    padding: 3rem 0 0rem 0;
  `}

  ${media.lessThan('769px')`
    padding: 2rem 0;
  `}
`;

export const ContainerNotification = styled.div`
  position: relative;
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 315px;
  left: -264px;
  top: calc(100% + 30px);
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  border-radius: 0.8rem;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  padding: 1rem;
  position: absolute;
  z-index: 999 !important;
  padding: 15px 5px;
`;

export const Scroll = styled(PerfectScrollBar)`
  padding: 5px 15px;
  max-height: 340px;

  ${media.lessThan('500px')`
  max-height: 60vh!important;
  `}
`;

export const Notification = styled.div`
  position: relative;
  background: ${(props) =>
    props.theme.selectBackground ? props.theme.selectBackground : `#edeff569`};

  color: ${(props) =>
    props.theme.textColorPrimary ? props.theme.textColorPrimary : `#414D55`};
    transition: 0.3s;
  &:hover {
    transition: 0.3s;
    ${({ ...props }) =>
      `background: ${darken(
        0.1,
        props.theme.selectBackground
          ? props.theme.selectBackground
          : `#edeff569`
      )}`}
  }
  border-radius: 8px;
  padding: 1rem;
  & + div {
    margin-top: 15px;
  }
  ${({ newNotification }) =>
    newNotification ? `box-shadow: 0px 2px 4px #00000029;` : ``}

    ${({ newNotification, ...props }) =>
      newNotification
        ? props.theme.mode === 'light'
          ? `background: #edeff569;`
          : `background: #2a2b2c;`
        : ``}



  ${({ ReadNotification }) => (ReadNotification ? `opacity: 40%;` : ``)}
`;

export const TitleNotification = styled.h1`
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 1rem;

  span {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      right: -1.4rem;
      top: 0.5rem;
      border-radius: 50%;
      ${({ newNotification }) =>
        newNotification ? `background: #4ACF1B;` : ``}
    }
  }
`;

export const ContainerIconDelete = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const CleanAllNotifications = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Link = styled.a`
  span:hover {
    transition: 0.5s;
    color: #7ed321 !important;
  }
`;
