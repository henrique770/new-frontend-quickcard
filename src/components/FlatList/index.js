import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MoreVert } from '@styled-icons/material-outlined';

import { Text, Card } from '~/lib';
import * as U from '~/styles/utilities';
import * as S from './styled';

export default function FlatList({ title, previewText }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <U.NoteGrid>
      <Card
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        titleCard={title}
        paddingBody="0 3rem 3rem 3rem"
        radius="10"
        justifyContent="left"
      >
        <S.TextLimit
          unsafeHTML={previewText}
          maxLine="10"
          ellipsis="..."
          basedOn="letters"
        />
        {isShown && (
          <S.Options>
            <Text>
              <MoreVert size={25} color="#fe650e" />
            </Text>
          </S.Options>
        )}
      </Card>
    </U.NoteGrid>
  );
}

FlatList.propTypes = {
  title: PropTypes.string,
  previewText: PropTypes.string,
};
