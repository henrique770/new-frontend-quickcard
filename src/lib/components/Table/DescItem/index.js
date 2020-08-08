import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function DescItem({ sizeField, descTitle, children, ...props }) {
  return (
    <S.DescItem sizeField={sizeField} {...props}>
      {descTitle && <S.DescTitle>{descTitle}</S.DescTitle>}
      {children}
    </S.DescItem>
  );
}

DescItem.propTypes = {
  /**
   * title of description table
   */
  descTitle: PropTypes.string,
  /**
   * size of field (flex basis) %.
   */
  sizeField: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
   * children element
   */
  children: PropTypes.node,
};
