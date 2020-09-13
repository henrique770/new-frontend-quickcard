import styled from 'styled-components';
import { Card, Text } from '~/lib';

export const FlashCard = styled(Card)`
  position: relative;
  height: 55rem;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export const TitleCard = styled(Text)`
  position: absolute;
  top: 2rem;
`;

export const CardContainer = styled.div`
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
