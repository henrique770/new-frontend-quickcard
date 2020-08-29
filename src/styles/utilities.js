import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';

import { Text, Grid, Button } from '~/lib';

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

export const NoteGrid = styled(Grid)`
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
  z-index: 9999;
`;
