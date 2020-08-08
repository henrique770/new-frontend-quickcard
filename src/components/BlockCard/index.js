import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { MoreVert } from '@styled-icons/material-outlined';

import { ThemeContext } from 'styled-components';
import { Text, Card } from '~/lib';
import * as U from '~/styles/utilities';
import * as S from './styled';

export default function BlockCard({ title, previewText }) {
  const themeContext = useContext(ThemeContext);
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
        <Text color={themeContext.textColorSecondary}>{previewText}</Text>
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

BlockCard.propTypes = {
  title: PropTypes.string,
  previewText: PropTypes.string,
};
