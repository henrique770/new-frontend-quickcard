import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';

import { Text, Grid, Button, Card } from '~/lib';

export const Responsive = styled.div`
  @media (max-width: ${({ width }) => (width ? `${width}` : '')}) {
    display: ${({ dsLess }) => (dsLess ? `${dsLess}` : '')};
  }

  @media (min-width: ${({ width }) => (width ? `${width}` : '')}) {
    display: ${({ dsGreater }) => (dsGreater ? `${dsGreater}` : '')};
  }
`;

export const Title = styled(Text)`
  font-size: 3rem !important;
  @media (max-width: 1280px) {
    font-size: 2.4rem !important;
  }
`;

export const FormCard = styled.form`
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: 0.8rem;
  padding: 3rem;
  width: 100%;
`;

export const GridPagination = styled(Grid)`
  position: relative;
  justify-content: center;

  @media (min-width: 450px) {
    justify-content: flex-end;
  }
`;

export const Total = styled.div`
  left: 0;
  position: absolute;

  @media (max-width: 435px) {
    position: relative;
  }
`;

export const ButtonResponsive = styled(Button)`
  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

// block card

export const NoteGridContainer = styled(Grid)`
  ${({ list }) =>
    list
      ? ''
      : `
  -webkit-columns: 25rem;
  -moz-columns: 25rem;
  columns: 25rem;
  -webkit-column-gap: 2rem;
  -moz-column-gap: 2rem;
  column-gap: 2rem;`}
`;

const appearFromBottom = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const NoteGrid = styled(Grid)`
  animation: ${appearFromBottom} 0.7s;
  margin-bottom: 2rem;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  position: relative;
`;

export const LinkNoDecoration = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColorSecondary};
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan('769px')`
    margin-left: 0;
  `}
`;

export const ContainerLimit = styled.div`
  max-width: 192rem;
  padding: 0 3rem;
  margin-bottom: 3rem;
  width: 100%;

  ${media.lessThan('769px')`
    padding: 0 3rem!important;
  `}
`;

export const ActionButtons = styled(Button)`
  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const ContainerPomodoro = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 3rem;
  z-index: 999;
`;

export const PomodoroCard = styled(Card)`
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  position: relative;
`;

export const ButtonClose = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
`;

export const ProgressContainer = styled.div`
  width: 13rem;
  position: relative;

  .CircularProgressbar-path {
    stroke: #3e98c7;
  }
  .CircularProgressbar-trail {
    stroke: gray;
  }
  .CircularProgressbar-text {
    fill: ${(props) => props.theme.textColorSecondary};
    font-size: 25px;
    font-weight: bold;
  }
  .CircularProgressbar-background {
    fill: green;
  }
`;
