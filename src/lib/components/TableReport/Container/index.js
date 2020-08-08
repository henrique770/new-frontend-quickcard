import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Grid from '../../Grid';

export default function Container({ children, titleTable, shadow, ...props }) {
  return (
    <S.Card titleTable={titleTable} shadow={shadow} {...props}>
      {titleTable && <S.TitleTable>{titleTable}</S.TitleTable>}

      <Grid container xs={12} justify="center">
        <Grid xs={11}>
          <S.Container>{children}</S.Container>
        </Grid>
      </Grid>
    </S.Card>
  );
}

Container.propTypes = {
  /**
   * title of report table
   */
  titleTable: PropTypes.string,
  /**
   * box shadow (custom)
   */
  shadow: PropTypes.string,
  /**
   * children element
   */
  children: PropTypes.node,
};
