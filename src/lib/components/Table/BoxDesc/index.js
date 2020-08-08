import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function BoxDesc({ sizeField, ...props }) {
  return <S.BoxDesc sizeField={sizeField} {...props} />;
}

BoxDesc.propTypes = {
  /**
   * size of field (flex basis) %.
   */
  sizeField: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxDesc.defaultProps = {
  sizeField: '25',
};
