import React from 'react';
import { Text } from '~/lib';

import emptyImage from '~/assets/img/empty.png';
import * as S from './styled';

export default function Empty() {
  return (
    <S.EmptyContainer>
      <S.MessageContainer>
        <S.Title weight="bold">Ops!</S.Title>
        <Text size={2.1}>No momento, não temos dados para mostrar.</Text>
      </S.MessageContainer>
      <S.ImageContainer>
        <img src={emptyImage} alt="ops" />
      </S.ImageContainer>
    </S.EmptyContainer>
  );
}
