import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Container({ children, padding, shadow, ...props }) {
  return (
    <S.Container padding={padding} shadow={shadow} {...props}>
      {children}
    </S.Container>
  );
}

Container.propTypes = {
  /**
   * custom padding
   */
  padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /**
   * box shadow (custom)
   */
  shadow: PropTypes.string,
  /**
   * children element
   */
  children: PropTypes.node,
};
