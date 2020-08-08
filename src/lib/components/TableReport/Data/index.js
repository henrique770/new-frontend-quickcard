import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Data({ children, content, bold, ...props }) {
  return (
    <S.Data content={content} {...props}>
      {content && <S.TextData bold={bold}>{content}</S.TextData>}
      {children}
    </S.Data>
  );
}

Data.propTypes = {
  /**
   * content of report table
   */
  content: PropTypes.string,
  /**
   * bold content of report table
   */
  bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * box shadow (custom)
   */
  shadow: PropTypes.string,
  /**
   * children element
   */
  children: PropTypes.node,
};
