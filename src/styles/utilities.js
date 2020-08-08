import styled from 'styled-components';
import media from 'styled-media-query';
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
  -webkit-columns: 25rem;
  -moz-columns: 25rem;
  columns: 25rem;
  -webkit-column-gap: 2rem;
  -moz-column-gap: 2rem;
  column-gap: 2rem;
`;

export const NoteGrid = styled(Grid)`
  margin-bottom: 2rem;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
`;
