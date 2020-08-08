import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function SubItem({ children, ...props }) {
  return (
    <S.SubMenu {...props}>
      <S.SubItem>{children}</S.SubItem>
    </S.SubMenu>
  );
}

SubItem.propTypes = {
  /**
   * children element
   */
  children: PropTypes.node,
};
