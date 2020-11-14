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
  text-align: center;
  justify-content: center;

  min-height: calc(100vh - 280px);
`;

export const ContainerEndDeck = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
