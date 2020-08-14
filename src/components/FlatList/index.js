import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Close } from '@styled-icons/material-outlined';
import history from '~/services/history';

import { Text, Card } from '~/lib';
import * as U from '~/styles/utilities';
import * as S from './styled';

export default function FlatList({
  title,
  previewText,
  textFooter,
  deck,
  link,
  remove,
  notepad,
}) {
  const [isShown, setIsShown] = useState(false);

  return (
    //

    <U.NoteGrid
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Card
        titleCard={title}
        textFooter={textFooter}
        paddingBody="0 3rem 3rem 3rem"
        onClick={() => history.push(link)}
        radius="10"
        justifyContent="left"
      >
        {previewText && (
          <S.TextLimit
            unsafeHTML={previewText}
            maxLine="10"
            ellipsis="..."
            basedOn="letters"
          />
        )}

        {deck && deck}
        {notepad && notepad}
      </Card>

      {isShown && (
        <S.Options onClick={remove}>
          <Text>
            <Close size={25} color="#fe650e" />
          </Text>
        </S.Options>
      )}
    </U.NoteGrid>
  );
}

FlatList.propTypes = {
  title: PropTypes.string,
  previewText: PropTypes.string,
  link: PropTypes.string,
  remove: PropTypes.func,
  deck: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  notepad: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
};
